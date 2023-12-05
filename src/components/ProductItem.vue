<template>
  <div class="product-item">
    <div class="product-item__header">
      <div class="product-item__name">
        {{ product?.attributes.name }}
      </div>
      <div class="product-item__price">{{ product?.attributes.price }} €</div>
    </div>
    <div class="product-item__description">
      {{ product?.attributes.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/model';
import { defineComponent } from 'vue';

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

<style scoped lang="scss">
.product-item {
  color: white;
  margin-bottom: 10px;
}
.product-item__description {
  text-transform: none;
  font-size: $medium;
  font-weight: normal;
}
.product-item__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  font-size: $large;
  margin-bottom: 5px;
}
</style>
