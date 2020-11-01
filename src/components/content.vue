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
                    {ProductID:1,Name: "Iphone 12 RED",Image:require("../assets/iphone12.jpg"),
                    Price:"19.900.000 vnđ",
                    Quality:'12',Type:1},
                    {ProductID:7,Name: "Macbook Air 2017",Image:require("../assets/mac-air.jpg"),
                    Price:"27.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:2,Name: "Sam sung galaxy A31",Image:require("../assets/samsunggalaxya31.jpg"),
                    Price:"12.500.000 vnđ",
                    Quality:'11',Type:1},
                    {ProductID:3,Name: "Huawei Nova 7i",Image:require("../assets/huawei nova 7i.jpg"),
                    Price:"13.000.000 vnđ",
                    Quality:'10',Type:1},
                    {ProductID:8,Name: "Macbook Pro 2020",Image:require("../assets/mac-pro-2020.jpg"),
                    Price:"48.000.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:4,Name: "Xiaomi Redmi 9",Image:require("../assets/xiaomi-redmi-9.jpg"),
                    Price:"12.000.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:6,Name: "Vsmart Live (4G/64G)",Image:require("../assets/v-smart-life.jpg"),
                    Price:"4.500.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:9,Name: "Dell XPS 13",Image:require("../assets/dell-xps-13.jpg"),
                    Price:"23.900.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:10,Name: "Surface Pro 2019",Image:require("../assets/surface-3.jpg"),
                    Price:"18.500.000 vnđ",
                    Quality:'2',Type:2},
                    {ProductID:5,Name: "BPhone B86",Image:require("../assets/bphone-b86.jpg"),
                    Price:"10.900.000 vnđ",
                    Quality:'2',Type:1},
                    {ProductID:11,Name: "Razer Blade 14",Image:require("../assets/razer-blade.jpg"),
                    Price:"21.900.000 vnđ",
                    Quality:'4',Type:2},
                    {ProductID:12,Name: "Huawei MateBook D15",Image:require("../assets/Huawei-MateBook-D15.jpg"),
                    Price:"16.000.000 vnđ",
                    Quality:'3',Type:2},
                    
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