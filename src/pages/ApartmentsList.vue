<script>
import AppSearchBar from "../components/AppSearchBar.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";

import { store } from "../store";
import axios from "axios";

export default {
  name: "ApartmentsList",
  data() {
    return {
      store,
      scrollPos: 0,
      filters: []
      //retApartmnets: {},
    };
  },
  watch: {
    $route(to, from) {
      if (to.query !== from.query) {
        this.performSearch();
      }
    },
  },
  methods: {
    /* Salva la posizione corrente dello scroll */
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
    performSearch() {
      if (this.store.queryAddress == "") {
        this.store.queryAddress = this.$route.query.indirizzo;
      }

      if (this.store.queryAddress != "") {
        axios
          .get(
            `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(
              this.store.queryAddress
            )}.json?key=${this.store.apiKey}`
          )
          .then((response) => {
            const retVal = response.data.results;
            if (retVal.length > 0) {
              // Se ci sono risultati

              /* Ottengo latitudine e longitudine dell'indirizzo */
              const lat = retVal[0].position.lat;
              const long = retVal[0].position.lon;


              // console.log(`${lat}/${long}/${this.store.radius * 1000}`);

              /* Ottengo tutti gli appartamenti  dalle API Laravel entro il raggio selezionato.
               *  this.store.radius è in km quindi moltiplico per 1000 per averlo in metri
               */


               let fixedPrice = 0;

               if (this.$route.query.price == 0){
                  fixedPrice = null;
               }

              axios
                .post(
                  `${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}/${fixedPrice}/${this.$route.query.beds}/${this.$route.query.meters}/${this.$route.query.rooms}/${this.$route.query.bathrooms}/${this.$route.query.amn_wifi}/${this.$route.query.amn_car}/${this.$route.query.amn_pool}/${this.$route.query.amn_door}/${this.$route.query.amn_sauna}/${this.$route.query.amn_water}`
                )
                .then((response) => {
                  this.store.retApartmnets = response.data.results.data; //Ottengo gli appartamenti

                  this.store.retApartmnets.forEach((value, index) => {

                    axios.get(`https://api.tomtom.com/search/2/reverseGeocode/${value.latitude},${value.longitude}.json?key=${this.store.apiKey}`)
                    .then((response) => {

                        value.city = response.data.addresses[0].address.municipality;
                        value.country = response.data.addresses[0].address.country;
                    })
                    .catch(error => {
                      console.error(error);
                    });
                  });
                })
                .catch((error) => {
                  console.error(error);
                });

            }


            /* Ottengo la location esatta */

        

          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    isObjectEmpty(obj) {
      return Object.keys(obj).length === 0;
    },
    //funzione di creazione mappa
    createMap() {
      var map = tt.map({

        key: this.store.apiKey,

        container: 'map-div',

        center: { lng: 9.1900, lat: 45.4642 },

        zoom: 12

      });
    }
  },
  created() {
    /* Intercetta lo scroll del mouse */
    window.addEventListener("scroll", this.handleScroll);
  },
  updated() {
    // this.performSearch();
  },
  mounted() {
    this.performSearch();

    this.createMap();

    //funzione che viene lanciata quando store.radius viene aggiornata nello store.js
    this.$watch(
      () => store.radius,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.performSearch();
        }
      }
    );
  },


  components: {
    ApartmentResultCard,
    AppSearchBar,
  },
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
              Nessun Risultato </span><span>&#34;</span>
          </h2>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="row">
        <!-- !!!SEARCH BAR QUI!!! -->
        <div class="col-12">
          <AppSearchBar :showFilters="true" />
        </div>
      </div>
      <!-- End Search Bar -->

      <div class="row" v-if="this.$route.query.indirizzo != ''">
        <!-- Results -->
        <div class="col-12 col-lg-5">
          <div class="fixed-box pe-4 py-3">
            <div>
              <ApartmentResultCard v-for="singleApartment in store.retApartmnets" :objApartment="singleApartment"
                hrefURI="/apartment" />
            </div>
          </div>
        </div>
        <!-- End Results -->

        <!-- Map -->
        <div class="col-7 max-fixed d-none d-lg-block">
          <div class="card d-block rounded-4 overflow-hidden border-1 h-100">
            <div id="map-div"></div>
          </div>
        </div>
        <!-- End Map -->
      </div>

      <div class="row py-5 text-center" v-else>
        <div class="col-6 mx-auto my-5">
          <h4 class="fw-bolder fw-secondary text-muted mb-4">:(</h4>
          <h4 class="fw-semibold">Nessun risultato</h4>
          <p class="small">
            Sembra che non siano stati trovati appartamenti disponibili. Prova
            con una zona o un periodo di soggiorno differente.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#map-div {
  width: 100vw;
  height: 100vh;
}
</style>
