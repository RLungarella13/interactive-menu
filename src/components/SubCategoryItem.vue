<template>
  <div v-if="subCategory" class="sub-category-item">
    <div class="sub-category-item__header" @click="toggleProductVisibility">
      <div class="sub-category-item__header__title">
        {{ subCategory?.attributes.name }}
      </div>
      <div class="sub-category-item__header__icon" :class="{ showMore: productVisibility}">
        <img src="../assets/images/icons/expand-more.svg" alt="show more icon" />
      </div>
    </div>
    <div class="sub-category-item__products" :class="{ showMore: productVisibility}">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Category, Product } from '@/model';
import { defineComponent, Ref, ref} from 'vue';
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
      console.log(productVisibility.value);
    }
    return { productVisibility, toggleProductVisibility };
  },
  components: { ProductItem },
});
</script>

<style scoped lang="scss">
.sub-category-item {
  padding: 10px;
}
.sub-category-item__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid $darker-pink;
  margin-bottom: 20px;
}
.sub-category-item__header__title {
  font-size: $x-large;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
}
.sub-category-item__header__icon img{
  width: 20px;
  transition: all 0.2s ease-in-out;
}
.sub-category-item__header__icon.showMore img{
  transform: rotate(180deg);
  transition: all 0.2s ease-in-out;
}
.sub-category-item__products {
  display: none;
}
.sub-category-item__products.showMore {
  display: block;
  transition: all 0.5s ease-in-out;
}
</style>
