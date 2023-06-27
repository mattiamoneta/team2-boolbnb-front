<script>
    export default{
        name:'AppLoader',
        data(){
            return{

            }
        }
    }
</script>


<template>

        <div class="wrapper d-flex justify-content-center align-items-center">
            <div class="loader text-center">
                <i class="fa-solid fa-spinner fa-spin fa-2x ms_text_main_darker2"></i>
            </div>
            
        </div>

</template>


<style scoped lang="scss">

@use '../styles/partials/colors' as *;
.wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: white;
    opacity: 1;
    background-color: rgba(white, .9)!important;
    backdrop-filter: blur(10px);
}

</style>