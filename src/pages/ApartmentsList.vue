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
      loading: true,
      currentPage: 1,
      lastPage: null

    };
  },
  watch: {
    $route(to, from) {
      if (to.query !== from.query) {
        // this.performSearch(this.currentPage, true);
        this.goSearch();
      }
    },
  },
  methods: {
    /* Salva la posizione corrente dello scroll */
    // handleScroll() {
    //   this.scrollPos = window.scrollY;
    // },
    handleResultsScroll(event){
        const element = event.target;
        let resultsScrollY = element.scrollTop;
        let resultsScrollBottom = element.scrollHeight - element.clientHeight;

        if(resultsScrollY == resultsScrollBottom && this.currentPage < this.lastPage){
          // this.performSearch(this.currentPage + 1, false);
          this.goSearch(this.currentPage + 1)
        }

    },

    // Per ottenere l'indirizzo di singolo appartamento
    ttGetApartmentAddress(apartment){
      axios.get(`https://api.tomtom.com/search/2/reverseGeocode/${apartment.latitude},${apartment.longitude}.json?key=${this.store.apiKey}`)
            .then((response) => {

                apartment.city = response.data.addresses[0].address.municipality;
                apartment.country = response.data.addresses[0].address.country;
                apartment.address = response.data.addresses[0].address.streetNameAndNumber;

            })
            .catch(error => {
              console.error(error);
            });
    },

    // Per ottenere gli appartamenti
    getApartments(lat, long, getPage){
      

      axios.post(`${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}/${this.$route.query.price}/${this.$route.query.beds}/${this.$route.query.meters}/${this.$route.query.rooms}/${this.$route.query.bathrooms}/${this.$route.query.available}/${this.$route.query.amn_wifi}/${this.$route.query.amn_car}/${this.$route.query.amn_pool}/${this.$route.query.amn_door}/${this.$route.query.amn_sauna}/${this.$route.query.amn_water}`, null,  
        {params: {
            page: getPage
          }
      })
      .then((response) => {

        this.currentPage = getPage;                         //Pagina attuale             
        this.lastPage = response.data.results.last_page;    //Ultima pagina richiamabile

        // Se ho trovato dei risultati
        if(response.data.results.data.length > 0){

          // Se è una nuova ricerca
            if(this.store.retApartmnets.length <= 0){

                  this.store.retApartmnets = response.data.results.data; //Ottengo gli appartamenti

                  if (this.store.retApartmnets.length > 0){
                      this.store.retApartmnets.forEach(elem =>{
                      this.ttGetApartmentAddress(elem); 
                    });

                    this.createMap(this.currentLat, this.currentLong);
                  }

              }else{ //Se è un cambio di pagina

                 
                  if(this.currentPage <= this.lastPage){
                      response.data.results.data.forEach(elem => {
                      this.ttGetApartmentAddress(elem);
                      this.store.retApartmnets.push(elem);
                    });
                  }
            }
        } else {
          this.store.retApartmnets = [];
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
    },

    goSearch(page){


        if (this.store.queryAddress == "") {
            this.store.queryAddress = this.$route.query.indirizzo;
          }


          if (this.store.queryAddress != "") { // Se è una ricerca valida 

              axios.get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(this.store.queryAddress)}.json?key=${this.store.apiKey}`)
              .then(response =>{
                  const ttObject = response.data.results;  // Ottengo l'oggetto con tutte le coordinate trovate per l'indirizzo

                  if(ttObject.length > 0){ //Se sono stati trovati dei risultati
                    const lat = ttObject[0].position.lat;
                    const long = ttObject[0].position.lon;
                    
                    this.currentLat = ttObject[0].position.lat;
                    this.currentLong = ttObject[0].position.lon;
  
                    // Se è un cambio pagina
                    if(page != undefined){
                 
                        if(this.currentPage < this.lastPage){
                          this.getApartments(lat, long, page);
                        }
                    // Se è una nuova ricerca
                    }else{
                      this.store.retApartmnets = [];
                      this.getApartments(lat, long, 1);
                    }

                  }

              });

          }

          this.loading = false;
        
    },

    performSearch(preferPage, newQuery) {

      this.loading = true;
      this.generateMap = false;

      if (this.store.queryAddress == "") {
        this.store.queryAddress = this.$route.query.indirizzo;
      }

      if (this.store.queryAddress != "") {
        axios.get(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(this.store.queryAddress)}.json?key=${this.store.apiKey}`)
          .then((response) => {

              const retVal = response.data.results;  //Ottengo l'oggetto con le coordinate
              console.log(retVal);

              if (retVal.length > 0) {

                  /* Ottengo latitudine e longitudine dell'indirizzo */
                  const lat = retVal[0].position.lat;
                  const long = retVal[0].position.lon;

                  this.currentLat = retVal[0].position.lat;
                  this.currentLong = retVal[0].position.lon;


                  /* Ottengo gli appartamenti */
                  axios.post(`${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}/${this.$route.query.price}/${this.$route.query.beds}/${this.$route.query.meters}/${this.$route.query.rooms}/${this.$route.query.bathrooms}/${this.$route.query.available}/${this.$route.query.amn_wifi}/${this.$route.query.amn_car}/${this.$route.query.amn_pool}/${this.$route.query.amn_door}/${this.$route.query.amn_sauna}/${this.$route.query.amn_water}`, null,  
                      {params: {
                          page: preferPage
                        }
                    }).then((response) => {


                      if(newQuery == true){
                        this.store.retApartmnets = response.data.results.data; //Ottengo gli appartamenti
                      }else{
                      
                        response.data.results.data.forEach(elem => {
                          this.store.retApartmnets.push(elem);
                        });
                      }
                      
                      this.currentPage = preferPage;
                      this.lastPage = response.data.results.last_page;


                      // console.log(`${this.store.baseUrl}/api/apartments/search/${lat}/${long}/${this.store.radius * 1000}/${this.$route.query.price}/${this.$route.query.beds}/${this.$route.query.meters}/${this.$route.query.rooms}/${this.$route.query.bathrooms}/${this.$route.query.amn_wifi}/${this.$route.query.amn_car}/${this.$route.query.amn_pool}/${this.$route.query.amn_door}/${this.$route.query.amn_sauna}/${this.$route.query.amn_water}`);

                      this.store.retApartmnets.forEach((value) => {

                        axios.get(`https://api.tomtom.com/search/2/reverseGeocode/${value.latitude},${value.longitude}.json?key=${this.store.apiKey}`)
                          .then((response) => {

                            value.city = response.data.addresses[0].address.municipality;
                            value.country = response.data.addresses[0].address.country;
                            value.address = response.data.addresses[0].address.streetNameAndNumber;

                            if (this.store.retApartmnets.length > 0) {
                              this.createMap(this.currentLat, this.currentLong);
                            }

                          })
                          .catch(error => {
                            console.error(error);
                          });
                      });


                    })
                    .catch((error) => {
                      console.error(error);
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
    }    
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
          // this.performSearch(this.currentPage, true);
          this.goSearch();
        }
      }
    );

  },
  mounted() {
    // this.performSearch(this.currentPage, true);
    this.goSearch();
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
          <div class="fixed-box pe-4 py-3" id="results" @scroll="handleResultsScroll">
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
