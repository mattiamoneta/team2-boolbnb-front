<script>
import { store } from "../store";
import axios from 'axios';
export default {
  name: "MainSearchbar",
  data() {
    return {
      store,
      queryAddress: '',
      querySuggestionsLimit: 6,
      querySuggestions: []
    };
  },
  methods: {

    /* Chiamata API real-time durante la digitazione */
    handleInput() {

      if(this.store.queryAddress.length > 2){
        axios.get(`https://api.tomtom.com/search/2/search/${encodeURIComponent(this.store.queryAddress)}.json?key=${this.store.apiKey}&language=it-IT&limit=${this.store.querySuggestionsLimit}`)
        .then(response => {
          this.store.querySuggestions = response.data.results;
        })
        .catch(error => {
            console.error(error);
        });
      }else{
        this.querySuggestions = []; //Cancella dropdown se niente elementi
      }
    },


    /* Imposta il valore selezionato dal dropdown */
    selectAddress(suggestion) {
      this.store.queryAddress = suggestion.address.freeformAddress;
      this.store.querySuggestions = [];
    }, 


    /* Blocca il submit, effettua la ricerca e rimanda alla pagina di risultati */
    handleSubmit(event) {
      event.preventDefault();   // Evita il comportamento predefinito del modulo
      this.$router.push({ name: 'search', query: { indirizzo: this.store.queryAddress } }) // Redirect alla pagina dei risultati
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
        <input class="form-control rounded-0 border-0 fw-semibold" type="search" placeholder="Cerca una località" v-model="store.queryAddress" @input="handleInput" />

          <!-- Dropdown -->
          <ul v-if="store.querySuggestions.length" class="dropdown-menu w-80 show">
            <li v-for="suggestion in store.querySuggestions" :key="suggestion.id" @click="selectAddress(suggestion)" class="dropdown-item">
              <i class="fa-sharp fa-solid fa-location-dot me-1 small ms_text_main_darker"></i>
              {{suggestion.address.freeformAddress }}
            </li>
          </ul>
          <!-- End Dropdown -->

      </div>

      <button class="btn ms-btn ms-btn-outline-primary py-3" type="submit">
        Cerca
      </button>
  </div>
  <!-- End Input Group -->
</form>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
