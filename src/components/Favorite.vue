<template>
    <div class="demo-for">
        <h1>List sở thích</h1>
        <div class="addHobby">
            <input type="text" v-model.trim="txtFavorite" v-on:keyup.enter="addFavorite" placeholder="Nhập vào sở thích của bạn">
            <button v-on:click="addFavorite" id="btnAdd">+</button>
        </div>
        <div class="favorite-detail">
            <ul class="favorite-list">
                <div class="favorite-item" v-for="favorite in favorites" v-bind:key="favorite.id">
                    <li>{{favorite.content}}</li>
                    <div class="delete">
                        <button v-on:click="eventDeleteFavorite(favorite.id)">X</button>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Favorite',
    data(){
        return{
            maxID:3,
            txtFavorite:"",
            favorites:[
                {id:1,content:"Bơi lội"},
                {id:2,content:"Chơi game"},
                {id:3,content:"Đá bóng"}                
            ]
        }
    },
    methods:{
        addFavorite(){
            console.log(1);
            this.favorites.push({id:this.maxID+1,content:this.txtFavorite});
            this.maxID += 1;
            this.txtFavorite="";
        },
        eventDeleteFavorite(favoriteID){
            console.log(2);
            for(var i =0;i<this.favorites.length;i++){
                if(this.favorites[i].id == favoriteID){
                    this.favorites.splice(i,1);
                }
            }
        }
    },
    computed:{

    }
}
</script>
<style scoped>
.demo-for{
    margin-left: 20px;
    width: calc(100% - 500px - 20px);
    background-color: #f3f3f3;
    height: 320px;
}
.demo-for h1{
    margin-top: 32px;
    text-align: center;
}
.addHobby{
    position: relative;
}
button#btnAdd {
    position: absolute;
    top: 0px;
    right: 310px;
    border: none;
    background-color: #56c112;
    font-size: 22px;
    padding: 1px 10px;
    cursor: pointer;
    color: #fff;
    outline: none;
}
.favorite-detail{
    margin: 10px 0px;
    text-align: center;
    overflow-y: auto;
    height: 170px;
}
.favorite-detail ul li{
    list-style: none;
    margin: 5px 0px;
}
.favorite-list{
    padding: 0px 10px;
}
.favorite-item{
    position: relative;
}
.favorite-item:hover{
    background: rgb(191 185 185);
}
.delete button{
    position: absolute;
    color: rgb(201, 15, 15);
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    top: 2px;
    right: 90px;
}
</style>