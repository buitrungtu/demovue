<template>
    <div class="product-detail">
        <div class="history">
            <a href="#">Product</a> > Iphone 12 RED
        </div>
        <div class="product-info">
            <div class="left">
                <img src="../assets/mac-air.jpg">
            </div>
            <div class="right">
                <div class="product-name">
                    <h1>Iphone 12 64gb</h1>
                </div>
                <div class="product-row">
                    <span> Giá:</span> 6.000.000 đ
                </div>
                <div class="product-row">
                    <span> Số lượng còn:</span> 10 
                </div>
                <div class="product-row">
                   <span> CPU:</span> 1.4GHz quad-core 
                </div>
                <div class="product-row">
                    <span> RAM:</span> 8 GB 
                </div>
                <div class="product-row">
                    <span> VGA:</span> Intel Iris Plus Graphics 645 
                </div>
                  <div class="product-row">
                    <span> Ổ cứng:</span> 256GB SSD 
                </div>
                <div class="product-color">
                    <span>Màu sắc:</span>
                    <div class="color">
                        <div class="color-name">Màu đỏ</div>
                        <div class="color-select">
                            <img class="active" src="../assets/mac-air.jpg" alt="">
                            <img src="../assets/mac-air.jpg" alt="">
                        </div>
                    </div>
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
        
    }
</script>

<style scoped>

.product-info{
    margin-top:20px;
    display: flex;
}
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
.left{
    width: 500px;
    height: 530px;
}
.left img{
    width: 100%;
    height: 100%;
}
.right{
    margin-left: 20px;
    width: calc(100% - 520px);
    height: 530px;
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
.product-color{
    display: flex;
}
.product-color span{
    color: #2d9cdb;
}
.color{
    margin-left: 77px;
}
.color-select{
    display: flex;
    align-items: center;
}
.color-select img{
    cursor: pointer;
    width: 100px;
    height: 100px;
    margin:20px 20px 0px 0px;
}
img.active{
    border: 2px solid #c71010
}
.btn-add-cart{
    margin-top:20px;
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