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
    }, handleSubmit(event) {
      event.preventDefault(); // Evita il comportamento predefinito del modulo

      const selectedAddress = this.address;
      this.$router.push({ name: 'search', query: { indirizzo: selectedAddress } })
    }
  }
};
</script>

<template>
  <!-- searchbar -->
  <div class="position-relative">
    <div class="container p-3 rounded-3 bg-white position-absolute top-0 start-50 translate-middle">
      <div class="border p-2 rounded ps-3">
        <form class="d-flex justify-content-center align-items-center" role="search" @submit="handleSubmit">
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
