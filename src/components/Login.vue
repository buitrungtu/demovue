<template>
    <div>
        <div class="black-model"></div>
        <div class="dialog">
            <div class="dialog-name">
                <div class="title-text">
                    Đăng nhập
                </div>
                <div class="title-button-close"></div>
            </div>
            <div class="dialog-body">
                <h1 class="dialog-title">Welcome back</h1>
                <div class="row-info">
                    <label>Tên đăng nhập:</label>
                    <input tabindex="1" type="text" id="userName">
                </div>
                <div class="row-info">
                    <label>Mật khẩu:</label>
                    <input tabindex="2" type="text">
                </div>
                <div class="dialog-btn">
                    <button tabindex="3">Đăng nhập</button>
                </div>
                <div class="dialog-act">
                    <a href="#" tabindex="4">Chưa có tài khoản?</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        },
        mounted(){
            var userName = document.getElementById("userName");
            userName.focus();
            console.log("dsadsadsa");
        }

    }
</script>

<style scoped>
.black-model{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    background-color: #000;
}
.dialog {
    position: absolute;
    top: calc(50% - 200px);
    left: calc(50% - 300px);
    width: 600px;
    height: 400px;
    border:6px solid #27ae60;
    border-top:10px solid #27ae60;
    border-radius: 5px;
    background-color: #fff;
}
.dialog .dialog-name {
    height: 30px;
    background-color: #27ae60;
    color: #fff;
    display: flex;
}
.title-button-close {
    position: absolute;
    right: 0;
    border: 1px solid #ccc;
    width: 20px;
    height: 20px;
    background-image: url('../assets/close.png');
    background-repeat: no-repeat;
    border-radius: 50%;
    background-position: center;
    cursor: pointer;
    background-size: cover;
    background-color: #fff;
}
.dialog-body{
    padding: 5px 10px;
}
.dialog-title{
    text-align: center;
    color: #27ae60;
}
.row-info{
    display: flex;
    width: 100%;
    margin: 20px 0px;
}
.row-info label{
    margin-right: 20px;
    width: 150px;
}
.row-info input{
    outline: none;
    width: calc(100% - 150px);
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
    padding: 10px 40px;
    outline:  none;
    border: 1px solid #27ae60;
    cursor: pointer;
    border-radius: 5px;
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