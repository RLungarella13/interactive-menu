<template>
  <div>
    {{ category }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    category: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
