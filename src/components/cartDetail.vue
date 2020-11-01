<template>
    <div>
        <div class="black-model"></div>
        <div class="dialog dialog-cart">
            <div class="dialog-name">
                <div class="title-text">
                    <img src="../assets/shopping-cart.png" class="icon">
                    Giỏ hàng của bạn
                </div>
                <div class="title-button-close" v-on:click="btnCloseOnClick()"></div>
            </div>
            <div class="dialog-body">
                <div class="logo-tiki">
                    <img src="../assets/tiki-cart.png"/>
                </div>
                <div class="dialog-content">
                    <ul class="order-items">
                        <li class="item item-thead">
                            <span class="item-name">Tên sản phẩm</span>
                            <span class="quanlity">
                                Số lượng
                            </span>
                            <span class="price">
                                Đơn giá
                            </span>
                            <div class="btn-delete">
                            </div>
                        </li>
                        <li v-for="cartItem in cartItems" v-bind:key="cartItem.ProductID" class="item">
                            <span class="item-name">{{cartItem.Name}}</span>
                            <span class="quanlity">
                                <button> - </button>
                                <input type="number" v-bind:value="cartItem.QuanlityCart">
                                <button> + </button>
                            </span>
                            <span class="price">
                                <span>{{cartItem.Price}}</span>
                            </span>
                            <div class="btn-delete">
                                <button class="delete-item">X</button>
                            </div>
                        </li>
                        
                        
                        
                    </ul>
                </div>
            </div>
            <div class="dialog-footer">
                <div class="bill">
                    <p>Thành tiền: <span>  49.400.000 vnđ</span></p>
                    <p>Thuế (VAT): <span> 600.000 vnđ</span></p>
                    <p>Tổng tiền: <span> 50.000.000 vnđ</span></p>
                </div>
                <div class="btn-buy">
                    <button>Thanh toán <img src="../assets/dollar.png" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {busData} from '../main.js';

    export default {
        data(){
            return{
                cartItems : [],

            }
        },
        created(){
            busData.$on('addToCartDetail',(product)=>{
                product.QuanlityCart = 1;
                this.cartItems.push(product);
            })
        },
        methods:{
            btnCloseOnClick(){
                busData.$emit('closeLoginOnClick');            
            },

        }
    }
</script>

<style scoped>

.dialog.dialog-cart{
    border:6px solid #2d9cdb;
    border-top:10px solid #2d9cdb;
}
.dialog .dialog-name {
    background-color: #2d9cdb;
}
.dialog-body{
    height: calc(100% - 150px);
}
.logo-tiki{
    text-align: center;
    width: 100%;
    height: 80px;
    padding-bottom:2px;
    border-bottom: 2px solid #ccc;
}
.logo-tiki img{
    width: 100px;
    height: 100%;
}
.dialog-content{
    width: 100%;
    height: calc(100% - 84px);
    padding-bottom:2px;
    border-bottom: 2px solid #ccc;
    overflow-y: scroll;
}
.dialog-content::-webkit-scrollbar{
  width: 3px;
  background-color: #fff;
}
.dialog-content::-webkit-scrollbar-thumb{
  background-color: #ccc;
}
.dialog-footer{
    display: flex;
    width: calc(100% - 60px);
    height: 100px;
    justify-content: space-between;
}
.bill p{
    margin: 10px 0px;
}
.bill span{
    color: red;
}
.btn-buy{
    display: flex;
    align-items: center;
}
.btn-buy button{
    padding: 15px 35px;
    background-color: #27ae60;
    border: 1px solid #27ae60;
    color: #fff;
    display: flex;
    align-items: center;
}

.btn-buy button:hover{
    background-color: #ed9528;
    border: 1px solid #ed9528;
}
.btn-buy button img{
    max-width: 20px;
    margin-left: 8px;
}
.order-items{
    padding: 0px;
    margin: 5px;
}
.order-items .item{
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}
.item.item-thead{
    padding-bottom: 2px;
    color: #2d9cdb;
}
.item-name{
    width: 230px;
    text-align: center;
}
.quanlity{
    width: 170px;
    text-align: center;
}

.quanlity button{
    width: 30px;
    padding: 5px 5px;
    border: 1px solid #ccc;
    background: transparent;
    border-radius: 50%;
    font-weight: bold;
    font-size: 15px;
    color: #000;
}
.quanlity button:hover,button:focus{
    border: 1px solid #27ae60;
    background: #27ae60;
    color: #fff;
}
.quanlity input{
    width: 35px;
    height: 22px;
    border: 1px solid #ccc;
    outline: none;
    margin: 0px 10px;
    border-radius: 5px;
}
.quanlity input:focus{
    border: 1px solid #2d9cdb;
}
.price{
    width: calc(100% - 440px);
    text-align: center;
}
.btn-delete{
    display: flex;
    width: 40px;
    align-items: center;
}
.delete-item{
    padding: 1px 5px;
    border-radius: 50%;
    outline: none;
    border: 1px solid #ccc;
    background-color: #2d9cdb;
    color: #fff;
    width: 20px;
}
</style>