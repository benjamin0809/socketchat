<template>
  <div class="management-container">
    <div class="backdrop" v-if="showbackdrop" @click.stop="closeBackdrop">
      <img id="qrcode" :src="backdropimg" />
    </div>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-input
          placeholder="Please input"
          v-model="keyword"
          @keyup.enter.native="getFiles"
          class="input-with-select"
        >
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="按时间降" value="UNIX_TIMESTAMP(createTime)-desc"></el-option>
            <el-option label="按时间升 " value="UNIX_TIMESTAMP(createTime)-asc"></el-option>
            <el-option label="文件大小升" value="fileSize-asc"></el-option>
            <el-option label="文件大小降" value="fileSize-desc"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="getFiles">搜索</el-button>
        </el-input>
      </el-header>

      <el-main>
        <el-table class="table" :data="tableData" v-loading="loading">
          <el-table-column prop="createTime" label="createTime" width="140" onmouseover="mouse"></el-table-column>
          <el-table-column prop="filename" label="filename"></el-table-column>
          <el-table-column prop="fullpath" label="fullpath"></el-table-column>
          <el-table-column prop="fileSize" label="fileSize" width="120"></el-table-column>
          <el-table-column prop="handle" label="handle">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon=" el-icon-view"
                circle
                @click="handleEdit(scope.$index, scope.row)"
              ></el-button>

              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="handleDelete(scope.$index, scope.row)"
              ></el-button>

              <img
                id="qrimage"
                @click="mouse($event,scope.row)"
                src="data:image/png;base64,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"
              />
            </template>
          </el-table-column>
        </el-table>

        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[pageSize * 1, pageSize * 2, pageSize * 3, pageSize * 4]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<style>
.management-container {
  position: relative;
}
.el-select .el-input {
  width: 150px;
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

.pagination {
  text-align: center;
  height: 32px;
  padding: 8px 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}

.table {
  margin-bottom: 48px;
}
</style>

<script>
import fileService from "../api/file";
export default {
  data: function() {
    return {
      instance: null,
      keyword: "",
      valid: false,
      token: 0,
      select: "UNIX_TIMESTAMP(createTime)-desc",
      visible: false,
      tableData: [],
      currentPage: 1,
      loading: false,
      showbackdrop: false,
      backdropimg: "",
      pageSize: 20,
      total: 0
    };
  },
  methods: {
    mouse($event, row) {
      console.log($event, row);

      this.showbackdrop = true;

      QRCode.toDataURL(row.fullpath)
        .then(url => {
          console.log(url);
          this.backdropimg = url;
        })
        .catch(err => {
          console.error(err);
        });
    },
    closeBackdrop() {
      this.showbackdrop = false;
    },
    validToken() {
      this.getFiles();
    },
    getFiles() {
      if (!this.token) {
        return;
      }
      this.loading = true;
      const queryCondi = {
        orders: [],
        filters: [],
        currentPage: this.currentPage,
        pageSize: this.pageSize
      };
      queryCondi.orders.push({
        orderby: this.select.split("-").pop(),
        key: this.select.split("-")[0],
        priority: 2
      });
      queryCondi.filters.push({ key: "filename", value: this.keyword });
      fileService
        .getFiles(queryCondi)
        .then(response => {
          // handle success

          if (this.token) {
            localStorage.setItem("token", this.token);
          }
          console.log(response);
          this.valid = true;

          if (Array.isArray(response.data.data)) {
            this.tableData = response.data.data;
            this.total = response.data.total;
          } else {
            this.tableData.push({
              createTime: new Date().toDateString(),
              fullpath: "http://www.popochiu.com"
            });
          }
          this.loading = false;
        })
        .catch(function(error) {
          // handle error
          this.loading = false;
          console.log(error);
        });
    },
    handleEdit(index, row) {
      window.open(row.fullpath);
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      if (!row.id) return;
      fileService.removeFileById(row.id)
        .then(response => {
          this.tableData.splice(index, 1);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .finally(function() {
          // always executed
        });
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
      this.currentPage = val;
      this.getFiles();
    }
  },
  mounted() {
    let token = localStorage.getItem("token");
    this.token = token;
    this.getFiles();
  }
};
</script>