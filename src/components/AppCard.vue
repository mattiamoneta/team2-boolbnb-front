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
  }, methods: {
    incrementViews(apartmentId) {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      axios.post(`${this.store.baseUrl}/api/apartments/views/${apartmentId}`, csrfToken)
        .then(() => {
          // Aggiornamento riuscito, esegui eventuali azioni aggiuntive
        })
        .catch((error) => {
          console.error('Errore durante l\'incremento delle visualizzazioni:', error);
        });
    }
  }
};
</script>

<template>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <div class="col-lg-3 col-12 mb-5 mb-lg-4">
    <div class="card card-tile flat-shadow drop-shadow-sm rounded-4 overflow-hidden ms_card_sm">
      <router-link :to="{ name: 'apartment', params: { id: sponsorized['id'] } }"
        @click="incrementViews(sponsorized['id'])">
        <img :src="`${store.baseUrl}/storage/${sponsorized['cover_image']}`" :alt="sponsorized['title']"
          class="card-img-top" />
      </router-link>

      <div class="card-body d-flex align-items-end">

        <div class="wrapper w-100">
          <div class="xsmall text-uppercase fw-bolder">
            {{ sponsorized.city }}, {{ sponsorized.country }}
          </div>
          <h6 class="font-secondary text-secondary mb-2 text-truncate">
            {{ sponsorized.title }}
          </h6>

          <div class="small text-secondary mb-3 text-truncate" v-if="sponsorized.address != null">
            <i class="fa-solid fa-location-pin me-1 text-muted"></i>
            {{ sponsorized.address }}
          </div>

          <div class="small text-secondary mb-3 text-truncate" v-else>
            <i class="fa-solid fa-location-pin me-1 text-muted"></i>
            {{ sponsorized.street }}
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
  </div>
</template>

<style scoped lang="scss"></style>
<!-- ooo -->
