<script>
import { store } from "../store";
export default {
  name: "TheHome",
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
    <div id="jumbotron" class="p-5bg-light">
      <div class="ms_overlay">
        <div class="container">
          <h1 class="display-5">
            Prenota case al mare, ville e appartamenti<br />
            in tutto il mondo.
          </h1>
        </div>
      </div>
    </div>

    <!-- searchbar -->
    <div class="position-relative">
      <div
        class="container p-3 rounded-3 bg-white position-absolute top-0 start-50 translate-middle"
      >
        <form class="d-flex justify-content-center" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Cerca una località"
          />
          <button class="ms_btn ms_btn_main" type="submit">Cerca</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#jumbotron {
  height: 35rem;
  background-color: $light_gray_color;
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
