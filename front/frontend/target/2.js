(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{243:function(t,n,o){var s=o(245);"string"==typeof s&&(s=[[t.i,s,""]]);o(11)(s,{});s.locals&&(t.exports=s.locals)},244:function(t,n,o){"use strict";var s=o(243);o.n(s).a},245:function(t,n,o){(t.exports=o(10)(!1)).push([t.i,"\n.login-bg {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: -webkit-linear-gradient(#2c3c50, #2c3e50);\n}\n.login-form {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 24px 48px;\r\n  background: #607d8b;\r\n  box-shadow: -3px 8px 7px 3px #353030;\n}\n.login-form .buttons {\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.login-form .buttons .submit {\r\n  -ms-flex-positive: 1;\r\n      flex-grow: 1;\n}\r\n",""])},246:function(t,n,o){"use strict";o.r(n);var s={data:function(){return{account:"benjamin",password:"123",loading:!1}},methods:{submitForm:function(){var t=this;this.loading=!0,console.log(this.account,this.password),this.$store.dispatch("login",{account:this.account,password:this.password}).then(function(n){t.$router.push({path:"/file/management"}),t.loading=!1}).catch(function(n){t.loading=!1})}}},i=(o(244),o(4)),r=Object(i.a)(s,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"login-bg"},[o("el-form",{staticClass:"login-form"},[o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{attrs:{placeholder:"用户名"},model:{value:t.account,callback:function(n){t.account=n},expression:"account"}},[o("i",{staticClass:"el-input__icon el-icon-user",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),o("el-form-item",{attrs:{prop:"pass"}},[o("el-input",{attrs:{placeholder:"密码","show-password":""},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}},[o("i",{staticClass:"el-input__icon el-icon-s-cooperation",attrs:{slot:"prefix"},slot:"prefix"})])],1),t._v(" "),o("el-form-item",[o("div",{staticClass:"buttons"},[o("el-button",{attrs:{size:"medium "},on:{click:function(n){return t.resetForm("ruleForm")}}},[t._v("注册")]),t._v(" "),o("el-button",{staticClass:"submit",attrs:{type:"primary",size:"medium ",loading:t.loading},on:{click:function(n){return t.submitForm()}}},[t._v("登录")])],1)])],1)],1)},[],!1,null,null,null);n.default=r.exports}}]);
//# sourceMappingURL=2.js.map?6a894449b050745576ca