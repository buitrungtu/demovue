<template>
    <div class="container">
       <Product class="item-product" v-for="product in listProductsHasFilt" v-bind:key="product.ProductID" v-bind:product="product"/>
    </div>
</template>

<script>
import product from './product.vue'
    export default {
        props:{
            userSelect:Number
        },
        components:{
            'Product':product
        },
        data(){
            return{
                listProducts:[
                    {ProductID:1,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"10.000.000 vnđ",
                    Quality:'12',Type:1},
                    {ProductID:2,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"12.000.000 vnđ",
                    Quality:'11',Type:1},
                    {ProductID:3,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"13.000.000 vnđ",
                    Quality:'10',Type:1},
                    {ProductID:4,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:5,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:6,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:7,Name: "Máy tính",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:8,Name: "Máy tính",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:9,Name: "Máy tính",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:10,Name: "Máy tính",Image:require("../assets/iphone12.jpg"),
                    Price:"14.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:11,Name: "Máy tính",Image:require("../assets/iphone12.jpg"),
                    Price:"10.000.000 vnđ",
                    Quality:'12',Type:2},
                    {ProductID:12,Name: "Điện thoại",Image:require("../assets/iphone12.jpg"),
                    Price:"12.000.000 vnđ",
                    Quality:'11',Type:2},
                    
                ]
            }
        },
        computed:{
            listProductsHasFilt(){
                if(this.userSelect == 0){
                    return this.listProducts;
                }else{
                    return this.listProducts.filter(x => x.Type == this.userSelect);
                }
            }
        }
        
    }
</script>

<style scoped>
.container{
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
}

.item-product{
    width: 330px;
    display: flex;
    list-style: none;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
    margin: 10px 0px;
}
</style>