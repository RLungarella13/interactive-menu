<template>
  <div v-if="subCategory" class="sub-category-item">
    <div class="sub-category-item__header" @click="toggleProductVisibility">
      <div class="sub-category-item__header__title">
        {{ subCategory?.attributes.name }}
      </div>
      <div class="sub-category-item__header__icon" :class="{ showMore: productVisibility }">
        <img src="../assets/images/icons/expand.svg" alt="show more icon" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="productVisibility" class="sub-category-item__products" >
        <ProductItem v-for="product in products" :key="product.id" :product="product" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Category, Product } from '@/model';
import { defineComponent, Ref, ref } from 'vue';
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
    const productVisibility: Ref<boolean> = ref(false);
    const toggleProductVisibility = () => {
      productVisibility.value = !productVisibility.value;
    }
    return { productVisibility, toggleProductVisibility };
  },
  components: { ProductItem },
});
</script>

<style scoped lang="scss">
.sub-category-item {
  padding: 0.6rem;
}

.sub-category-item__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: $darker-pink;
  padding: 1.5rem 2rem;
  border-radius: $border-radius;
  box-shadow: $shadow;
  transition: all 0.2s ease-in-out;
}

.sub-category-item__header:hover {
  cursor: pointer;
  box-shadow: $deep-shadow;
  transition: all 0.2s ease-in-out;
}

.sub-category-item__header:active {
  background-color: $pink;
}

.sub-category-item__header__title {
  font-size: $x-large;
  font-weight: bold;
  text-transform: uppercase;
  color: $darker-blue;
}

.sub-category-item__header__icon img {
  width: 1.5rem;
  transition: all 0.2s ease-in-out;
}

.sub-category-item__header__icon.showMore img {
  transform: rotate(180deg);
  transition: all 0.2s ease-in-out;
}

.sub-category-item__products {
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}
</style>
