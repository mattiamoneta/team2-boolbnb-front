<script>
import AppSearchBar from "../components/AppSearchBar.vue";
import AppFormVue from "../components/AppForm.vue";
import AppLoader from "../components/AppLoader.vue";

import { store } from "../store";
import axios from "axios";

export default {
  name: "ApartmentCard",
  data() {
    return {
      store,
      apartmentDetails: {},
      loading: true,
    };
  },
  components: {
    AppSearchBar,
    AppFormVue,
    AppLoader,
  },
  methods: {
    // handleScroll() {
    //   this.store.scrollPos = window.scrollY;
    // },
    //funzione di creazione mappa
    createMap(lat, long) {
      var map = tt.map({
        key: this.store.apiKey,

        container: "map-div-details",

        center: { lng: long, lat: lat },

        zoom: 12,
      });
    },
    getApartmentAddress() {
      axios
        .get(
          `https://api.tomtom.com/search/2/reverseGeocode/${this.apartmentDetails.latitude},${this.apartmentDetails.longitude}.json?key=${this.store.apiKey}`
        )
        .then((response) => {
          this.apartmentDetails.address =
            response.data.addresses[0].address.streetNameAndNumber;
          this.apartmentDetails.city =
            response.data.addresses[0].address.municipality;
          this.apartmentDetails.country =
            response.data.addresses[0].address.country;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getApartmentDetails() {
      const id = this.$route.params.id;

      axios
        .get(`${this.store.baseUrl}/api/apartments/${id}`)
        .then((response) => {
          if (response.data.success == true) {
            this.apartmentDetails = response.data.results;
            this.getApartmentAddress();

            this.createMap(
              this.apartmentDetails.latitude,
              this.apartmentDetails.longitude
            );

            this.loading = false;
          } else {
            console.error(response.data.error);
          }
        });
    },
  },
  created() {
    // window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const id = this.$route.params.id;
    this.getApartmentDetails();
  },
};
</script>

<template>
  <AppLoader v-if="loading" />
  <main :class="store.scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container py-5">
      <!-- Search Bar -->
      <div class="row">
        <!-- !!!SEARCH BAR QUI!!! -->
        <div class="col-12">
          <AppSearchBar :showFilters="false" />
        </div>
      </div>
      <!-- End Search Bar -->
      <div class="row mt-4">
        <div class="col">
          <div class="card card-tile rounded-4 flat-shadow overflow-hidden">
            <img
              :src="`${store.baseUrl}/storage/${apartmentDetails.cover_image}`"
              alt=""
              class="w-100 card-img-top object-fit-cover apartment-cover-image"
            />
            <div class="card-body mt-4 p-4">
              <div class="row pb-3 mb-5 border-bottom mt-4">
                <div class="col-6 col-lg-10">
                  <h2 class="font-semibold">
                    {{ apartmentDetails.title }}
                  </h2>
                </div>
                <div class="col-6 col-lg-2 text-end">
                  <div
                    class="badge ms-bg-dark"
                    v-if="apartmentDetails.available == 1"
                  >
                    <i class="fa-solid fa-eye text-light me-2"></i>
                    <span class="xsmall text-uppercase fw-bolder text-light">
                      disponibile
                    </span>
                  </div>
                  <div class="badge bg-light" v-else>
                    <i class="fa-solid fa-ban text-muted me-2"></i>
                    <span class="xsmall text-uppercase fw-bolder text-muted">
                      non disponibile
                    </span>
                  </div>
                </div>
              </div>

              <div class="row">
                <!-- LEFT SIDE: Apartment details -->
                <div class="col-12 col-lg-7 pe-4">
                  <!-- Price/Address Row -->
                  <div class="row">
                    <!-- Address -->
                    <div class="col-12 col-lg-6">
                      <!-- Provincia -->
                      <div class="xsmall text-uppercase fw-bolder mb-1">
                        {{ apartmentDetails.city }},
                        {{ apartmentDetails.country }}
                      </div>

                      <!-- Indirizzo -->
                      <div class="text-muted mb-4 mb-lg-0">
                        <i class="fa-solid fa-location-pin text-muted me-1"></i>
                        {{ apartmentDetails.address }}
                      </div>
                    </div>
                    <!-- End Address -->

                    <!-- Price -->
                    <div class="col-12 col-lg-6 text-end">
                      <h2 class="fw-bold mb-0">
                        <span class="small font-primary text-muted">€</span>
                        {{ apartmentDetails.price }}
                      </h2>
                      <div class="font-secondary xsmall text-muted fw-bold">
                        /notte
                      </div>
                    </div>
                    <!-- End Price -->
                  </div>
                  <!-- End Price/Address Row -->

                  <!-- Description Row -->

                  <div class="row py-5">
                    <div
                      class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2"
                    >
                      descrizione
                    </div>

                    <p>
                      {{ apartmentDetails.description }}
                    </p>
                  </div>
                  <!-- End Description Row -->

                  <!-- Features -->
                  <div class="row mb-5 py-3 gy-3">
                    <div
                      class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2"
                    >
                      caratteristiche
                    </div>

                    <!-- Rooms Amount -->
                    <div class="col-lg-3 col-6">
                      <div class="card card-tile drop-shadow-sm">
                        <div class="card-body text-center">
                          <div class="icon mb-2">
                            <i class="fa-solid fa-door-open fs-5"></i>
                          </div>
                          <div>Stanze</div>
                          <div class="amount fw-bold">
                            {{ apartmentDetails.bedrooms }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Beds Amount -->
                    <div class="col-lg-3 col-6">
                      <div class="card card-tile drop-shadow-sm">
                        <div class="card-body text-center">
                          <div class="icon mb-2">
                            <i class="fa-solid fa-bed fs-5"></i>
                          </div>
                          <div>Letti</div>
                          <div class="amount fw-bold">
                            {{ apartmentDetails.beds }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Bathrooms Amount -->
                    <div class="col-lg-3 col-6">
                      <div class="card card-tile drop-shadow-sm">
                        <div class="card-body text-center">
                          <div class="icon mb-2">
                            <i class="fa-solid fa-restroom fs-5"></i>
                          </div>
                          <div>Bagni</div>
                          <div class="amount fw-bold">
                            {{ apartmentDetails.bathrooms }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Room Size -->
                    <div class="col-lg-3 col-6">
                      <div class="card card-tile drop-shadow-sm">
                        <div class="card-body text-center">
                          <div class="icon mb-2">
                            <i class="fa-solid fa-house fs-5"></i>
                          </div>
                          <div>Dimensione</div>
                          <div class="amount fw-bold">
                            {{ apartmentDetails.size_m2 }}
                            <span class="small"> m<sup>2</sup> </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Features -->

                  <!-- Services Row -->
                  <div class="row mb-5">
                    <div
                      class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2"
                    >
                      servizi
                    </div>

                    <div class="row">
                      <div class="col-6">
                        <ul class="list-unstyled">
                          <li
                            class="my-3"
                            v-for="facility in apartmentDetails.facilities"
                          >
                            <i :class="facility.icon"></i>
                            {{ facility.name }}
                          </li>
                        </ul>
                      </div>
                      <!-- <div class="col">Nessun Servizio</div> -->

                      <div class="col-6">
                        <div class="card">
                          <div class="card-body">
                            <div
                              class="xsmall text-uppercase fw-bolder ms_text_main_darker2 mb-2"
                            >
                              ALTRO
                            </div>
                            Lorem ipsum dolor sit amet.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- End Services Row -->

                  <!-- Map -->
                  <div class="row-mb-5">
                    <div
                      class="xsmall text-uppercase fw-bolder mb-4 ms_text_main_darker2"
                    >
                      MAPPA
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="card card-tile rounded-2 d-block">
                          <div id="map-div-details"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Map -->
                </div>
                <!-- End LEFT SIDE: Apartment details -->

                <!-- RIGHT SIDE: Contacts -->
                <div class="co-12 col-lg-4 mt-5 mt-lg-0 offset-lg-1">
                  <AppFormVue :apartmentId="apartmentDetails.id" />
                </div>
                <!-- End RIGHT SIDE: Contacts -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.apartment-cover-image {
  height: 200px;
}
</style>

<!-- 000 -->
