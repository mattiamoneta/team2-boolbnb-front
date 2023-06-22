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
      <h2 class="ms_section_title text-center">Dicono di noi</h2>
      <div class="ms_magazine_logos d-flex justify-content-around">
        <img src="img/dicono_di_noi/techcrunch.png" alt="Techcrunch logo" />
        <img
          src="./img/dicono_di_noi/business-insider.png"
          alt="Business Insider logo"
        />
        <img
          src="img/dicono_di_noi/the-new-york-times.png"
          alt="The New York Times logo"
        />
        <img src="img/dicono_di_noi/forbes.png" alt="Forbes logo" />
        <img src="img/dicono_di_noi/usa-today.png" alt="USA Today logo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/colors" as *;
</style>
