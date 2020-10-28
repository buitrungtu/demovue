<template>
    <div class="soccer">       
        <div id="ball" v-on:click="ballOnClick" v-bind:class="actClass">
          
        </div>
    </div>
</template>

<script>
    export default {
        name:"Soccer",
        data(){
            return{
                move:false,
                actClass:{
                    goaward:false,
                    goback:false
                }
            }
        },methods:{
            ballOnClick(){
                if(this.move){
                    // add class goback
                    this.actClass.goaward = false;
                    this.actClass.goback = true;
                    this.move = false;
                }else{
                    // add class goaward
                    this.actClass.goaward = true;
                    this.actClass.goback = false;
                    this.move = true;
                }
            }
        }
    }
</script>

<style scoped>
#ball{
    position: relative;
    width: 100px;
    height: 100px;
    background-image: url(../assets/ball.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
}
.goaward{
    animation: anm1 2s forwards;
}
@-webkit-keyframes anm1{
    0%{
        transform: translateX(0px) translateY(0px);
    }
    25%{
        transform: translateX(200px) translateY(50px);
    }
    50%{
        transform: translateX(400px) translateY(-100px);
    }
    75%{
        transform: translateX(-500px) translateY(200px);
    }
    100%{
         transform: translateX(1000px) translateY(0px);
    }
}

.goback{
    animation: anm2 2s forwards;
}
@-webkit-keyframes anm2{
    100%{
        transform: translateX(0px) translateY(0px);
    }
    75%{
        transform: translateX(200px) translateY(50px);
    }
    50%{
        transform: translateX(400px) translateY(-50px);
    }
    25%{
        transform: translateX(-500px) translateY(200px);
    }
    0%{
         transform: translateX(1000px) translateY(0px);
    }
}

</style>