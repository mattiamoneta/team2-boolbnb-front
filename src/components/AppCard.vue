<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "AppCard",
  props: {
    sponsorized: Object,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    console.log(this.sponsorized);
    this.getApartmentAddress();
  },
  methods: {
    getApartmentAddress() {
      axios
        .get(
          `https://api.tomtom.com/search/2/reverseGeocode/${this.sponsorized.latitude},${this.sponsorized.longitude}.json?key=${this.store.apiKey}`
        )
        .then((response) => {
          this.sponsorized.address =
            response.data.addresses[0].address.streetNameAndNumber;
          this.sponsorized.city =
            response.data.addresses[0].address.municipality;
          this.sponsorized.country = response.data.addresses[0].address.country;
          console.log(response.data.addresses[0].address.streetNameAndNumber);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div class="col-lg-3 col-12 mb-5 mb-lg-0">
    <div
      class="card card-tile flat-shadow drop-shadow-sm rounded-4 overflow-hidden"
    >
      <router-link
        :to="{ name: 'apartment', params: { id: sponsorized['id'] } }"
      >
        <img
          :src="`${store.baseUrl}/storage/${sponsorized['cover_image']}`"
          :alt="sponsorized['title']"
          class="card-img-top"
        />
      </router-link>

      <div class="card-body">
        <div class="xsmall text-uppercase fw-bolder">
          {{ sponsorized.city }}, italia
        </div>
        <h6 class="font-secondary text-secondary mb-2">
          {{ sponsorized.title }}
        </h6>

        <div class="small text-secondary mb-3">
          <i class="fa-solid fa-location-pin me-1 text-muted"></i>
          {{ sponsorized.address }}
        </div>

        <div class="row align-items-center">
          <div class="col-6 small text-secondary">
            <span class="badge ms-bg-dark">
              <i class="fa-solid fa-star xsmall text-warning me-1"></i>
              In Evidenza
            </span>
          </div>
          <div class="col-6 text-end">
            <span class="small fw-bold me-1">€</span>
            <span class="fw-bold">{{ sponsorized.price }}</span>
            <span class="xsmall">/notte</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
<!-- ooo -->
