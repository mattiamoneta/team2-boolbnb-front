<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <footer class="text-center text-lg-start bg-light text-muted font-secondary">
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
          <a href="#" class="text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
    </div>

    <!-- FOOTER BOTTOM -->

    <!-- Section: Links  -->
    <section class="">
      <div class="footer-bottom container text-center text-md-start mt-5">
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h5 class="fw-bold mb-4 font-secondary ms_text_main_darker">
              Boolbnb
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Prodotti</h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Laravel</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">link utili</h6>
            <p>
              <a href="#!" class="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Help</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">contatti</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
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
    </div>
    <!-- Copyright -->

    <!-- Scroll-Top -->
    <button class="btn show" id="btnScrollTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/colors" as *;

footer {
  margin-top: 8rem;

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
