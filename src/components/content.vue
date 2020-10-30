<template>
    <div class="container">
        {{title}}
    </div>
</template>

<script>
    export default {
        props:{
            title:String
        }
    }
</script>

<style scoped>
.container{
    width: 80%;
    margin: 20px auto;
    height: 600px;
    background-color: #fafafa;
}
</style>