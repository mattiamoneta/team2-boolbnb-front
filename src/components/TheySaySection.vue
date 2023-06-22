<script>
export default {
  name: "TheySaySection",
  data() {
    return {};
  },
};
</script>

<template>
  <!-- section they say -->
  <section id="they_say">
    <div class="container">
      <div class="ms_magazine_logos d-flex justify-content-between">
        <img src="../assets/they_say/techcrunch.png" alt="Techcrunch logo" />
        <img
          src="../assets/they_say/business-insider.png"
          alt="Business Insider logo"
        />
        <img
          src="../assets/they_say/the-new-york-times.png"
          alt="The New York Times logo"
        />
        <img src="../assets/they_say/forbes.png" alt="Forbes logo" />
        <img src="../assets/they_say/usa-today.png" alt="USA Today logo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

.ms_magazine_logos {
  img {
    max-height: 2rem;
    filter: brightness(0);
    opacity: 50%;
    transition: all 0.4s ease;

    &:hover {
      filter: brightness(1);
      opacity: 1;
    }
  }
}
</style>
