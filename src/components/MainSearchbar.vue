<script>
import { store } from "../store";
export default {
  name: "MainSearchbar",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- searchbar -->
  <div class="position-relative">
    <div
      class="container p-3 rounded-3 bg-white position-absolute top-0 start-50 translate-middle"
    >
      <div class="border p-2 rounded ps-3">
        <form
          class="d-flex justify-content-center align-items-center"
          role="search"
        >
          <div>
            <i class="fa-solid fa-magnifying-glass ms_light_gray_text"></i>
          </div>
          <input
            class="form-control me-2 border border-0"
            type="search"
            placeholder="Cerca una località"
          />
          <button class="btn ms-btn-outline-primary" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
