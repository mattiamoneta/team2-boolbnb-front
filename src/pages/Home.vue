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
      axios.post(`${this.store.baseUrl}/api/apartments/sponsorized`, {
        params: { //questo è il paramatro dinamico concatenato dopo l'uri base. es: ?page=1
          page: gotoPage
        }
      })
        .then(response => {
          //console.log(response.data.results.data);
          this.sponsorApartments = response.data.results.data;
          this.currentPage = gotoPage;
          this.lastPage = response.data.results.last_page;

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
          <h1 class="display-5">
            Prenota case al mare, ville e appartamenti<br />
            in tutto il mondo.
          </h1>
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
<<<<<<< HEAD
      <div class="row">
          <AppCard
          v-for="sponsorized in sponsorApartments"
          :sponsorized="sponsorized"
        />
      </div>
=======
      <AppCard v-for="sponsorized in sponsorApartments" :sponsorized="sponsorized" />

      <nav aria-label="Page navigation ">
        <ul class="pagination d-flex justify-content-center">

          <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == 1 }"
              @click="getApartments(currentPage - 1)">Previous</button>
          </li>

          <li v-for="(page, item) in lastPage" :key="item" class="page-item">
            <button @click="getApartments(item + 1)" class="page-link"
              :class="(currentPage == (item + 1)) ? 'active' : ''">{{
                item + 1
              }}</button>
          </li>

          <li class="page-item"><button class="page-link" :class="{ 'disabled': currentPage == lastPage }"
              @click="getApartments(currentPage + 1)">Next</button></li>
        </ul>
      </nav>
>>>>>>> 86dd1ebd5d0c38c5cb0e305d7e791575a7bfba10
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
    background: linear-gradient(180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.7) 10%,
        rgba(0, 212, 255, 0) 50%);
  }
}
</style>
