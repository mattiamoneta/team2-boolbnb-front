<template>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <div class="card card-tile flat-shadow d-block rounded-4 overflow-hidden drop-shadow-sm mb-4 apartment-card">
    <div class="row">
      <div class="col-5">
        <router-link :to="{ name: 'apartment', params: { id: objApartment['id'] } }">
          <img :src="`${store.baseUrl}/storage/${objApartment['cover_image']}`" :alt="objApartment['title']"
            class="w-100 h-100 object-fit-cover" @click="incrementViews(objApartment['id'])" />

        </router-link>
      </div>

      <div class="col-7">
        <div class="card-body py-4 h-100">
          <div class="xsmall text-uppercase fw-bolder">
            {{ objApartment['city'] }}
            <span>,</span>
            {{ objApartment['country'] }}

          </div>
          <h4 class="mb-5">{{ objApartment["title"] }}</h4>

          <div class="row h-100">
            <div class="col-6 h-100">
              <div class="small text-secondary mb-3">
                <i class="fa-solid fa-location-pin me-1 text-muted"></i>
                {{ objApartment["address"] }}
              </div>
            </div>
            <div class="col-6 text-end h-100">
              <span class="small fw-bold me-1">€</span>
              <span class="fw-bold">{{ objApartment["price"] }}</span>
              <span class="xsmall">/notte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from 'axios';

export default {
  name: "ApartmentResultCard",
  data() {
    return {
      store,
    };
  },
  methods: {
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
  },
  props: {
    objApartment: Object,
    hrefURI: "",
  },
};
</script>

<style scoped lang="scss"></style>
