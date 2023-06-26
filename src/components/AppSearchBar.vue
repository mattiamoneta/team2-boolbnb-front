<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "MainSearchbar",
  data() {
    return {
      store,
      queryAddress: "",
      querySuggestionsLimit: 6,
      querySuggestions: [],
      radius: 20,
      showModal: false,
      filters: {
        price: 0,
        beds: 0,
        meters: 0,
        bathrooms: 0,
        rooms: 0
      }
    };
  },
  props: {
    showFilters: Boolean,
  },
  methods: {
    /* Chiamata API real-time durante la digitazione */
    handleInput() {
      if (this.store.queryAddress.length > 2) {
        axios
          .get(
            `https://api.tomtom.com/search/2/search/${encodeURIComponent(
              this.store.queryAddress
            )}.json?key=${this.store.apiKey}&language=it-IT&limit=${
              this.store.querySuggestionsLimit
            }`
          )
          .then((response) => {
            this.store.querySuggestions = response.data.results;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.querySuggestions = []; //Cancella dropdown se niente elementi
      }
    },

    getAllFacilities(){
        axios.get(`${this.store.baseUrl}/api/facilities/`)
        .then(response => {
            this.checkboxOptions = response.data.results;
            console.log(this.checkboxOptions);
        })
        .catch(error => {
          console.error(error);
        })
    },

    /* Imposta il valore selezionato dal dropdown */
    selectAddress(suggestion) {
      this.store.queryAddress = suggestion.address.freeformAddress;
      this.store.querySuggestions = [];
    },

    /* Blocca il submit, effettua la ricerca e rimanda alla pagina di risultati */
    handleSubmit(event) {
      event.preventDefault(); // Evita il comportamento predefinito del modulo
      this.$router.push({
        name: "search",
        query: {  indirizzo: this.store.queryAddress,
          
                  price: this.filters.price,
                  beds: this.filters.beds,
                  meters: this.filters.meters,
                  rooms: this.filters.rooms,
                  bathrooms: this.filters.bathrooms },
      }); // Redirect alla pagina dei risultati
    },
    /* cambia il valore di store.radius se viene modificato il range */
    changeRadius() {
      this.store.radius = this.radius;
    },

    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  mounted(){
    this.getAllFacilities();
  }
};
</script>

<template>
  <div
    class="card card-tile border-0 d-block rounded-4 mb-4 apartment-card p-2"
  >
    <div class="rounded-3 ps-3 border w-100">
      <form class="row align-items-center" role="search" @submit="handleSubmit" id="searchForm">
        <!-- Input Group -->
        <div class="input-group d-flex w-100 align-items-center">
          <span>
            <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
          </span>

          <div class="flex-grow-1">
            <input
              class="form-control rounded-0 border-0 fw-semibold"
              type="search"
              placeholder="Cerca una località"
              v-model="store.queryAddress"
              @input="handleInput"
            />

            <!-- Dropdown -->
            <ul
              v-if="store.querySuggestions.length"
              class="dropdown-menu w-80 show"
            >
              <li
                v-for="suggestion in store.querySuggestions"
                :key="suggestion.id"
                @click="selectAddress(suggestion)"
                class="dropdown-item"
              >
                <i
                  class="fa-sharp fa-solid fa-location-dot me-1 small ms_text_main_darker"
                ></i>
                {{ suggestion.address.freeformAddress }}
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
    </div>
    <!-- Inline Filters -->
    <div class="row filters py-3" v-if="showFilters == true">
      <div class="col-2">
        <button
          class="btn ms-btn ms-btn-textual-outline btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#filtersModal"
          @click="openModal"
        >
          <i class="fa-solid fa-filter me-2 align-middle"></i>
          <span class="xsmall text-uppercase fw-bold align-middle"
            >filtra risultati</span
          >
        </button>
      </div>
      <div class="col-10 text-end"></div>
      <!-- RANGE per il radius -->
      <div>
        <input
          type="range"
          v-model="radius"
          id="kilometres"
          name="kilometres"
          min="1"
          max="100"
          step=" 1"
          @change="changeRadius"
        />
        <h6>Raggio {{ radius }}Km</h6>
      </div>
    </div>
    <!-- End Inline Filters -->
  </div>

  <!-- Modal -->
  <div
    if="showModal"
    class="modal fade ms_gray_color"
    id="filtersModal"
    tabindex="-1"
    aria-labelledby="filtersModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body position-relative">
          <button
            type="button"
            class="btn-close position-absolute top-0 end-0 m-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div class="row justify-content-between p-4">
            <!-- principali -->
            <div class="col-6 mt-4 pe-4">
              <h6
                class="xsmall text-uppercase mb-5 ms_text_main_darker2 font-semibold font-secondary letter_spacing"
              >
                Principali
              </h6>
              <ul class="list-unstyled">
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="price">Prezzo (max)</label>
                  <input
                    type="text"
                    class="border rounded ms_w_30"
                    id="price"
                    name="price"
                    v-model="this.filters.price"
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="size_m2">Metratura (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="size_m2"
                    name="size_m2"
                    v-model="this.filters.meters"
                  />
                </li>
                <li
                  class="mt-3 form-switch p-0 d-flex align-items-center justify-content-between"
                >
                  <label for="available">Disponibile</label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="available"
                    name="available"
                    role="switch"
                    v-model="store.available"
                  />
                </li>
              </ul>
            </div>

            <!-- Caratteristiche -->
            <div class="col-6 mt-4 ps-4">
              <h6
                class="xsmall text-uppercase mb-5 ms_text_main_darker2 font-semibold font-secondary letter_spacing"
              >
                Caratteristiche
              </h6>
              <ul class="list-unstyled">
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="beds">Letti (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="beds"
                    name="beds"
                    v-model="this.filters.beds"
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="bedrooms">Stanze (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="bedrooms"
                    name="bedrooms"
                    v-model="this.filters.rooms"
                  />
                </li>
                <li
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <label for="bathrooms">Bagni (min)</label>
                  <input
                    type="number"
                    class="border rounded ms_w_30"
                    id="bathrooms"
                    name="bathrooms"
                    v-model="this.filters.bathrooms"
                  />
                </li>
              </ul>
            </div>

            <!-- Servizi -->
            <div class="col-12 mt-5 ms_text_main_darker2">
              <h6
                class="xsmall text-uppercase mb-5 ms_text_main_darker2 font-semibold font-secondary letter_spacing"
              >
                Servizi
              </h6>
              <ul class="list-unstyled row flex-wrap gy-3">
                <li
                  v-for="option in store.checkboxOptions"
                  :key="option.id"
                  class="d-flex align-items-center gap-2 col-6"
                >
                  <input
                    class="text form-check-input"
                    v-model="option.checked"
                    type="checkbox"
                    role="switch"
                  />
                  <i :class="option.icon" class="me-2"></i>
                  <label>{{ option.name }}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button
            type="button"
            class="border-0 bg-white text-decoration-underline ms_text_main_darker"
            data-bs-dismiss="modal"
          >
            Annulla
          </button>
          <button type="submit" value="Submit" form="searchForm" class="btn ms-btn-outline-primary"   data-bs-dismiss="modal">
            <i class="fa-solid fa-arrow-rotate-right me-1"></i>
            Aggiorna Risultati
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
