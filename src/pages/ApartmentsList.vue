<script>
import AppSearchBar from "../components/AppSearchBar.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";
import AppLoader from "../components/AppLoader.vue";

import { store } from "../store";
import axios from "axios";

export default {
  name: "ApartmentsList",
  data() {
    return {
      store,
      filters: [],
      currentLat: 0,
      currentLong: 0,
      generateMap: false,
      loading: true
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
    // handleScroll() {
    //   this.scrollPos = window.scrollY;
    // },

    performSearch() {

      this.store.retApartmnets =  [];
      this.loading = true;
      this.generateMap = false;

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

              this.currentLat = retVal[0].position.lat;
              this.currentLong = retVal[0].position.lon;


              axios
                .post(
                  `${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}/${this.$route.query.price}/${this.$route.query.beds}/${this.$route.query.meters}/${this.$route.query.rooms}/${this.$route.query.bathrooms}/${this.$route.query.available}/${this.$route.query.amn_wifi}/${this.$route.query.amn_car}/${this.$route.query.amn_pool}/${this.$route.query.amn_door}/${this.$route.query.amn_sauna}/${this.$route.query.amn_water}`
                )
                .then((response) => {
                 
                    this.store.retApartmnets = response.data.results.data; //Ottengo gli appartamenti

                    let timeout = setTimeout(() => {
                      if (this.store.retApartmnets.length > 0) {
                        this.createMap(this.currentLat, this.currentLong);
                      }
                    }, 1);
           
                })
                .catch((error) => {
                   if (error.response && error.response.status != 500) {
                      // Gestisci l'errore 500
                      console.error(error);
                    }
                });

            } else {
              this.store.retApartmnets = [];
            }


            this.generateMap = true;
            /* Ottengo la location esatta */

            this.loading = false;
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
    createMap(latitude, longitude) {
      let map = tt.map({

        key: this.store.apiKey,
        container: 'map-div',
        center: { lng: longitude, lat: latitude },
        zoom: 12

      });
    },
  },
  created() {
    /* Intercetta lo scroll del mouse */
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeMount() {
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
  mounted() {
    // this.createMap(this.currentLat, this.currentLong);
    this.performSearch();
  },

  components: {
    ApartmentResultCard,
    AppSearchBar,
    AppLoader
  },
};
</script>

<template>
  <AppLoader v-if="loading" />
  <main :class="store.scrollPos > 230 ? 'navbar-top-fix' : ''">
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
          <AppSearchBar :showFilters="true" :allowModal="store.retApartmnets.length > 0 ? true : false" />
        </div>
      </div>
      <!-- End Search Bar -->

      <div class="row" v-if="this.$route.query.indirizzo != '' && store.retApartmnets.length > 0">
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
        <div class="col-12 col-lg-7 fixed-box">
          <div class="card d-block rounded-4 overflow-hidden border-1 h-100 map-card">
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

  width: 100%;
  height: 100%;
}
</style>
