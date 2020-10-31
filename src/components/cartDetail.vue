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
        </div>
    </div>
</template>

<script>
import {busData} from '../main.js';

    export default {
        data(){
            return{
            }
        },methods:{
            btnCloseOnClick(){
                busData.$emit('closeLoginOnClick');            
            }
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
</style>