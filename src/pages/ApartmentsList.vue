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
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container py-5">
    <div class="row mt-4">
      <div class="col">
        <h2 class="ms_section_title font-semibold">
          Risultati per "<span class="font-primary fw-bolder ms_text_main_darker"
            >Lorem ipsum</span
          >"
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
      <div class="col-12 col-lg-5">
        <div class="fixed-box pe-4 py-3">
        <ApartmentResultCard v-for="i in 5" />
        </div>
      </div>
      <!-- End Results -->

      <!-- Map -->
      <div class="col-7 max-fixed d-none d-lg-block">
          
        <div class="card  d-block rounded-4 overflow-hidden border-1 h-100">
          <iframe class="map-frame" width="100%" height="100%" frameBorder="0" src="https://www.openstreetmap.org/export/embed.html?bbox=9.02132034301758%2C45.41267141842337%2C9.357776641845705%2C45.51693278828882&amp;layer=mapnik" style="border: 1px solid black"></iframe>
        </div>
      </div>
      <!-- End Map -->
    </div>


  </div>
  </main>
</template>

<style lang="scss" scoped></style>
