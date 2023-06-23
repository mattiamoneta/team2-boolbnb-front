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
    
    handleSubmit(event) {
      event.preventDefault(); // Evita il comportamento predefinito del modulo

      this.performSearch();

      const selectedAddress = this.address;
      this.$router.push({ name: 'search', query: { indirizzo: selectedAddress } })
    },

      performSearch(){

            const selectedAddress = this.address;

            if (selectedAddress != "") {
              fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(selectedAddress)}.json?key=${this.store.apiKey}`)//cerca i dati (quindi anche lat e long) dell'indirizzo passato dall'input della home
                .then(response => response.json())
                .then(data => {
                  if (data && data.results && data.results.length > 0) { //se sono stati trovati dei risultati
                    const latitude = data.results[0].position.lat;
                    const longitude = data.results[0].position.lon;

                    axios.get(`${this.store.baseUrl}/api/apartments`)
                      .then(response => {
                        const apartments = response.data.results; //tutti gli appartamenti del DB
                        this.retApartmnets = response.data.results;

                        this.store.searchResults = response.data.results.data;
                        console.log(this.store.searchResults);
            
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
  }
};
</script>

<template>
  
  <form class="row align-items-center" role="search" @submit="handleSubmit">
    <!-- Input Group -->
    <div class="input-group d-flex w-100 align-items-center">
      <span>
        <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
      </span>

      <div class="flex-grow-1">
        <input class="form-control rounded-0 border-0 fw-semibold" type="search" placeholder="Cerca una località"
          v-model="address" @input="handleInput" />

          <!-- Dropdown -->
          <ul v-if="suggestions.length" class="dropdown-menu w-80 show">
            <li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectAddress(suggestion)" class="dropdown-item">
              <i class="fa-sharp fa-solid fa-location-dot me-1 small ms_text_main_darker"></i>
              {{suggestion.address.freeformAddress }}
            </li>
          </ul>
          <!-- End Dropdown -->

      </div>

      <button class="btn ms-btn ms-btn-outline-primary py-3">
        Cerca
      </button>
  </div>
  <!-- End Input Group -->
</form>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
