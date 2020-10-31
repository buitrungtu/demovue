<template>
    <div class="product">
        <div class="product-info">
            <img v-bind:src="product.Image">
            <div class="product-name">
                <a href="#" title="dsa">{{product.Name}}</a>
            </div>
            <div class="product-price">
                <div class="dumy">Giá: <span class="price" title="">10.000.000 vnđ</span></div>
                <div class=""> Số lượng: <span class="quality">12</span></div>
            </div>
            <button v-on:click="addToCart()">
                <p>Thêm vào giỏ</p> 
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
                quality:0
            }
        },methods:{
            addToCart(){
                busData.$emit('addToCart');
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped>
.product{
    background-color: #f7f3f3;
    min-width: 350px;
    min-height: 450px;
    position: relative;
    cursor: pointer;
}
.product-info{
    padding: 10px;
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
.product-name a{
    text-align: center;
    text-decoration: none;
    display: inherit;
    color: #2b2a2a;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
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

</style>