<script>
export default {
  name: "AboutUs",
  data() {
    return {
      scrollPos: 0,
      loading: true,
    };
  },
  mounted() {
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
  <AppLoader v-if="loading" />
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <!-- cover image section -->
    <section id="cover-image" class="position-relative">
      <div class="container h-100">
        <div
          class="d-flex align-items-center justify-content-center flex-column h-100 text-center"
        >
          <h1 class="text-white mb-4 display-3">
            Goditi un soggiorno <br />
            indimenticabile con Boolbnb!
          </h1>
          <p class="text-white">
            L' obiettivo Boolbnb è ridefinire il concetto di ospitalità e
            offrire soggiorni di qualità in tutto il mondo.
          </p>
        </div>
      </div>
      <div class="waves">
        <svg
          viewBox="0 0 1440 62"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="HorizontalSquiggle_svg__30hIf HorizontalSquiggle_bottom__PDo4w"
        >
          <path
            d="M1439.39 1.71344e-06C1318.87 6.98144e-06 1318.88 52.3125 1198.66 52.3125C1078.45 52.3125 1078.14 1.75042e-05 957.929 2.27589e-05C837.411 2.80269e-05 837.411 52.3125 717.197 52.3125C596.679 52.3125 596.679 3.85496e-05 476.465 4.38044e-05C355.947 4.90724e-05 355.947 52.3125 235.733 52.3125C115.215 52.3125 115.215 5.95951e-05 -4.99945 6.48498e-05L-5 62L1440 61.9999L1440 1.6869e-06L1439.39 1.71344e-06Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>

    <!-- about us  section -->
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div></div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#cover-image {
  height: 550px;
  background-image: url("../assets/about_us/LuxuryApartmentCortina_1.jpg");
  background-position: center;
  background-size: cover;

  .waves {
    position: absolute;
    bottom: 0rem;
    right: 0;
    width: 100%;
  }
}
</style>
