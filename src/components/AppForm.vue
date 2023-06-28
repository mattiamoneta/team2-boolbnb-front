<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "AppForm",
  props: {
    apartmentId: Number,
  },

  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      success: false,
      sending: false,
      errors: {},
    };
  },
  mounted() {},
  methods: {
    sendForm() {
      this.errors = {}; // Resetta gli errori

      this.success = false;
      this.sending = true;

      axios
        .post(`${this.store.baseUrl}/api/apartment/${this.apartmentId}`, {
          apartment_id: this.apartmentId,
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          if (response.data.success) {
            this.name = "";
            this.email = "";
            this.message = "";
            this.success = true;
          } else {
            // Esegui le validazioni
            if (!this.name) {
              this.errors.name = "Il campo Nome è obbligatorio.";
            }

            if (!this.email) {
              this.errors.email = "Il campo Email è obbligatorio.";
            }

            // else if (!this.isValidEmail(this.email)) {
            //   this.email = "Inserisci un indirizzo email valido.";
            // }

            if (!this.message) {
              this.errors.message = "Il campo Messaggio è obbligatorio.";
            }
          }
          console.log(this.errors);

          this.sending = false;
        })
        .catch((error) => {
          this.sending = false;
        });
    },
  },
};
</script>

<template>
  <div v-if="success" class="alert alert-success" role="alert">
    Grazie per avermi contattato, ti risponderò entro 48h!
  </div>

  <div
    class="d-flex align-items-center flex-column w-100 mx-3 rounded-4 shadow_only"
  >
    <!-- form top -->
    <!-- title -->
    <div
      class="mb-4 ms-bg-light w-100 d-flex align-items-center justify-content-center pb-3 pt-4 rounded-top-4"
    >
      <h6
        class="text-uppercase fw-bold font-secondary letter_spacing ms_text_main_darker2"
      >
        Contattami
      </h6>
    </div>

    <!-- form bottom -->
    <div class="w-100 px-4 xmedium">
      <!-- form -->
      <form @submit.prevent="sendForm()" novalidate>
        <!-- nome -->
        <div class="mb-4">
          <label for="name" class="form-label font-semibold"
            >Nome completo:</label
          >
          <input
            type="text"
            class="form-control placeholder_smaller"
            :class="{ 'is-invalid': errors.name }"
            id="name"
            placeholder="Inserisci il tuo nome"
            v-model="name"
            required
          />
          <div class="invalid-feedback" v-if="errors.name">
            {{ errors.name }}
          </div>
        </div>

        <!-- email -->
        <div class="mb-4">
          <label for="email" class="form-label font-semibold"
            >Indirizzo email:</label
          >
          <input
            type="email"
            class="form-control placeholder_smaller"
            :class="{ 'is-invalid': errors.email }"
            id="email"
            placeholder="nome@example.com"
            v-model="email"
            required
          />
          <div class="invalid-feedback" v-if="errors.email">
            {{ errors.email }}
          </div>
        </div>

        <!-- messaggio -->
        <div class="mb-4">
          <label for="message" class="form-label font-semibold"
            >Messaggio:</label
          >
          <textarea
            class="form-control placeholder_smaller"
            :class="{ 'is-invalid': errors.message }"
            id="message"
            rows="5"
            v-model="message"
            placeholder="Scrivi qui il tuo messaggio..."
            required
          ></textarea>
          <div class="invalid-feedback d-block" v-if="errors.message">
            {{ errors.message }}
          </div>
        </div>

        <button
          type="submit"
          class="btn ms-btn ms-btn-primary mb-4"
          :disabled="sending"
        >
          {{ sending ? "Invio..." : "Invia messaggio" }}
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
