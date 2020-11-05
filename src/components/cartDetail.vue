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
                    <div class="order-items">
                        <div class="item item-thead">
                            <div class="image-type">Loại</div>
                            <span class="item-name">Tên sản phẩm</span>
                            <span class="quanlity">
                                Số lượng
                            </span>
                            <span class="price">
                                Đơn giá
                            </span>
                            <div class="btn-delete">
                            </div>
                        </div>
                        <div v-for="cartItem in cartItems" v-bind:key="cartItem.ProductID" class="item">
                            <div class="image-type">
                                <img src="../assets/laptop.png" v-show="cartItem.Type == 2" alt="">
                                <img src="../assets/smartphone.png" v-show="cartItem.Type == 1" alt="">
                            </div>
                            <span class="item-name">{{cartItem.Name}}</span>
                            <span class="quanlity">
                                <button @click="cartItem.QualityInCart--"> - </button>
                                <input type="number" min="1" v-model.number="cartItem.QualityInCart" readonly>
                                <button @click="plusQuanlity(cartItem)"> + </button>
                            </span>
                            <span class="price">
                                <span>{{cartItem.Price | formatMoney}}</span>
                            </span>
                            <div class="btn-delete" v-on:click="deleteItem(cartItem.ProductID)">
                                <button class="delete-item">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dialog-footer">
                <div class="bill">
                    <div class="row-bill"><p>Thành tiền:</p> <span>  {{subtoltal | formatMoney}}</span></div>
                    <div class="row-bill"><p>Thuế (VAT):</p> <span> {{vat | formatMoney}}</span></div>
                    <div class="row-bill"><p>Tổng tiền:</p> <span>  {{toltal | formatMoney}}</span></div>
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
                this.cartItems.push(product);
                busData.$emit('toltalInCart',this.cartItems.length);
            })
        },
        beforeUpdate(){
            busData.$emit('toltalInCart',this.cartItems.length);
        },
        methods:{
            btnCloseOnClick(){
                busData.$emit('closeLoginOnClick');            
            },
            plusQuanlity(item){
                console.log(item.Quality);
                if(item.Quality > 0){
                    item.QualityInCart++;
                    item.Quality--;
                }
            },
            deleteItem(id){
                for(let i =0;i<this.cartItems.length;i++){
                    if(this.cartItems[i].ProductID == id){
                        this.cartItems[i].Quality += this.cartItems[i].QualityInCart;
                        this.cartItems[i].QualityInCart = 0;
                        this.cartItems.splice(i,1);
                    }
                }
            },
           
        },
        computed:{
            subtoltal(){
                let t = 0;
                for(let i=0;i<this.cartItems.length;i++){
                    t += this.cartItems[i].QualityInCart * this.cartItems[i].Price;
                }
                return t;
            },
            vat(){
                return 0.1*this.subtoltal;
            },
            toltal(){
                return this.vat + this.subtoltal;
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
    height: calc(100% - 200px);
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
    height: 160px;
    justify-content: space-between;
}
.bill{
    width: 450px;
    margin: auto 0px;
    padding: 0px 10px;
    background-color: #ececec;
}
.row-bill{
    display: flex;
    align-items: center;
    width: 100%;
}
.row-bill p{
    margin: 10px 0px;
    width: 150px;
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
.image-type {
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px 0px 5px;
}
.image-type img{
    width: 100%;
    height: 100%;
}
.item-name{
    width: 250px;
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