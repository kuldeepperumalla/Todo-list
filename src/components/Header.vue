<template>
    <div class="header" >
        <h1>
            {{ title.toUpperCase() }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            title: "make a note!"
        }
    }
}
</script>

<style scoped>

    .header{
        text-align: center;
        background-color: black;
    }

    h1{
        color: aliceblue;
        font-size: 1.5rem;
        padding: 15px;
    }

</style>