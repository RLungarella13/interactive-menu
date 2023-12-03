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
        :products="products"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'
import { Category, Product } from '../model'
import SubCategoryItem from './SubCategoryItem.vue'
import { getMenuProduct } from '@/api.services'

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
    const products: Ref<Map<number, Product[]>> = ref(new Map())
    onMounted(() => {
      if (props.category?.id) {
        for (let i = 0; i < 4; i++) {
          console.log('Ma come se fa')
          getMenuProduct(props.category?.id).then((response) => {
            products.value.set(
              response.data.id,
              response.data.attributes.products.data
            )
            console.log(response.data)
          })
        }
      }
    })
    return { products }
  },
})
</script>

<style scoped>
.subcategory-menu {
  height: 100vh;
  width: 70%;
  background-size: cover;
  background-color: white;
  padding: 50px;
}
</style>
