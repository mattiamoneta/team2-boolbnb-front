ard
<script>
export default {
  name: "Support",
  data() {
    return {
      scrollPos: 0,
      loading: true,
    };
  },
  methods: {
    /* Salva la posizione corrente dello scroll */
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
  },
  mounted() {
    this.loading = false;
  },
};
</script>

<template>
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <div class="container mt-5">
      <!-- titolo -->
      <h1 class="mb-4">Ciao! Come possiamo aiutarti?</h1>

      <!-- navbar -->
      <div
        class="card card-tile border-0 d-block rounded-4 mb-4 apartment-card p-2"
      >
        <div class="rounded-3 ps-3 ms-border-search w-100">
          <form class="row align-items-center" role="search" id="searchForm">
            <!-- Input Group -->
            <div class="input-group d-flex w-100 align-items-center">
              <span>
                <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
              </span>

              <div class="flex-grow-1">
                <input
                  class="form-control rounded-0 border-0 fw-semibold ms-search-field shadow-none"
                  type="search"
                  placeholder="Cosa vorresti sapere?"
                />
              </div>

              <button
                class="btn ms-btn ms-btn-outline-primary py-3"
                type="submit"
              >
                Cerca
              </button>
            </div>
            <!-- End Input Group -->
          </form>
        </div>
      </div>
      <!-- fine navbar -->

      <!-- section faq -->
      <section id="faq">
        <!-- row cards -->
        <div class="row">
          <div class="col-lg-4">
            <div
              class="border d-flex align-items-center gap-3 p-5 justify-content-center card-tile flat-shadow drop-shadow-sm rounded-3 overflow-hidden"
            >
              <i class="fa-solid fa-virus-covid-slash fs-5"></i>
              <a href="#"> La nostra efficace risposta al Covid-19</a>
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="border d-flex align-items-center gap-3 p-5 mt-3 mt-lg-0 justify-content-center card-tile flat-shadow drop-shadow-sm rounded-3 overflow-hidden"
            >
              <i class="fa-solid fa-envelopes-bulk fs-5"></i>
              <a href="#"
                >Qual è la procedura per contattare i Boolbnb Owners??</a
              >
            </div>
          </div>
          <div class="col-lg-4">
            <div
              class="border d-flex align-items-center gap-3 p-5 mt-3 mt-lg-0 justify-content-center card-tile flat-shadow drop-shadow-sm rounded-3 overflow-hidden"
            >
              <i class="fa-solid fa-star fs-5"></i>
              <a href="#">Come posso promuovere il mio appartamento?</a>
            </div>
          </div>
        </div>

        <!-- row other faq -->

        <h4 class="my-5">Tutti gli argomenti</h4>
        <div class="row">
          <div class="col-lg-4">
            <div class="border p-4 rounded-3">
              <div class="font-semibold text-uppercase xsmall letter_spacing">
                Trovare e prenotare un Boolbnb
              </div>
              <ul class="mt-3">
                <li><a href="#">Quante persone viaggeranno con te?</a></li>
                <li>
                  <a href="#"
                    >Quali sono le date del tuo soggiorno desiderato?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai delle preferenze riguardo alla posizione della casa
                    vacanza?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quanto spazio hai bisogno nella casa (numero di camere,
                    bagni, ecc.)?</a
                  >
                </li>
                <li><a href="#">Qual è il tuo budget per il soggiorno?</a></li>
                <li>
                  <a href="#">
                    Preferisci una casa vacanza con piscina o accesso alla
                    spiaggia?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Hai bisogno di servizi aggiuntivi come Wi-Fi, parcheggio o
                    aria condizionata?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai degli animali domestici che ti accompagneranno durante
                    il soggiorno?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quali attività o attrazioni ti interessano nella zona
                    circostante?</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="border p-4 rounded-3">
              <div class="font-semibold text-uppercase xsmall letter_spacing">
                Stare con noi
              </div>
              <ul class="mt-3">
                <li><a href="#">Quante persone viaggeranno con te?</a></li>
                <li>
                  <a href="#"
                    >Quali sono le date del tuo soggiorno desiderato?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai delle preferenze riguardo alla posizione della casa
                    vacanza?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quanto spazio hai bisogno nella casa (numero di camere,
                    bagni, ecc.)?</a
                  >
                </li>
                <li><a href="#">Qual è il tuo budget per il soggiorno?</a></li>
                <li>
                  <a href="#">
                    Preferisci una casa vacanza con piscina o accesso alla
                    spiaggia?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Hai bisogno di servizi aggiuntivi come Wi-Fi, parcheggio o
                    aria condizionata?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai degli animali domestici che ti accompagneranno durante
                    il soggiorno?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quali attività o attrazioni ti interessano nella zona
                    circostante?</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="border p-4 rounded-3">
              <div class="font-semibold text-uppercase xsmall letter_spacing">
                sicurezza e igiene al primo posto
              </div>
              <ul class="mt-3">
                <li><a href="#">Quante persone viaggeranno con te?</a></li>
                <li>
                  <a href="#"
                    >Quali sono le date del tuo soggiorno desiderato?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai delle preferenze riguardo alla posizione della casa
                    vacanza?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quanto spazio hai bisogno nella casa (numero di camere,
                    bagni, ecc.)?</a
                  >
                </li>
                <li><a href="#">Qual è il tuo budget per il soggiorno?</a></li>
                <li>
                  <a href="#">
                    Preferisci una casa vacanza con piscina o accesso alla
                    spiaggia?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Hai bisogno di servizi aggiuntivi come Wi-Fi, parcheggio o
                    aria condizionata?</a
                  >
                </li>
                <li>
                  <a href="#">
                    Hai degli animali domestici che ti accompagneranno durante
                    il soggiorno?</a
                  >
                </li>
                <li>
                  <a href="#"
                    >Quali attività o attrazioni ti interessano nella zona
                    circostante?</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#faq {
  a {
    color: $black_text_color;
    text-decoration: none;
  }
  .card-tile {
    height: 150px;
  }
  ul {
    margin-left: -15px;
    font-size: 0.9rem;

    li {
      margin-top: 10px;
    }
  }
}
</style>
