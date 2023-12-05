<template>
  <div class="category-menu">
    <div class="category-menu__logo">
      <img src="../assets/images/logo.svg" alt="">
    </div>
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

<style scoped lang="scss">
.category-menu{
  background-color: $pink;
  color: $blue;
  padding: 50px;
}
.category-menu__logo img{
  text-align: center;
  width: 300px;

  margin-bottom: 40px;
}
.category-menu__title{
  font-weight: bolder;
  font-size: $xx-large;
  margin-bottom: 40px;
  text-align: center;
}
</style>
