<template>
  <div>
     <quill-editor :content="content"
                :options="editorOption"
                @change="onEditorChange($event)">
  </quill-editor>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.ql-editor{
  min-height: 400px;
} 
</style>



<script> 

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      isCollapse: true,
      content: '<p>example content</p>',
      editorOption: { /* quill options */ }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onEditorChange(event) {
       this.content = event.html
        console.log(this.content)
      }
  },
mounted(){ 
}
};
</script>