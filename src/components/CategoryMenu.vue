<template>
  <div class="category-menu">
    <div class="category-menu__title">menu</div>
    <div
      class="category-menu__items"
      v-for="category in categories"
      :key="category?.id"
    >
      <CategoryItem :category="category" @click="$emit('categoryChosen', category.id)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Category } from "../model";
import CategoryItem from "./CategoryItem.vue";

export default defineComponent({
  props: {
    categories: {
      type: Array as () => Category[],
    },
  },
  setup() {
    return { };
  },
  components: { CategoryItem },
});
</script>

<style scoped lang="scss"></style>
