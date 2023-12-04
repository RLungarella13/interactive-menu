<template>
  <div class="sub-category-menu">
    <div class="sub-category-menu__title">{{ category?.attributes.name }}</div>
    <div
      v-if="category?.attributes.sub_categories"
      class="sub-category-menu__items"
    >
      <SubCategoryItem
        v-for="subCategory in category.attributes.sub_categories.data"
        :key="subCategory.id"
        :subCategory="subCategory"
        :products="products.get(subCategory.id)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from 'vue';
import { Category, Product } from '../model';
import SubCategoryItem from './SubCategoryItem.vue';
import { getMenuProduct } from '@/api.services';

export default defineComponent({
  props: {
    category: {
      type: Object as () => Category | null,
    },
  },
  components: {
    SubCategoryItem,
  },
  setup(props) {
    const products: Ref<Map<number, Product[]>> = ref(new Map());

    const fetchProducts = (category: Category) => {
      if (category.attributes.sub_categories) {
        category.attributes.sub_categories.data.forEach((subCategory) => {
          getMenuProduct(subCategory.id)
            .then((response) => {
              products.value.set(
                subCategory.id,
                response.attributes.products.data
              );
            })
            .catch((error) => console.log(error));
        });
      }
    };

    onMounted(() => {
      if (props.category) {
        fetchProducts(props.category);
      }
    });

    watch(
      () => props.category,
      (newCategory) => {
        if (newCategory) {
          fetchProducts(newCategory);
        }
      }
    );

    return { products };
  },
});
</script>

<style scoped>
.sub-category-menu {
  height: 100vh;
  width: 70%;
  background-size: cover;
  background-color: white;
  padding: 50px;
}
</style>
