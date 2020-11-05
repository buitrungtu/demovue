<template>
    <div class="content">
       <Product class="item-product" v-for="product in listProductsHasFilt" v-bind:key="product.ProductID" v-bind:product="product" v-bind:listProduct="getListProductByCategory(product.Type)"/>
    </div>
</template>

<script>
import { busData } from '../main'
import product from './product.vue'
    export default {
        name:'ListProduct',
        components:{
            'Product':product,
        },
        created(){
            busData.$on('changeTab',(userSelect)=>{
                this.userSelect = userSelect;
            })
            this.userSelect = this.$route.params.tab;
        },
        watch:{
            userSelect:function(value){
                console.log(value);
            }
        },
        beforeMount(){
            if(!this.userSelect){
                this.userSelect = 0;
            }
        },
        data(){
            return{
                userSelect:0,
                listProducts:[
                    {ProductID:1,Name: "Iphone 12 64GB",Image:require("../assets/iphone12.jpg"),
                    Price:19900000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:"64GB",
                    Quality:12,Type:1,Color:'Đen'},
                    {ProductID:7,Name: "Macbook Air 2017",Image:require("../assets/mac-air.jpg"),
                    Price:27000000,QualityInCart:0,CPU:'1.4GHz quad-core',RAM:'12 GB',VGA:'Intel Iris Plus Graphics 645',HardDrive:"256GB SSD",
                    Quality:2,Type:2,Color:'Xám'},
                    {ProductID:2,Name: "Sam sung galaxy A31",Image:require("../assets/samsunggalaxya31.jpg"),
                    Price:12500000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'32GB',
                    Quality:11,Type:1,Color:'Trắng'},
                    {ProductID:3,Name: "Huawei Nova 7i",Image:require("../assets/huawei nova 7i.jpg"),
                    Price:13000000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'64GB',
                    Quality:10,Type:1,Color:'Hồng'},
                    {ProductID:8,Name: "Macbook Pro 2020",Image:require("../assets/mac-pro-2020.jpg"),
                    Price:48000000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'128GB SSD',
                    Quality:3,Type:2,Color:'Xám'},
                    {ProductID:4,Name: "Xiaomi Redmi 9",Image:require("../assets/xiaomi-redmi-9.jpg"),
                    Price:12000000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'64GB',
                    Quality:4,Type:1,Color:'Tím'},
                    {ProductID:6,Name: "Vsmart Live (4G/64G)",Image:require("../assets/v-smart-life.jpg"),
                    Price:4500000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'32GB',
                    Quality:1,Type:1,Color:'Xanh'},
                    {ProductID:9,Name: "Dell XPS 13",Image:require("../assets/dell-xps-13.jpg"),
                    Price:23900000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'128GB SSD 500GB HDD',
                    Quality:6,Type:2,Color:'Đen'},
                    {ProductID:10,Name: "Surface Pro 2019",Image:require("../assets/surface-3.jpg"),
                    Price:18500000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'128GB SSD 500GB HDD',
                    Quality:8,Type:2,Color:'Đen'},
                    {ProductID:5,Name: "BPhone B86",Image:require("../assets/bphone-b86.jpg"),
                    Price:10900000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'32GB',
                    Quality:4,Type:1,Color:'Đen'},
                    {ProductID:11,Name: "Razer Blade 14",Image:require("../assets/razer-blade.jpg"),
                    Price:21900000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'128GB SSD 1T HDD',
                    Quality:5,Type:2,Color:'Đen'},
                    {ProductID:12,Name: "Huawei MateBook D15",Image:require("../assets/Huawei-MateBook-D15.jpg"),
                    Price:16000000,QualityInCart:0,CPU:'Qualcomm Snapdragon',RAM:'8 GB',VGA:'Không',HardDrive:'128GB SSD 500GB HDD',
                    Quality:7,Type:2,Color:'Xám'},
                ],
            }
        },
        methods:{
            getListProductByCategory(type){
                return this.listProducts.filter(x => x.Type == type);
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
.content{
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