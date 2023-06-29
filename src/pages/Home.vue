<script>
import { store } from "../store";
import axios from "axios";

import AppSearchBar from "../components/AppSearchBar.vue";
import AppMainSection from "../components/AppMainSection.vue";
import AppCard from "../components/AppCard.vue";
import TheySaySection from "../components/TheySaySection.vue";
import AppFeatureSection from "../components/AppFeatureSection.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "TheHome",
  components: {
    AppSearchBar,
    AppMainSection,
    TheySaySection,
    AppCard,
    AppFeatureSection,
    AppLoader,
  },
  data() {
    return {
      store,
      loading: true,
      sponsorApartments: null,
    };
  },
  methods: {
    loadSponsorized() {
      axios
        .post(`${this.store.baseUrl}/api/apartments/sponsorized`)
        .then((response) => {
          this.sponsorApartments = response.data.results.data;
          //console.log("Apartments " + this.sponsorApartments);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.loading = false;
    this.loadSponsorized();
  },
};
</script>

<template>
  <AppLoader v-if="loading" />
  <main :class="store.scrollPos > 230 ? 'navbar-top-fix' : ''">
    <!-- jumbotron -->
    <div id="jumbotron" class="p-5">
      <div class="ms_overlay">
        <div class="container">
          <h1 class="display-5">
            Prenota case al mare, ville e appartamenti<br />
            in tutto il mondo.
          </h1>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="position-relative">
      <div
        class="container p-3 rounded-4 bg-white position-absolute top-0 start-50 translate-middle"
      >
        <AppSearchBar :showFilters="false" />
      </div>
    </div>
    <!-- End Search Bar -->

    <div class="searchbar-fix"></div>

    <AppMainSection title="In Evidenza" theme="dark">
      <AppCard
        v-for="sponsorized in sponsorApartments"
        :sponsorized="sponsorized"
      />
    </AppMainSection>

    <div class="container-fluid ms-bg-light">
      <AppFeatureSection />
    </div>

    <AppMainSection title="Dicono di noi" align="center">
      <TheySaySection />
    </AppMainSection>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#jumbotron {
  height: 30rem;
  background-color: lightgray;
  background-image: url("../assets/hero-bg.jpg");

  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    margin-top: 6rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: var(--black_text_color);
  }

  .ms_overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.7) 10%,
      rgba(0, 212, 255, 0) 50%
    );
  }
}
</style>
