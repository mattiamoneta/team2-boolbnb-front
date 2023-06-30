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
      currentPage: 1,
      lastPage: null
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
    getApartments(gotoPage) {
      axios.post(`${this.store.baseUrl}/api/apartments/sponsorized`, null, {
        params: {
          page: gotoPage
        }
      })
        .then(response => {
          console.log(response);
          this.sponsorApartments = response.data.results.data;
          this.currentPage = gotoPage;
          this.lastPage = response.data.results.last_page;

          /* Chiamata TomTom */

          
          this.sponsorApartments.forEach((single) => {
            axios.get(`https://api.tomtom.com/search/2/reverseGeocode/${single.latitude},${single.longitude}.json?key=${this.store.apiKey}`)
              .then((response) => {

                single.address = response.data.addresses[0].address.streetNameAndNumber;
                single.street = response.data.addresses[0].address.street;
                single.city = response.data.addresses[0].address.municipality;
                single.country = response.data.addresses[0].address.country;

              })
              .catch((error) => {
                console.error(error);
          });
          });

          /* Fine TomTom */


        });
    }
  },
  mounted() {
    this.loading = false;
    this.getApartments(1);
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
          <div class="row">
            <div class="col-10 col-lg-6 mx-auto text-center">
              <h5 class="font-secondary mb-3 text-muted">
                Esplora, prenota, vivi. La tua avventura inizia qui.
              </h5>
              <h1 class="display-5">
                Prenota case al mare, ville e appartamenti <span class="ms_text_main_darker2 font-primary">in tutto il mondo</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="position-relative">
      <div class="container p-3 rounded-4 bg-white position-absolute top-0 start-50 translate-middle">
        <AppSearchBar :showFilters="false" />
      </div>
    </div>
    <!-- End Search Bar -->

    <div class="searchbar-fix"></div>

    <AppMainSection title="In Evidenza" theme="dark">
      <AppCard v-for="sponsorized in sponsorApartments" :sponsorized="sponsorized" />

      <nav aria-label="Page navigation" class="mt-5">

        <ul class="pagination d-flex justify-content-center">

          <li class="page-item">
            <button class="page-link" :class="{ 'disabled': currentPage == 1 }" @click="getApartments(currentPage - 1)">
              <i class="fa-solid fa-chevron-left ms_text_main_darker2"></i></button>
          </li>

          <li v-for="(page, item) in lastPage" :key="item" class="page-item">
            <button @click="getApartments(item + 1)" class="page-link" :class="(currentPage == (item + 1)) ? 'active' : ''">{{item + 1}}</button>
          </li>

          <li class="page-item">
            <button class="page-link" :class="{ 'disabled': currentPage == lastPage }" @click="getApartments(currentPage + 1)">
              <i class="fa-solid fa-chevron-right ms_text_main_darker2"></i>
            </button>
          </li>

        </ul>

      </nav>
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
  height: 40rem;
  background-color: lightgray;
  background-image: url("../assets/hero-bg-min.jpg");

  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    padding-top: 8rem;
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
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.7) 10%,
        rgba(0, 212, 255, 0) 50%);
  }
}

@media screen and (max-width: 575px) {
  #jumbotron .container{
    background-color: rgba(#fff, .4);
    height: 100%;
    backdrop-filter: blur(5px);

  }
}
</style>
