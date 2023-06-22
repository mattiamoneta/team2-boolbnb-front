<script>
export default {
  name: "AppMainSection",
  data() {
    return {};
  },
  props: {
    title: String,
    theme: String,
  },
};
</script>

<template>
  <section>
    <div class="container py-4">
      <div class="row">
        <div class="col">
          <h2
            class="ms_section_title font-semibold"
            :class="theme == 'dark' ? '' : 'ms_border_dark'"
          >
            {{ title }}
          </h2>
          <slot> </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
