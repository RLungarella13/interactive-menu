<template>
  <div class="product-item">
    {{ product?.attributes.name }}
  </div>
</template>

<script lang="ts">
import { Product } from "@/model";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.product-item{
    color: blueviolet;
}
</style>
