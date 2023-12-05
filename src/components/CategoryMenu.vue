<template>
  <div class="category-menu" :class="{ show: sideBarVisibility }">
    <div class="category-menu__logo">
      <img src="../assets/images/mascotte.svg" alt="">
    </div>
    <div class="caption">CHOOSE A CATEGORY</div>
    <hr />
    <div class="category-menu__items" v-for="category in categories" :key="category?.id">
      <CategoryItem :category="category" @click="$emit('categoryChosen', category.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Category } from "../model";
import CategoryItem from "./CategoryItem.vue";

export default defineComponent({
  props: {
    categories: {
      type: Array as () => Category[],
    },
  },
  setup() {
    const sideBarVisibility: Ref<boolean> = ref(false);
    const toggleShadowBarVisibility = () => {
      sideBarVisibility.value = !sideBarVisibility.value;
    };

    return { toggleShadowBarVisibility, sideBarVisibility };
  },
  components: { CategoryItem },
});
</script>

<style scoped lang="scss">
hr {
  color: $lighter-blue;
  border-style: double;
  margin-bottom: 20px;
}

.category-menu {
  background-color: $pink;
  padding: 40px;
  box-shadow: 2px 0 5px -2px black;
  transition: 0.8s ease-in-out;
}

.category-menu__logo {
  text-align: center;
}

.category-menu__logo img {
  width: 200px;
  margin-bottom: 40px;
}

.category-menu__title {
  font-weight: bolder;
  font-size: $xx-large;
  margin-bottom: 40px;
  text-align: center;
}

.caption {
  text-align: center;
  font-weight: 700;
  color: $lighter-blue;
}
</style>
