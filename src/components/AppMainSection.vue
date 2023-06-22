<script>
export default {
  name: "AppMainSection",
  data() {
    return {};
  },
  props: {
    title: String,
    hideTitle: Boolean,
    align: String,
    theme: String,

  },
};
</script>

<template>
  <section>
    <div class="container py-5">
      <!-- Title -->
      <div class="row mt-4" :class="hideTitle == true ? 'd-none' : ''">
        <div class="col">
          <h2
            class="ms_section_title font-semibold"
            :class="[
              theme == 'dark' ? 'ms_border_dark' : '',
              align == 'center' ? 'text-center' : ''
              
            ]"
          >
            {{ title }}
          </h2>
        </div>
        <!-- End Title -->
      </div>

      <!-- Component Row -->
      <div class="row pb-4">
        <slot> </slot>
      </div>
      <!-- End Row -->
      
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
