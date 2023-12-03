<template>
  <div v-if="subCategory" class="sub-category-item">
    <div class="sub-category-item__title">
      {{ subCategory?.attributes.name }}
    </div>
    <div class="sub-category-item__product">
      <ProductItem
      v-for="product in products?.forEach" 
      :key="product"
      :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Category, Product } from "@/model";
import { defineComponent } from "vue";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  props: {
    subCategory: {
      type: Object as () => Category,
    },
    products: {
      type: Object as () => Map<number, Product[]>,
    },
  },
  setup() {
    return {};
  },
  components: { ProductItem },
});
</script>

<style scoped></style>
