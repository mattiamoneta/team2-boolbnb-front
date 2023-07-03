<script>
export default {
  name: "AboutUs",
  data() {
    return {
      scrollPos: 0,
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },

  methods: {
    /* Salva la posizione corrente dello scroll */
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
  },
};
</script>

<template>
  <AppLoader v-if="loading" />
  <main :class="scrollPos > 230 ? 'navbar-top-fix' : ''">
    <!-- cover image section -->
    <section id="cover-image" class="position-relative">
      <div class="container h-100">
        <div
          class="d-flex align-items-center justify-content-center flex-column h-100 text-center"
        >
          <h1 class="text-white mb-4 display-3">
            Goditi un soggiorno <br />
            indimenticabile con Boolbnb!
          </h1>
          <p class="text-white">
            L' obiettivo Boolbnb è ridefinire il concetto di ospitalità e
            offrire soggiorni di qualità in tutto il mondo.
          </p>
        </div>
      </div>
      <div class="waves">
        <svg
          viewBox="0 0 1440 62"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="HorizontalSquiggle_svg__30hIf HorizontalSquiggle_bottom__PDo4w"
        >
          <path
            d="M1439.39 1.71344e-06C1318.87 6.98144e-06 1318.88 52.3125 1198.66 52.3125C1078.45 52.3125 1078.14 1.75042e-05 957.929 2.27589e-05C837.411 2.80269e-05 837.411 52.3125 717.197 52.3125C596.679 52.3125 596.679 3.85496e-05 476.465 4.38044e-05C355.947 4.90724e-05 355.947 52.3125 235.733 52.3125C115.215 52.3125 115.215 5.95951e-05 -4.99945 6.48498e-05L-5 62L1440 61.9999L1440 1.6869e-06L1439.39 1.71344e-06Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>

    <!-- about us section -->
    <section id="about-us">
      <div class="container">
        <!-- row 1 -->
        <div class="row">
          <div class="col-lg-6">
            <div>
              <img
                src="../assets/about_us/our-mission.webp"
                class="img-fluid rounded-4"
                alt="our mission"
              />
            </div>
          </div>
          <div class="col-lg-6 px-lg-5 mt-4 mt-lg-0">
            <div
              class="d-flex justify-content-start justify-content-lg-center flex-column h-100"
            >
              <h2 class="mb-3">La nostra missione</h2>
              <p>
                La nostra missione in Boolbnb è creare esperienze
                indimenticabili per i viaggiatori di tutto il mondo. Siamo
                dedicati a offrire un'ampia selezione di case vacanze di alta
                qualità, garantendo che ogni ospite si senta come a casa,
                ovunque si trovi.
              </p>
              <p>
                Con un'attenzione particolare alla cura dei dettagli e al
                comfort degli ospiti, lavoriamo per superare le aspettative e
                creare un legame duraturo tra viaggiatori e host. Siamo
                determinati a rendere il processo di prenotazione facile e
                sicuro, fornendo un'assistenza professionale e una piattaforma
                intuitiva per garantire la massima soddisfazione dei nostri
                clienti.
              </p>
            </div>
          </div>
        </div>

        <!-- row 2 -->

        <div class="row mt-lg-5 mt-5 pt-lg-5 mb-5">
          <div class="col-lg-6 px-lg-5 mt-lg-0">
            <div
              class="d-flex justify-content-start justify-content-lg-center flex-column h-100"
            >
              <h2 class="mb-3">Come abbiamo iniziato</h2>
              <p>
                Boolbnb è nato da una passione condivisa per i viaggi e la
                condivisione delle esperienze. I fondatori, dopo aver
                sperimentato personalmente la gioia di soggiornare in case
                vacanze autentiche e accoglienti, hanno deciso di creare una
                piattaforma che permettesse a tutti di vivere esperienze simili.
              </p>
              <p>
                Con una combinazione di talento tecnologico e amore per
                l'ospitalità, hanno lanciato Boolbnb con l'obiettivo di
                connettere i viaggiatori con host di tutto il mondo e offrire
                una vasta gamma di opzioni per soggiorni unici, offrendo al
                contempo un servizio affidabile e di qualità.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div>
              <img
                src="../assets/about_us/Münster,_LVM,_Bürogebäude_--_2013_--_5149-51.jpg"
                class="img-fluid rounded-4"
                alt="Buidling"
              />
            </div>
          </div>
        </div>
        <hr />

        <!-- img middle -->
        <!-- <div class="img-middle"></div> -->
      </div>
    </section>

    <!-- section  team-->
    <section id="team">
      <div class="container">
        <div class="d-flex align-items-center flex-column mt-5">
          <h1 class="mb-4">Lavora con noi</h1>
          <a href="#" class="btn ms-btn ms-btn-md ms-btn-primary">
            Incontra le persone che guidano il nostro team.
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#cover-image {
  height: 550px;
  background-image: url("https://www.baxter.it/sites/default/files/seo_image/LuxuryApartmentCortina_1.jpg");
  background-position: bottom;
  background-size: cover;

  .waves {
    position: absolute;
    bottom: -0.3rem;
    right: 0;
    width: 100%;
  }
}

#about-us {
  margin-top: 120px;

  // .img-middle {
  //   background-image: url("../assets/about_us/Screen-Shot-2022-02-04-at-2.28.40-PM.webp");
  //   background-position: center;
  //   background-size: cover;
  //   height: 500px;
  //   margin-top: 50px;
  // }
}
</style>
