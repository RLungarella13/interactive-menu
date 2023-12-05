<template>
  <CategoryMenu
    :categories="categories"
    @category-chosen="(id) => choseCategory(id)"
  />
  <SubCategoryMenu :category="chosenCategory" :test="2" />
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from 'vue'
import { getMenuCategories } from './api.services'
import { Category } from './model'
import CategoryMenu from './components/CategoryMenu.vue'
import SubCategoryMenu from './components/SubCategoryMenu.vue'

const initialCategory = 4
export default defineComponent({
  name: 'App',
  components: { CategoryMenu, SubCategoryMenu },
  setup() {
    const categories: Ref<Category[]> = ref([])
    const chosenCategory: Ref<Category | null> = ref(null)
    onMounted(() => {
      getMenuCategories()
        .then((response) => {
          categories.value = response.data
          chosenCategory.value = categories.value[initialCategory]
        })
        .catch((error) => console.error(error))
    })
    const choseCategory = (id: number) => {
      chosenCategory.value =
        categories.value.find((category) => category.id === id) ?? null
    }
    return { categories, chosenCategory, choseCategory }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
}
</style>
