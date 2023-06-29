<script>
export default {
  name: "AppFooter",
  data() {
    return {
      scrollPos: 0,
      bottomPage: 1,
    };
  },
  methods: {
    handlePositions() {
      this.scrollPos = window.scrollY;
      this.bottomPage =
        document.documentElement.scrollHeight - window.innerHeight;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  created() {
    window.addEventListener("scroll", this.handlePositions);
  },
};
</script>

<template>
  <footer
    class="text-center text-lg-start bg-light text-muted font-secondary xmedium"
  >
    <!-- FOOTER-TOP -->
    <div class="footer-top container">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between py-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span
            >Seguici sui social network per rimanere in contatto con noi:</span
          >
        </div>
        <!-- Left -->

        <!-- Right -->
        <div class="d-flex gap-4">
          <a href="#" class="text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
    </div>

    <!-- FOOTER BOTTOM -->

    <!-- Section: Links  -->
    <section class="">
      <div
        class="footer-bottom container text-center text-md-start mt-5 pb-5 mb-5"
      >
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <img src="../assets/boolbnb-logo-png.png" class="mb-5" alt="">
            <p>
              Pianifica il tuo viaggio perfetto con Boolbnb: scopri, prenota e
              goditi il mondo!
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6
              class="text-uppercase font-semibold font-secondary letter_spacing mb-5 small ms_text_main_darker2"
            >
              Ospitare
            </h6>
            <p>
              <a href="#!" class="footer-link">Apri un Boolbnb</a>
            </p>
            <p>
              <a href="#!" class="footer-link">BoolCover per gli host</a>
            </p>
            <p>
              <a href="#!" class="footer-link">Come ospitare</a>
            </p>
            <p>
              <a href="#!" class="footer-link">Forum community</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6
              class="text-uppercase font-semibold font-secondary letter_spacing mb-5 small ms_text_main_darker2"
            >
              Assistenza
            </h6>
            <p>
              <a href="#!" class="footer-link">Centro Assistenza</a>
            </p>
            <p>
              <a href="#!" class="footer-link">BoolCover</a>
            </p>
            <p>
              <a href="#!" class="footer-link">Accessibilità per tutti</a>
            </p>
            <p>
              <a href="#!" class="footer-link">Opzioni di cancellazione</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6
              class="text-uppercase font-semibold font-secondary letter_spacing mb-5 small ms_text_main_darker2"
            >
              contatti
            </h6>
            <p>
              <i class="fas fa-home me-3 ms_text_main_darker"></i>
              <span>Via Marmotta 12, 00042, Roma</span>
            </p>
            <p>
              <i class="fas fa-envelope me-3 ms_text_main_darker"></i>
              info@example.com
            </p>
            <p>
              <i class="fas fa-phone me-3 ms_text_main_darker"></i> + 01 234 567
              88
            </p>
            <p>
              <i class="fas fa-print me-3 ms_text_main_darker"></i> + 01 234 567
              89
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div
      class="text-center p-4 ms-bg-black text-white"
      style="background-color: rgba(0, 0, 0, 0.05)"
    >
      © 2023 Copyright: Boolbnb

      <!-- Scroll-Top -->
      <button
        class=""
        :class="scrollPos == bottomPage ? 'show' : ''"
        id="btnScrollTop"
        @click="scrollToTop"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/colors" as *;

footer {
  margin-top: 8rem;
  position: relative;

  .footer-top i {
    color: $main_darker2_color;
  }

  .footer-bottom {
    a {
      text-decoration: none;
    }
  }
}
</style>
