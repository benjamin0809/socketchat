<template>
  <div class="login-bg">
    <el-form class="login-form">
      <el-form-item prop="account">
        <el-input placeholder="用户名" v-model="account">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>

      <el-form-item prop="pass">
        <el-input placeholder="密码" v-model="password" show-password>
          <i slot="prefix" class="el-input__icon el-icon-s-cooperation"></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <div class="buttons">
          <el-button @click="resetForm('ruleForm')" size="medium ">注册</el-button>
          <el-button
            class="submit"
            type="primary"
            @click="submitForm()"
            size="medium "
            :loading="loading"
          >登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
 <style  >
.login-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: -webkit-linear-gradient(#2c3c50, #2c3e50);
}
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 48px;
  background: #607d8b;
  box-shadow: -3px 8px 7px 3px #353030;
}

.login-form .buttons {
  display: flex;
}

.login-form .buttons .submit {
  flex-grow: 1;
}
</style>

 <script>
export default {
  data() {
    return {
      account: "benjamin",
      password: "123",
      loading: false
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      console.log(this.account, this.password);
      this.$store
        .dispatch("login", {
          account: this.account,
          password: this.password
        })
        .then(res => {
          this.$router.push({ path: "/file/management" });
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
        });
    }
  }
};
</script>
 
 

