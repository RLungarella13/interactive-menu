<template>
  <div class="sub-category-menu">
    <div v-if="category">
      <div class="sub-category-menu__title">{{ category?.attributes.name }}</div>
      <hr>
    </div>
    <div v-else class="sub-category-menu__tutorial">Choose a Category on the Left</div>
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
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
  }
}

/* Transition Animation */
.products-enter-from {
  opacity: 0;
  transform: scale(0.5);
}

.products-enter-to {
  opacity: 1;
  transform: scale(1);
}

.products-enter-active {
  transition: all 0.2s ease-in-out;
}

.products-leave-from {
  opacity: 1;
  transform: scale(1);
}

.products-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.products-leave-active {
  transition: all 0.2s ease-in-out;
}

.products-move {
  transition: all 0.2s ease-in-out;
}
.sub-category-menu__tutorial {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: $xx-large;
  text-align: center;
  color: $lighter-blue;
}
hr {
  border: 0.2rem solid $darker-pink;
  border-radius: $border-radius;
  width: 80%;
}
</style>

