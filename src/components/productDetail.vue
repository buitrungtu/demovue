<template>
    <div class="product-detail">
        <div class="history">
            <a href="#/">Product</a> > {{product.Name}}
        </div>
        <div class="product-info">
            <div class="left">
                <img v-bind:src="product.Image">
            </div>
            <div class="right">
                <div class="product-name">
                    <h1>{{product.Name}}</h1>
                </div>
                <div class="product-row">
                    <span> Giá:</span> {{product.Price | formatMoney}}
                </div>
                <div class="product-row">
                    <span> Số lượng còn:</span> {{product.Quality}}
                </div>
                <div class="product-row">
                   <span> CPU:</span> {{product.CPU}}
                </div>
                <div class="product-row">
                    <span> RAM:</span> {{product.RAM}} 
                </div>
                <div class="product-row">
                    <span> VGA:</span> {{product.VGA}}
                </div>
                <div class="product-row">
                    <span> Ổ cứng:</span> {{product.HardDrive}}
                </div>
                <div class="product-row">
                    <span> Màu sắc:</span> {{product.Color}}
                </div>
                <div class="btn-add-cart">
                    <button  v-show="product.QualityInCart == 0" v-on:click="addToCart()">
                        <p>Thêm vào giỏ</p> 
                        <img src="../assets/shopping-cart.png" class="icon"/>
                    </button>
                    <button class="hasCart" v-show="product.QualityInCart != 0">
                        <p>Đã có trong giỏ</p> 
                        <img src="../assets/shopping-cart.png" class="icon"/>
                    </button>
                </div>
            </div>
        </div>
        <div class="history">
            <a href="#/">Liên quan</a>
        </div>

        <div class="slider">
            <a href="#" @click="changeProductDetail(item)" class="img-slide" v-for="item in recommend" v-bind:key="item.ProductID">
                <img v-bind:src="item.Image" alt="">
                <div class="product-name">
                    {{item.Name}}
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import {busData} from '../main.js';
    export default {   
        data(){
            return{
                product:null,
                listProduct:null
            }
        },
        created(){
            this.product = this.$route.params.product;
            this.listProduct = this.$route.params.listProduct;
        },
        
        methods:{
            addToCart(){
                if(this.product.Quality > 0){
                    this.product.Quality--;
                    //thêm vào cartDetail
                    this.product.QualityInCart = 1;
                    busData.$emit('addToCartDetail',this.product);
                }
            },
            changeProductDetail(item){
                this.product = item
            }
        },
        computed:{
            recommend(){
                return this.listProduct.filter(x=>x.ProductID != this.product.ProductID);
            }
        }
    }
</script>

<style scoped>

.product-detail{
    width: 100%;
    height: caclc(100vh - 90px);
}
.history{
    height: 35px;
    width: calc(100% - 5px);
    background-color: #e8efebb8;
    line-height: 32px;
    border-left: 5px solid #2d9cdb;
    margin-bottom: 10px;
}
.history a{
    text-decoration: none;
    color: #2d9cdb;
    padding-left: 10px;
}

.slider{
    width: 100%;
    height: 200px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin: 0px;
}
.img-slide{
    width: 250px;
    height: 100%;
    text-decoration: none;
}
.img-slide img{
    padding: 5px;
    width: 100%;
    height: 100%;
}
.img-slide .product-name{
    text-align: center;
    color: #000;
}
.product-info{
    margin:20px 0px;
    display: flex;
    width: 100%;
}

.left{
    width: 500px;
    height: 100%;
}
.left img{
    padding-top: 15px;
    width: 100%;
    height: 400px;
}
.right{
    margin-left: 20px;
    width: calc(100% - 520px);
    height: 95%;
    background-color: #fff;
    padding: 0px 50px;
}
.product-name{
    text-align: center;
    margin-bottom: 20px;
}
.product-name h1{
    margin: 0px;
    color: #0585ce;
}
.product-row{
    width: 100%;
    height: 30px;
    margin: 10px 0px;
}
.product-row span{
    width: 150px;
    display: inline-block;
    color: #2d9cdb;
}
.btn-add-cart{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
}
.btn-add-cart button{
    width: 50%;
    background-color: #f7941d;
    border: 1px solid #f7941d;
    color: #fff;
    font-weight: bold;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-add-cart button:hover{
    background-color: #2d9cdb;
    border: 1px solid #2d9cdb;
}
.btn-add-cart .hasCart{
    background-color: #2d9cdb;
    border: 1px solid #2d9cdb;
}
</style>