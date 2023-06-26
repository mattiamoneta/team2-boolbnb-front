<script>
export default {
  name: "AppHeader",
  data() {
    return {
      scrollPos: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <header>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg ms-bg-light-gradient py-lg-0"
      :class="scrollPos > 230 ? 'fixed-top navbar-float-animation' : ''"
    >
      <div class="container">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-brand fw-bolder ms_text_main_darker"
        >
          Boolbnb
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
        </button>

        <div
          class="offcanvas offcanvas-end z-foreground"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title font-secondary"
              id="offcanvasNavbarLabel"
            >
              Menu
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div class="offcanvas-body">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item mx-lg-3">
                <router-link
                  :to="{ name: 'about-us' }"
                  class="ms-nav-link py-4"
                  aria-current="page"
                >
                  Chi Siamo
                </router-link>
              </li>
              <li class="nav-item mx-lg-3">
                <router-link
                  :to="{ name: 'support' }"
                  class="ms-nav-link py-4"
                  aria-current="page"
                >
                  Supporto
                </router-link>
              </li>
            </ul>

            <a
              id=""
              href="#"
              class="nav-link user-dropdown fw-bold px-3 py-1 ms_border_primary ms-bg-dark my-3 text-center"
            >
              <span class="align-middle text-white">Area Utente</span>
              <div class="user-icon animated ms-bg-light align-middle">
                <i class="fa-solid fa-user ms_text_main_darker"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
  </header>
</template>

<style scoped lang="scss"></style>
