<template>
  <div class="demo-if">
            <div class="sign-in" v-if="FormMode === `SignIn`">
                <h1>Đăng nhập</h1>
                <input type="text" placeholder="Tên đăng nhập">
                <input type="text" placeholder="Mật khẩu">
                <button>Đăng nhập</button>
                <div class="account-act">
                    <a v-on:click="changeTabs('SignUp')">Chưa có tài khoản?</a>
                    <a v-on:click="changeTabs('ForgotPass')">Quên mật khẩu?</a>
                </div>
            </div>
            <div class="sign-in" v-else-if="FormMode === `SignUp`">
                <h1>Đăng ký</h1>
                <input type="text" placeholder="Tên đăng nhập">
                <input type="text" placeholder="Mật khẩu">
                <input type="text" placeholder="Nhập lại mật khẩu">
                <button>Đăng ký</button>
                <div class="account-act">
                    <a v-on:click="changeTabs('SignIn')">Đã có tài khoản?</a>
                    <a v-on:click="changeTabs('ForgotPass')">Quên mật khẩu?</a>
                </div>
            </div>
            <div class="sign-in" v-else>
                <h1>Lấy lại mật khẩu</h1>
                <input type="text" placeholder="Tên đăng nhập">
                <input type="text" placeholder="Email đăng ký">
                <button>Gửi mật khẩu</button>
                <div class="account-act">
                    <a v-on:click="changeTabs('SignIn')">Đã có tài khoản?</a>
                    <a v-on:click="changeTabs('SignUp')">Chưa có tài khoản?</a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      FormMode:"SignIn"
    }
  },
  methods:{
    changeTabs(formMode){
        this.FormMode = formMode;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-if{
    width: 500px;
    height: 300px;
}
.sign-in{
    padding: 10px;
    background-color:#f9f9f9;
    height: 100%;
}
.sign-in .account-act{
    cursor: pointer;
    color: blue;
    text-align: center;
    display: block;
}
.account-act > *{
  margin-left: 10px;
}
.demo-if h1{
    text-align: center;
}
.demo-if button{
    display: block;
    margin: 5px auto;
}
</style>
