<script>
import AppHeader from "./components/AppHeader.vue"; //Header
import AppFooter from "./components/AppFooter.vue"; //Footer
import Home from "./pages/Home.vue";

export default {
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter,
    Home,
  },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/style.scss"; //Global SCSS
</style>
