<script>
import AppSearchBar from "../components/AppSearchBar.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";

import { store } from "../store";
import axios from 'axios';

export default {


  name: "ApartmentsList",
  data() {
    return {
      store,
      scrollPos: 0,
      retApartmnets: {}
    };
  },
  watch: {
    '$route'(to, from) {
      if (to.query.indirizzo !== from.query.indirizzo) {
        this.performSearch();
      }
    }
  },
  methods: {
    /* Salva la posizione corrente dello scroll */
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
    //funzione che transforma lat e lon in numeri accettabili dall'url della mappa
    latLonToTileZXY(lat, lon, zoomLevel) {

      const MIN_ZOOM_LEVEL = 0

      const MAX_ZOOM_LEVEL = 22

      const MIN_LAT = -85.051128779807

      const MAX_LAT = 85.051128779806

      const MIN_LON = -180.0

      const MAX_LON = 180.0

      if (

        zoomLevel == undefined ||

        isNaN(zoomLevel) ||

        zoomLevel < MIN_ZOOM_LEVEL ||

        zoomLevel > MAX_ZOOM_LEVEL

      ) {

        throw new Error(

          "Zoom level value is out of range [" +

          MIN_ZOOM_LEVEL.toString() +

          ", " +

          MAX_ZOOM_LEVEL.toString() +

          "]"

        )

      }

      if (lat == undefined || isNaN(lat) || lat < MIN_LAT || lat > MAX_LAT) {

        throw new Error(

          "Latitude value is out of range [" +

          MIN_LAT.toString() +

          ", " +

          MAX_LAT.toString() +

          "]"

        )

      }

      if (lon == undefined || isNaN(lon) || lon < MIN_LON || lon > MAX_LON) {

        throw new Error(

          "Longitude value is out of range [" +

          MIN_LON.toString() +

          ", " +

          MAX_LON.toString() +

          "]"

        )

      }

      let z = Math.trunc(zoomLevel)

      let xyTilesCount = Math.pow(2, z)

      let x = Math.trunc(Math.floor(((lon + 180.0) / 360.0) * xyTilesCount))

      let y = Math.trunc(

        Math.floor(

          ((1.0 -

            Math.log(

              Math.tan((lat * Math.PI) / 180.0) +

              1.0 / Math.cos((lat * Math.PI) / 180.0)

            ) /

            Math.PI) /

            2.0) *

          xyTilesCount

        )

      )

      return z.toString() + "/" + x.toString() + "/" + y.toString()
    },
    newMap() {
      return `https://a.api.tomtom.com/map/1/tile/basic/main/${latLonToTileZXY(45.4641943, 9.1896346, 8)}.png?key=${this.store.apiKey}=512`
    },
    performSearch() {

      if (this.store.queryAddress == '') {
        this.store.queryAddress = this.$route.query.indirizzo;
      }

      if (this.store.queryAddress != "") {
        axios.get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(this.store.queryAddress)}.json?key=${this.store.apiKey}`)
          .then(response => {

            const retVal = response.data.results;
            if (retVal.length > 0) { // Se ci sono risultati

              /* Ottengo latitudine e longitudine dell'indirizzo */
              const lat = retVal[0].position.lat;
              const long = retVal[0].position.lon;
              console.log(`${lat}/${long}/${this.store.radius * 1000}`);



              /* Ottengo tutti gli appartamenti  dalle API Laravel entro il raggio selezionato.
              *  this.store.radius è in km quindi moltiplico per 1000 per averlo in metri
              */
              axios.post(`${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}`)
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
  created() {
    /* Intercetta lo scroll del mouse */
    window.addEventListener('scroll', this.handleScroll);
  },
  updated() {
    // this.performSearch();
  },
  mounted() {
    this.performSearch();

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

          <AppSearchBar :showFilters="true" />
        </div>
      </div>
      <!-- End Search Bar -->


      <div class="row" v-if="this.$route.query.indirizzo != ''">
        <!-- Results -->
        <div class="col-12 col-lg-5">
          <div class="fixed-box pe-4 py-3">
            <ApartmentResultCard v-for="singleApartment in retApartmnets" :objApartment="singleApartment"
              hrefURI="/apartment" />
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
          <p class="small">Sembra che non siano stati trovati appartamenti disponibili. Prova con una zona o un periodo di
            soggiorno differente.</p>
        </div>
      </div>


    </div>
  </main>
</template>

<style lang="scss" scoped></style>
