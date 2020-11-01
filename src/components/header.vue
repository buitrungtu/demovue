<template>
    <div class="header">
        <div class="nav">
            <ul class="nav-links">
                <li class="link" v-bind:class="{active:userSelect == 0}" v-on:click="changeTab(0)">
                    <a href="#/" class="link-item">Tất cả</a>
                </li>
                 <li class="link" v-bind:class="{active:userSelect == 1}" v-on:click="changeTab(1)">
                    <a href="#/" class="link-item"  >Điện thoại</a>
                </li>
                 <li class="link" v-bind:class="{active:userSelect == 2}" v-on:click="changeTab(2)">
                    <a href="#/" class="link-item" >Máy tính</a>
                </li>
            </ul>
        </div>
        <div class="cart" v-on:click="showCartDetail()">
            <button class="btn-cart">
                Giỏ hàng
                <img src="../assets/shopping-cart.png" class="icon-cart"/>
            </button>
            <div class="cart-qlt" v-show="cartQLT > 0">
                {{cartQLT}}
            </div>
        </div>
        <div class="account">
            <div class="account-detail" v-if="isSignIn">
                <p> Xin chào: <span class="user-name"> {{formatUserName}} </span></p>
                <p class="log-out" v-on:click="btnLogoutOnClick()">Đăng xuất</p>
            </div>
            <div class="account-sign" v-else>
                <button v-on:click="btnLoginOnClick(1)">Đăng nhập</button>
                <button v-on:click="btnLoginOnClick(2)">Đăng ký</button>
            </div>
        </div>
    </div>
    
</template>

<script>

import {busData} from '../main.js';

    export default {
        props:{
            userSelect:Number
        },
        data(){
            return{
                isSignIn: false,
                userName:"",
                cartQLT : 0,
            }
        },
        created(){
            busData.$on('LoginHasDone',(userName)=>{
                this.isSignIn = true;
                this.userName = userName;
            })
            busData.$on('addToCart',()=>{
                this.cartQLT += 1;
            })
        },
        methods:{
            changeTab(tabNumber){
                busData.$emit('changeTab',tabNumber);
            },
            btnLoginOnClick(formMode){
                busData.$emit('loginOnClick',formMode);
            },      
            btnLogoutOnClick(){
                this.userName = "";
                this.isSignIn = false;
            },
            showCartDetail(){
                busData.$emit('showCartDetail');
            }     
        },
        computed:{
            formatUserName(){
                if(this.userName.length > 10){
                    return this.userName.slice(0,10)+ "...";
                }
                return this.userName;
            }
        }
    }
</script>

<style scoped>
.header{
    width: 100%;
    height: 70px;
    background-color: #333;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav{
    width: 600px;
}
.nav-links{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    list-style: none;
}
.link{
    padding: 0 20px 10px 20px;
    border-bottom:3px solid transparent;
}
.active{
    border-bottom-color:#27ae60;
}
.link a{
    color: #fff;
    text-decoration: none;
}

.cart{
    position: relative;
}

.btn-cart{
    background-color: #2d9cdb;
    color: #fff;
    display: flex;
    justify-content: space-around;
    border: 1px solid #2d9cdb;
    font-weight: bold;
    line-height: 1.5;
}

img.icon-cart {
    max-width: 20px;
    margin-left: 8px;
}
.cart-qlt{
    position: absolute;
    width: 32px;
    height: 27px;
    background-color: #fff;
    border-radius: 50%;
    top: -10px;
    right: -10px;
    text-align: center;
    cursor: pointer;
}
.account-sign {
    width: 310px;
}
.account{
    color: #fff;
}
.account-detail{
    display: flex;
}
.account-detail p{
    margin-left: 20px;
}
.user-name{
    color: #27ae60;
}
.log-out{
    cursor: pointer;
}
.account-sign button{
    background-color: #27ae60;
    border: 1px solid #27ae60;
    color: #fff;
    margin-left: 10px;
}
.account-sign button:hover,.btn-cart:hover{
    background-color: #ed9528;
    border: 1px solid #ed9528;
}
</style>