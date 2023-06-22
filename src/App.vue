<script >
    import AppHeader from './components/AppHeader.vue'; //Header
    import AppFooter from './components/AppFooter.vue'; //Footer

    export default{
      data(){
        return{

        }
      },
      components:{
        AppHeader,
        AppFooter
      }
    }
</script>

<template>

    <AppHeader />

</template>

<style lang="scss">
    @use './styles/style.scss'; //Global SCSS


</style>
