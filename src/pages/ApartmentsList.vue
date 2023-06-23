<script>
import MainSearchbar from "../components/MainSearchbar.vue";
import AppMainSection from "../components/AppMainSection.vue";
import AppCard from "../components/AppCard.vue";
import TheySaySection from "../components/TheySaySection.vue";
import AppFeatureSection from "../components/AppFeatureSection.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";
import ApartmentsSearchBar from "../components/ApartmentsSearchBar.vue";

import { store } from "../store";
import axios from 'axios';
export default {
  name: "ApartmentsList",
  data() {
    return {
      store,
    };
  },
  components: {
    ApartmentResultCard,
    ApartmentsSearchBar,
  }, mounted() {
    console.log(this.$route.query.indirizzo);
    const selectedAddress = this.$route.query.indirizzo;
    if (this.$route.query.indirizzo != "") {
      fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(selectedAddress)}.json?key=${this.store.apiKey}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.results && data.results.length > 0) {
            const latitude = data.results[0].position.lat;
            const longitude = data.results[0].position.lon;

            axios.get(`${this.store.baseUrl}/api/apartments`)
              .then(response => {
                const apartments = response.data.results; //tutti gli appartamenti del DB
                console.log(apartments);
                console.log("lat: " + latitude + ",lon: " + longitude);
              })
              .catch(error => {
                console.error(error);
              });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

};
</script>

<template>
  <div class="container py-5">
    <div class="row mt-4">
      <div class="col">
        <h2 class="ms_section_title font-semibold">
          Risultati per "
          <span class="font-primary fw-bolder ms_text_main_darker">Lorem ipsum</span>
          "
        </h2>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="row">
      <!-- !!!SEARCH BAR QUI!!! -->
      <ApartmentsSearchBar />
    </div>
    <!-- End Search Bar -->
    <div class="row">
      <!-- Results -->
      <div class="col-7">
        <ApartmentResultCard v-for="i in 5" />
      </div>
      <!-- End Results -->

      <!-- Map -->
      <div class="col-5 max-fixed">MAPPA QUI</div>
      <!-- End Map -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
