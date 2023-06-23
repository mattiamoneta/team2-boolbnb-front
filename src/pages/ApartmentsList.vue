<script>
import MainSearchbar from "../components/MainSearchbar.vue";
import AppMainSection from "../components/AppMainSection.vue";
import AppCard from "../components/AppCard.vue";
import TheySaySection from "../components/TheySaySection.vue";
import AppFeatureSection from "../components/AppFeatureSection.vue";
import ApartmentResultCard from "../components/ApartmentResultCard.vue";
import ApartmentsSearchBar from "../components/ApartmentsSearchBar.vue";

import { store } from "../store";
export default {
  name: "ApartmentsList",
  data() {
    return {
      store,
    };
  },
  components: {
    ApartmentResultCard,
    ApartmentsSearchBar,
  },
};
</script>

<template>
  <div class="container py-5">
    <div class="row mt-4">
      <div class="col">
        <h2 class="ms_section_title font-semibold">
          Risultati per "
          <span class="font-primary fw-bolder ms_text_main_darker"
            >Lorem ipsum</span
          >
          "
        </h2>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="row">
      <!-- !!!SEARCH BAR QUI!!! -->
      <ApartmentsSearchBar />
    </div>
    <!-- End Search Bar -->
   
   
      <div class="row">
      <!-- Results -->
      <div class="col-12 col-lg-7">
        <div class="fixed-box">
        <ApartmentResultCard v-for="i in 5" />
        </div>
      </div>
      <!-- End Results -->

      <!-- Map -->
      <div class="col-5 max-fixed d-none d-lg-block">MAPPA QUI</div>
      <!-- End Map -->
    </div>


  </div>
</template>

<style lang="scss" scoped></style>
