<script>
export default {
  name: "ApartmentCard",
  data() {
    return {
      scrollPos:0
    };
  },
    methods:{
        handleScroll(){
            this.scrollPos = window.scrollY;
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    }
};
</script>

<template>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container py-5">
      <div class="row mt-4">
        
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
