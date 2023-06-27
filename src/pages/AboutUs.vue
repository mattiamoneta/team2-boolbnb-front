<script>
export default {
  name: "AboutUs",
  data() {
    return {
      scrollPos: 0,
      loading: true
    };
  },
  mounted(){
    this.loading = false;
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
  <AppLoader v-if="loading"/>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <section id="cover-image" class="position-relative">
      <div class="container h-100">
        <div
          class="d-flex align-items-center justify-content-center flex-column h-100 text-center"
        >
          <h1 class="text-white mb-4 display-3">
            Goditi una vacanza <br />
            indimenticabile con Boolbnb!
          </h1>
          <p class="text-white">
            L' obiettivo Boolbnb è ridefinire il concetto di ospitalità e
            offrire soggiorni di qualità in tutto il mondo.
          </p>
        </div>
      </div>
      <div class="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L80,106.7C160,117,320,139,480,170.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#cover-image {
  height: 600px;
  background-image: url("https://www.aveliving.com/AVE/media/Property_Images/Florham%20Park/hero/flor-apt-living-(2)-hero.jpg?ext=.jpg");
  background-position: center;
  opacity: 90%;
  background-size: cover;

  .waves {
    position: absolute;
    top: 20rem;
    right: 0;
    width: 100%;
  }
}
</style>
