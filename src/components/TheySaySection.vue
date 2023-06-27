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
      <div class="ms_magazine_logos row justify-content-between">
        <div class="col-12 col-lg-auto text-center mb-5 mb-lg-0">
          <img src="../assets/they_say/techcrunch.png" alt="Techcrunch logo" />
        </div>
       <div class="col-12 col-lg-auto text-center mb-5 mb-lg-0">
        <img
          src="../assets/they_say/business-insider.png"
          alt="Business Insider logo"
        />
       </div>
       <div class="col-12 col-lg-auto text-center mb-5 mb-lg-0">
        <img
          src="../assets/they_say/the-new-york-times.png"
          alt="The New York Times logo"
        />
       </div>
        <div class="col-12 col-lg-auto text-center mb-5 mb-lg-0">
          <img src="../assets/they_say/forbes.png" alt="Forbes logo" />
        </div>
        <div class="col-12 col-lg-auto text-center">
          <img src="../assets/they_say/usa-today.png" alt="USA Today logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;

#they_say {
  margin-top: 1rem;

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
}
</style>
