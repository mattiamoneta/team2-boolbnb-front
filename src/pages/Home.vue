<script>
import { store } from "../store";

import MainSearchbar from "../components/MainSearchbar.vue";
import AppMainSection from "../components/AppMainSection.vue";
import AppCard from "../components/AppCard.vue";
import TheySaySection from "../components/TheySaySection.vue";

export default {
  name: "TheHome",
  components: {
    MainSearchbar,
    AppMainSection,
    TheySaySection,
    AppCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <main>
    <!-- jumbotron -->
    <div id="jumbotron" class="p-5">
      <div class="ms_overlay">
        <div class="container">
          <h1 class="display-5">
            Prenota case al mare, ville e appartamenti<br />
            in tutto il mondo.
          </h1>
        </div>
      </div>
    </div>

    <MainSearchbar />

    <div class="searchbar-fix"></div>

    <AppMainSection title="In Evidenza" theme="dark">
      <AppCard v-for="n in 4" />
    </AppMainSection>

    <AppMainSection title="Offriamo i servizi migliori" theme="dark">
    </AppMainSection>

    <AppMainSection title="Dicono di noi" align="center">
      <TheySaySection />
    </AppMainSection>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#jumbotron {
  height: 30rem;
  background-color: lightgray;
  background-image: url("../assets/hero-bg.jpg");

  background-size: cover;
  background-position: center;
  position: relative;

  .container {
    margin-top: 6rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: var(--black_text_color);
  }

  .ms_overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.7) 10%,
      rgba(0, 212, 255, 0) 50%
    );
  }
}
</style>
