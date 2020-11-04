<template>
    <div class="product">
        <div class="product-info">
            <a href="#" @click="gotoProductDetail()">
                <img v-bind:src="product.Image">
                <div class="product-name">
                    <p v-bind:title="product.Name">{{product.Name}}</p>
                </div>
            </a>
            <div class="product-price">
                <div class="dumy">Giá: <span class="price" v-bind:title="product.Price">{{product.Price | formatMoney}}</span></div>
                <div class=""> Số lượng: <span class="quality">{{product.Quality}}</span></div>
            </div>
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
</template>

<script>
import {busData} from '../main.js';

    export default {
        props:{
            product:Object
        },data(){
            return{
            }
        }
        ,methods:{
            addToCart(){
                if(this.product.Quality > 0){
                    this.product.Quality--;
                    //thêm vào cartDetail
                    this.product.QualityInCart = 1;
                    busData.$emit('addToCartDetail',this.product);
                }
            },
            gotoProductDetail(){
                this.$router.push({name:"productdetail",params:{data:this.product}});
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped>
.product{
    background-color: #cccccc78;
    min-width: 350px;
    min-height: 450px;
    position: relative;
}
.product-info{
    padding: 10px;
}
.product-info a{
    text-decoration: none;
}
.product-info img{
    width: 100%;
    height: 320px;
}
.product-name{
   margin: 3px 0px;
}
img.icon {
    width: 20px;
    margin-left: 8px;
    height: 20px;
}
.product-name p{
    text-align: center;
    display: inherit;
    color: #2b2a2a;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    margin: 5px 0px;
} 
.product-price{
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
}
.dumy{
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
}
.price{
    color: #e60e0e;
    
}
.quality{
    color: #2d9cdb;
}
.product-info button{
    width: 100%;
    background-color: #f7941d;
    border: 1px solid #f7941d;
    color: #fff;
    font-weight: bold;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-info button:hover{
    background-color: #ea8000;
    border: 1px solid #ea8000;
}
button.hasCart{
    background-color: #2d9cdb;
    border: 1px solid #2d9cdb;
}
</style>