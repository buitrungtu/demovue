<template>
    <div>
        <div class="black-model"></div>
        <div class="dialog dialog-login">
            <div class="dialog-name">
                <div class="title-text" v-show="!isSignIn">
                    <img src="../assets/login.png" class="icon">
                    Đăng nhập
                </div>
                 <div class="title-text" v-show="isSignIn">
                     <img src="../assets/signin.png" class="icon">
                    Đăng ký
                </div>
                <div class="title-button-close login" v-on:click="btnCloseOnClick()"></div>
            </div>
            <div class="dialog-body">
                <h1 class="dialog-title" v-show="!isSignIn">Welcome back</h1>
                <h1 class="dialog-title" v-show="isSignIn">Welcome</h1>
                <div class="row-info">
                    <label>Tên đăng nhập:</label>
                    <input tabindex="1" v-model.trim="userName" type="text" id="userName">
                </div>
                <div class="row-info">
                    <label>Mật khẩu:</label>
                    <input tabindex="2" v-model.trim="passWord" type="text">
                </div>
                <div class="row-info" v-show="isSignIn">
                    <label>Nhập lại mật khẩu:</label>
                    <input tabindex="2"  v-model.trim="passWord" type="text">
                </div>
               
                <div class="dialog-btn">
                    <button tabindex="3" v-show="!isSignIn" v-on:click="btnLoginOnClick()">  Đăng nhập  </button>
                    <button tabindex="3" v-show="isSignIn" v-on:click="btnLoginOnClick()">  Đăng ký  </button>
                </div>
                <div class="dialog-act">
                    <a href="#" tabindex="4" v-show="!isSignIn" v-on:click="btnSignInOnClick()">Chưa có tài khoản?</a>
                    <a href="#" tabindex="4" v-show="isSignIn" v-on:click="btnSignInOnClick()">Đăng nhập ngay</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '../main.js';
    export default {
        props:{
            formMode:Number
        },
        data(){
            return{
                userName : "",
                passWord:"",
                isSignIn:false
            }
        },
        mounted(){
            if(this.formMode == 1)  this.isSignIn = false;
            else    this.isSignIn = true;
            var userName = document.getElementById("userName");
            userName.focus();
            // $('#userName').focus();
        },
        methods:{
            btnCloseOnClick(){
                busData.$emit('closeLoginOnClick');
            },
            btnLoginOnClick(){
                // kiểm tra tính chính xác của tài khoản
                // cập nhập thông tin cho bên header
                busData.$emit('LoginHasDone',this.userName);
                this.btnCloseOnClick();
            },
            btnSignInOnClick(){
                if(this.isSignIn)   return this.isSignIn = false;
                else    return this.isSignIn = true;
            }
        }

    }
</script>

<style scoped>
.dialog.dialog-login{
    top: calc(50% - 180px);
    left: calc(50% - 300px);
    width: 600px;
    height: 360px;
}
.title-button-close.login{
    background-image: url('../assets/close.png');
}
.row-info{
    display: flex;
    width: 100%;
    margin: 20px 0px;
}
.row-info label{
    margin-right: 20px;
    width: 175px;
    text-align: center;
}
.row-info input{
    outline: none;
    width: calc(100% - 175px);
    border: 1px solid #ccc;
}
.row-info input:focus{
    border: 1px solid #27ae60;
}
.dialog-btn{
    margin: 10px;
    display: flex;
    justify-content: center;
}
.dialog-btn button{
    color: #fff;
    background-color: #27ae60;
    border: 1px solid #27ae60;
}
.dialog-btn button:hover,.dialog-btn button:focus{
    background-color: #ed9528;
    border: 1px solid #ed9528;
}
.dialog-act{
    text-align: center;
    margin-top: 20px;
}
.dialog-act a{
    text-decoration: none;
    color: #2d9cdb;
}
</style>