<template> 
<div>  
  <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside   style="background-color: rgb(238, 241, 246);min-height: calc(100vh - 16px);">
  <el-row class="tac">
 
  <el-col :span="12"> 
    <el-menu
    router
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>File</span>
        </template>
         <el-menu-item index="1-1" :route="{name:'upload' }"   > 
           <i class="el-icon-upload"></i>
           <span>upload</span> 
           </el-menu-item>
          <el-menu-item index="1-2"  :route="{name:'management' }"  > 
            <i class="el-icon-s-management"></i> 
            <span>management</span>
            </el-menu-item>
          <el-menu-item index="1-3"  :route="{name:'compose' }"   >
             <i class="el-icon-edit-outline"></i> 
             <span>compose
               </span>
          </el-menu-item>  
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </el-aside>
  <el-container>
     <router-view></router-view>
  </el-container>
</el-container>
    
</div>

</template>
<style> 
</style>

<script> 
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>