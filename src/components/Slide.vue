<template>
    <div class="slider">
        <div class="favorite-name"><h1>{{favoriteName}}</h1></div>
        <div class="slide-act">
            <div class="left">
                <button v-on:click="changeImg(favorite.id)" v-for="favorite in favorites" v-bind:key="favorite.id">
                    {{favorite.name}}
                </button>
            </div>
            <div class="slider-img" v-bind:class="classObj"></div>
            <div class="right">Next</div>
        </div>
        

    </div>
</template>
<script>
export default {
    name:'Slide',
    data(){
        return{
            favoriteName:"Đá bóng",
            classObj:{
                soccer:false,
                swimming:false,
                cycling:true,
                gaming:false
            },
            favorites:[
                {id:0,name:"Đá bóng"},
                {id:1,name:"Bơi lội"},
                {id:2,name:"Đạp xe"},
                {id:3,name:"Chơi game"}
            ]
        }
    },methods:{
        changeImg(id){
            console.log(id);
        }
    }
}
</script>
<style scoped>
.slider{
    width: 100%;
    height: calc(100vh - 400px);
}
.favorite-name h1{
    text-align: center;
    margin: 0;
    padding: 0;
}
.slide-act{
    display: flex;
    width: 100%;
    height: 98%;
    justify-content: center;
}
.slider-img{
    width: 800px;
    height: 100%;
    background-image: url(../assets/soccer.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.slider-img.soccer{
    background-image: url(../assets/soccer.png);
}
.slider-img.swimming{
    background-image: url(../assets/swimming.png);
}
.slider-img.cycling{
    background-image: url(../assets/cycling.png);
}
.slider-img.gaming{
    background-image: url(../assets/gaming.png);
}
</style>
