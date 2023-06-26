<script>
export default {
  name: "AppForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      sending: false,
      errors: {},
    };
  },
  methods: {
    sendForm() {
      this.success = false;
      this.sending = true;

      axios
        .post(`${this.store.baseUrl}/api/apartment/:id`, {
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
            this.errors = response.data.errors;
          }

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

  <div class="d-flex align-items-center">
    <h4 class="my-5">Contattami</h4>
    <!-- form -->
    <form @submit.prevent="sendForm()" method="POST">
      <!-- nome -->
      <div class="mb-3">
        <label for="name" class="form-label">Nome completo:</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.name }"
          id="name"
          placeholder="Inserisci il tuo nome"
          v-model="name"
        />
      </div>
      <div class="invalid-feedback" v-for="error in errors.name">
        {{ error }}
      </div>

      <!-- email -->
      <div class="mb-3">
        <label for="email" class="form-label">Indirizzo email:</label>
        <input
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors.email }"
          id="email"
          placeholder="nome@example.com"
          v-model="email"
        />
      </div>
      <div class="invalid-feedback" v-for="error in errors.email">
        {{ error }}
      </div>

      <!-- messaggio -->
      <div>
        <label for="message" class="form-label">Messaggio:</label>
        <textarea
          class="form-control"
          :class="{ 'is-invalid': errors.message }"
          id="message"
          rows="3"
          v-model="message"
        ></textarea>
        <div class="invalid-feedback" v-for="error in errors.message">
          {{ error }}
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-3" :disabled="sending">
        {{ sending ? "Invio..." : "Invia messaggio" }}
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
