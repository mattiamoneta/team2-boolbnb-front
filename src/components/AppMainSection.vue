<script>
export default {
  name: "AppMainSection",
  data() {
    return {};
  },
  props: {
    title: String,
    align: String,
    theme: String,
  },
};
</script>

<template>
  <section>
    <div class="container py-4">
      <!-- Title -->
      <div class="row">
        <div class="col">
          <h2
            class="ms_section_title font-semibold"
            :class="[
              theme == 'dark' ? 'ms_border_dark' : '',
              align == 'center' ? 'text-center' : '',
            ]"
          >
            {{ title }}
          </h2>
        </div>
      </div>
      <!-- End Title -->

      <!-- Component Row -->
      <div class="row">
        <slot> </slot>
      </div>
      <!-- End Row -->
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
