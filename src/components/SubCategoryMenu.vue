<template>
  <div class="sub-category-menu">
    <transition name="categoryTitle" mode="out-in">
      <div v-if="category" :key="category?.attributes.name">
        <div class="sub-category-menu__title">{{ category?.attributes.name }}</div>
      </div>
      <div v-else class="sub-category-menu__tutorial">Choose a Category on the Left</div>
    </transition>
    <hr>
    <transition-group v-if="category?.attributes.sub_categories" name="products" tag="div"
      class="sub-category-menu__items" appear>
      <SubCategoryItem v-for="subCategory in category.attributes.sub_categories.data" :key="subCategory.id"
        :subCategory="subCategory" :products="products.get(subCategory.id)" />
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from 'vue';
import { Category, Product } from '../model';
import SubCategoryItem from './SubCategoryItem.vue';
import { getMenuProduct } from '@/api.services';
import CategoryItem from './CategoryItem.vue';

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

<style scoped lang="scss">
.sub-category-menu {
  width: 20rem;
  background-color: $blue;
  padding: 3rem;
  flex-grow: 1;
}

.sub-category-menu__title {
  font-weight: bolder;
  font-size: $xx-large;
  text-align: center;
  color: $darker-pink;
  text-transform: uppercase;
}

.sub-category-menu__items {
  display: flex;
  flex-direction: column;
}

/* Transition Animation */
.products-enter-from,
.products-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.products-enter-to,
.products-leave-from {
  opacity: 1;
  transform: scale(1);
}

.products-enter-active,
.products-leave-active {
  transition: all 0.2s ease-in-out;
}


.sub-category-menu__tutorial {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: $xx-large;
  text-align: center;
  text-transform: uppercase;
  color: $darker-pink;
}

hr {
  border: 0.2rem solid $darker-pink;
  border-radius: $border-radius;
  width: 80%;
  margin-bottom: 2rem;
}

.categoryTitle-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.categoryTitle-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.categoryTitle-enter-to,
.categoryTitle-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.categoryTitle-enter-active,
.categoryTitle-leave-active {
  transition: all 0.1s ease-in-out;
}
</style>

