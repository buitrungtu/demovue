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
                    <button>
                        <p>Thêm vào giỏ</p> 
                        <img src="../assets/shopping-cart.png" class="icon"/>   
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {   
        data(){
            return{
                product:null
            }
        },
        created(){
            this.product = this.$route.params.data
        }
    }
</script>

<style scoped>


.history{
    height: 35px;
    width: calc(100% - 5px);
    background-color: #e8efebb8;
    line-height: 32px;
    border-left: 5px solid #2d9cdb;
}
.history a{
    text-decoration: none;
    color: #2d9cdb;
    padding-left: 10px;
}
.product-info{
    margin-top:20px;
    display: flex;
    width: 100%;
    height: calc(100vh - 235px);
}
.left{
    width: 500px;
    height: 100%;
}
.left img{
    width: 100%;
    height: 100%;
}
.right{
    margin-left: 20px;
    width: calc(100% - 520px);
    height: 100%;
    background-color: #efefef75;
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
</style>