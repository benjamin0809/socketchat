<template>
  <div class="app-container" :class="{ 'mobile': isMobileDevice }">
    <div v-if="showbackdrop" class="backdrop" @click.stop="closeBackdrop">
      <img id="qrcode" :src="backdropimg" />
    </div>
    <el-container style="border: 1px solid #eee">
      <el-container>
        <el-header class="expand">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" >
            <el-form-item label="File name">
              <el-input v-model="formInline.filename" placeholder="e.g 123" />
            </el-form-item>

            <el-form-item label="Create ST">
              <el-date-picker
                v-model="formInline.startdate"
                type="datetime"
                placeholder="start datetime"
              />
            </el-form-item>

              <el-form-item label="Create ET">
              <el-date-picker
                v-model="formInline.enddate"
                type="datetime"
                placeholder="end datetime"
              />
            </el-form-item>

            <el-form-item label="Orders">
              <el-select v-model="select" placeholder="Select" @change="getFiles">
                <el-option label="按时间降" value="UNIX_TIMESTAMP(createTime)-desc" />
                <el-option label="按时间升 " value="UNIX_TIMESTAMP(createTime)-asc" />
                <el-option label="文件大小升" value="fileSize-asc" />
                <el-option label="文件大小降" value="fileSize-desc" />
              </el-select>
            </el-form-item>

            <el-form-item label="File Type">
              <el-select v-model="formInline.filetype" placeholder="e.g image/jpeg">
                <el-option label="all" value />
                <el-option
                  v-for="item in fileType"
                  :key="item.filetype"
                  :label="item.filetype"
                  :value="item.filetype"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getFiles">Query</el-button>
            </el-form-item>
          </el-form>
        </el-header>

        <el-main>
          <el-table v-loading="loading" :data="tableData" v-if="!isMobileDevice">
            <el-table-column prop="createTime" label="createTime" width="160" onmouseover="mouse" />
            <el-table-column prop="filename" label="filename" />
            <el-table-column prop="fullpath" label="fullpath" />
            <el-table-column prop="fileSize" label="fileSize" min-width="120" />
            <el-table-column prop="handle" label="handle">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon=" el-icon-view"
                  circle
                  @click="handleEdit(scope.$index, scope.row)"
                />

                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleDelete(scope.$index, scope.row)"
                />

                <el-button circle @click="mouse($event,scope.row)">
                  <svg-icon name="QR-code" class="icon" />
                </el-button>
              </template>
            </el-table-column>
          </el-table>

<el-table  v-loading="loading" v-if="isMobileDevice"
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <p><label>fullpath:</label> {{ props.row.fullpath }}</p>
        <p><label>fileSize:</label>  {{ props.row.fileSize }}</p>
        <p><label>width:</label>  {{ props.row.width }}</p>
        <p><label>height:</label>  {{ props.row.height }}</p>
        <el-button
                  type="primary"
                  icon=" el-icon-view"
                  circle
                  @click="handleEdit(props.$index, props.row)"
                />

                <el-button
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  @click="handleDelete(props.$index, props.row)"
                />
                <el-button circle @click="mouse($event,props.row)">
                  <svg-icon name="QR-code" class="icon" />
                </el-button> 
      </template>
    </el-table-column>
    <el-table-column
      label="createTime"
      prop="createTime">
    </el-table-column>
    <el-table-column
      label="fileName"
      prop="filename">
    </el-table-column>
  </el-table>
          <div class="block">
            <el-pagination
              :current-page.sync="currentPage"
              :page-sizes="[pageSize * 1, pageSize * 2, pageSize * 3, pageSize * 4]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { toggleClass, isMobileDevice } from "@/utils";
import { fetchFiles, removeFile, getFileType, baseURL } from "@/api/file";
import { dateFormat } from "@/utils/date";
import "@/assets/custom-theme/index.css"; // the theme changed version element-ui css
@Component({
  name: "File"
})
export default class extends Vue {
  private isMobileDevice = isMobileDevice();
  private QRCode: any;
  private currentPage = 1;
  private pageSize = 20;
  private total = 1000;
  private keyword = "";
  private select = "UNIX_TIMESTAMP(createTime)-desc";
  private loading = false;
  private backdropimg = "";
  private fileType = [];
  private formInline = {
    filename: "",
    filetype: "",
    startdate: "",
    enddate: ""
  };

  private onSubmit() {
    console.log(this.formInline);
  }
  private mouse($event: any, row: any) {
    console.log($event, row);

    this.showbackdrop = true;
    this.QRCode.toDataURL(row.fullpath).then((url: string) => {
      this.backdropimg = url;
    });
  }
  private handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
    this.currentPage = val;
    this.getFiles();
  }
  private closeBackdrop() {
    this.showbackdrop = false;
  }

  private getFileType() {
    getFileType().then(data => {
      this.fileType = data;
    });
  }
  private getFiles() {
    this.loading = true;
    const queryCondi = {
      orders: [{}],
      filters: [{}],
      currentPage: this.currentPage,
      pageSize: this.pageSize
    };
    queryCondi.orders.push({
      orderby: this.select.split("-").pop(),
      key: this.select.split("-")[0],
      priority: 2
    });
    if (this.formInline.filename) {
      queryCondi.filters.push({
        key: "filename",
        value: this.formInline.filename
      });
    }

    if (this.formInline.filetype) {
      queryCondi.filters.push({
        key: "filetype",
        value: this.formInline.filetype
      });
    }

    if (this.formInline.startdate || this.formInline.enddate) {
      queryCondi.filters.push({
        key: "createtime",
        value: [
          this.formInline.startdate ? dateFormat(this.formInline.startdate) : 0,
          this.formInline.enddate
            ? dateFormat(this.formInline.enddate)
            : dateFormat("9999-01-01")
        ],
        scope: true
      });
    }

    fetchFiles(queryCondi)
      .then(res => {
        this.tableData = res.data;
        this.total = res.total;
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
        console.error(err);
      });
  }

  private handleEdit(index: number, row: any) {
    debugger
    let url = row.fullpath;
    if (!~url.indexOf("http")) {
      url = baseURL + url;
    }
    console.log(url);
    window.open(url);
    console.log(index, row);
  }

  private handleDelete(index: number, row: any) {
    console.log(index, row);
    if (!row.id) return;
    removeFile(row.id)
      .then(res => {
        this.tableData.splice(index, 1);
      })
      .catch(err => {
        console.error(err);
      });
  }
  private handleSizeChange(val: number) {
    console.log(`${val} items per page`);
    this.pageSize = val;
  }
  private showbackdrop = false;
  public tableData = [];

  private created() {
    this.getFiles();
    this.getFileType();
  }
}
</script>

<style lang="scss" scoped>

.mobile{
  .el-main {
      padding: 0px;
  }  
  .el-header{
    padding: 8px;
  } 

  .expand{
    height: auto !important;
  }
}  

el-header {
  text-align: left;
  font-size: 12px;
  height: auto !important;
}

header { 
  transition: all 0.35s;
  height: auto !important;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-main {
  min-height: calc(100vh - 72px);
}

.cell {
  display: flex;
}

.cell img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 5px;
}

.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
}

.backdrop img {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
