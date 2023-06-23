<script>
import { store } from "../store";
import axios from 'axios';
export default {
  name: "MainSearchbar",
  data() {
    return {
      store,
      address: '',
      suggestions: [],
      suggestionNumber: 6
    };
  },
  methods: {
    handleInput() {
      if (this.address.length > 2) {
        fetch(`https://api.tomtom.com/search/2/search/${encodeURIComponent(this.address)}.json?key=${this.store.apiKey}&language=it-IT&limit=${this.suggestionNumber}`)
          .then(response => response.json())
          .then(data => {
            this.suggestions = data.results;
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        this.suggestions = [];
      }
    },
    selectAddress(suggestion) {
      this.address = suggestion.address.freeformAddress;
      this.suggestions = [];
    },
    submitForm() {
      const selectedAddress = this.address;

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
    },
  },
};
</script>

<template>
  <!-- searchbar -->
  <div class="position-relative">
    <div class="container p-3 rounded-3 bg-white position-absolute top-0 start-50 translate-middle">
      <div class="border p-2 rounded ps-3">
        <form class="d-flex justify-content-center align-items-center" role="search" @submit.prevent="submitForm">
          <div>
            <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
          </div>
          <div>
            <input class="form-control me-2 border border-0" type="search" placeholder="Cerca una località"
              v-model="address" @input="handleInput" />
            <ul v-if="suggestions.length">
              <li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectAddress(suggestion)">{{
                suggestion.address.freeformAddress }}</li>
            </ul>
          </div>
          <button class="btn ms-btn-outline-primary" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
