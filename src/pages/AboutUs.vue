<script>
export default {
  name: "AboutUs",
  data() {
    return {
      scrollPos: 0,
    };
  },
  methods: {
    /* Salva la posizione corrente dello scroll */
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
  },
};
</script>

<template>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <section id="cover-image"></section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,128L30,138.7C60,149,120,171,180,154.7C240,139,300,85,360,64C420,43,480,53,540,85.3C600,117,660,171,720,170.7C780,171,840,117,900,85.3C960,53,1020,43,1080,69.3C1140,96,1200,160,1260,181.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        class="position-relative"
      ></path>
    </svg>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#cover-image {
  height: 500px;
  background-image: url("https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg");
  background-position: center;
  background-size: cover;
}
</style>
