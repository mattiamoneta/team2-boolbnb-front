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
          Risultati per "<span class="font-primary fw-bolder ms_text_main_darker"
            >Lorem ipsum</span
          >"
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
      <div class="col-12 col-lg-5">
        <div class="fixed-box pe-4 py-3">
        <ApartmentResultCard v-for="i in 5" />
        </div>
      </div>
      <!-- End Results -->

      <!-- Map -->
      <div class="col-7 max-fixed d-none d-lg-block">
          
        <div class="card  d-block rounded-4 overflow-hidden border-1 h-100">
          <iframe class="map-frame" width="100%" height="100%" frameBorder="0" src="https://www.openstreetmap.org/export/embed.html?bbox=9.02132034301758%2C45.41267141842337%2C9.357776641845705%2C45.51693278828882&amp;layer=mapnik" style="border: 1px solid black"></iframe>
        </div>
      </div>
      <!-- End Map -->
    </div>


  </div>
</template>

<style lang="scss" scoped></style>
