<template>
  <div v-if="subCategory" class="sub-category-item">
    <div class="sub-category-item__title">
      {{ subCategory?.attributes.name }}
    </div>
    <div class="sub-category-item__product">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Category, Product } from '@/model';
import { defineComponent } from 'vue';
import ProductItem from './ProductItem.vue';

export default defineComponent({
  props: {
    subCategory: {
      type: Object as () => Category,
    },
    products: {
      type: Object as () => Product[],
    },
  },
  setup(props) {
    function getProduct(productArray: Product[]) {
      return productArray[0];
    }
    return { getProduct };
  },
  components: { ProductItem },
});
</script>

<style scoped></style>
