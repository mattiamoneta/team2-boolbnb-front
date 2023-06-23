<script>
import AppSearchBar from "../components/AppSearchBar.vue";
import AppMainSection from "../components/AppMainSection.vue";
import AppCard from "../components/AppCard.vue";
import TheySaySection from "../components/TheySaySection.vue";
import AppFeatureSection from "../components/AppFeatureSection.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";

import { store } from "../store";
import axios from 'axios';

export default {


  name: "ApartmentsList",
  data() {
    return {
      store,
      scrollPos:0,
      retApartmnets: {}
    };
  },
  methods:{
      /* Salva la posizione corrente dello scroll */
      handleScroll(){
          this.scrollPos = window.scrollY;
      },

      
      performSearch(){

        if(this.store.queryAddress == ''){
          this.store.queryAddress = this.$route.query.indirizzo;
        }

         if(this.store.queryAddress != ""){
          axios.get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(this.store.queryAddress)}.json?key=${this.store.apiKey}`)
          .then(response =>{

              const retVal = response.data.results;
              if(retVal.length > 0){ // Se ci sono risultati

                  /* Ottengo latitudine e longitudine dell'indirizzo */
                 const lat = retVal[0].position.lat;
                 const long = retVal[0].position.lon;

          

                  /* Ottengo tutti gli appartamenti dalle API Laravel */
                  axios.get(`${this.store.baseUrl}/api/apartments`)
                  .then(response => {

                    this.retApartmnets = response.data.results.data; //Ottengo gli appartamenti

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
  },
  created(){
      /* Intercetta lo scroll del mouse */
      window.addEventListener('scroll', this.handleScroll);
  },
  updated(){
    this.performSearch();
  },  
  mounted(){
    this.performSearch();
  },

   components: {
    ApartmentResultCard,
    AppSearchBar
  }

};
</script>

<template>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container py-5">
    <div class="row mt-4">
      <div class="col">
        <h2 class="ms_section_title font-semibold">
          Risultati per <span>&#34;</span>
          <span class="font-primary fw-bolder ms_text_main_darker" v-if="this.$route.query.indirizzo != null">
            {{ this.$route.query.indirizzo }}
          </span>
          <span class="font-primary fw-bolder ms_text_main_darker" v-else>
            Nessun Risultato
          </span><span>&#34;</span>
        </h2>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="row">
      <!-- !!!SEARCH BAR QUI!!! -->
        <div class="col-12">
          <div class="card card-tile d-block rounded-4 mb-4 apartment-card p-2 ps-3">
            <AppSearchBar/>
          </div>
        </div>
    </div>
    <!-- End Search Bar -->
   
   
    <div class="row" v-if="this.$route.query.indirizzo != ''">
      <!-- Results -->
      <div class="col-12 col-lg-5">
        <div class="fixed-box pe-4 py-3">
          <ApartmentResultCard v-for="singleApartment in retApartmnets" :objApartment="singleApartment"/>
        </div>
      </div>
      <!-- End Results -->

      <!-- Map -->
      <div class="col-7 max-fixed d-none d-lg-block">

        <div class="card  d-block rounded-4 overflow-hidden border-1 h-100">
          <iframe class="map-frame" width="100%" height="100%" frameBorder="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.02132034301758%2C45.41267141842337%2C9.357776641845705%2C45.51693278828882&amp;layer=mapnik"
            style="border: 1px solid black"></iframe>
        </div>
      </div>
      <!-- End Map -->
    </div>

    <div class="row py-5 text-center" v-else>
         <div class="col-6 mx-auto my-5">
            <h4 class="fw-bolder fw-secondary text-muted mb-4">:(</h4>
            <h4 class="fw-semibold">Nessun risultato</h4>
            <p class="small">Sembra che non siano stati trovati appartamenti disponibili. Prova con una zona o un periodo di soggiorno differente.</p>
         </div>
    </div>


  </div>
  </main>
</template>

<style lang="scss" scoped></style>
