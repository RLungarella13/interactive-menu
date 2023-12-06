<template>
  <div class="category-menu" :class="{ show: sideBarVisibility }">
    <div class="category-menu__logo">
      <img src="../assets/images/mascotte.svg" alt="">
    </div>
    <div class="category-menu__tutorial">
      <div>CHOOSE A CATEGORY</div>
      <img src="../assets/images/icons/click-hand.svg" alt="">
    </div>
    <hr />
    <div class="category-menu__items" v-for="category in categories" :key="category?.id">
      <CategoryItem :category="category" :selected="category.id === selectedCategory" @click="$emit('categoryChosen', category.id)" @changeCategoryStyle="selectCategory(category.id)"/>
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
    const selectedCategory = ref();
    const selectCategory = (id: number) => {
      selectedCategory.value = id;
    };
    const sideBarVisibility: Ref<boolean> = ref(false);
    const toggleShadowBarVisibility = () => {
      sideBarVisibility.value = !sideBarVisibility.value;
    };

    return { toggleShadowBarVisibility, sideBarVisibility, selectedCategory, selectCategory };
  },
  components: { CategoryItem },
});
</script>

<style scoped lang="scss">
.category-menu {
  background-color: $pink;
  padding: 2rem;
  box-shadow: 2px 0 5px -2px black;
  transition: 0.8s ease-in-out;
}

.category-menu__logo {
  text-align: center;
}

.category-menu__logo img {
  width: 12.5rem;
  margin-bottom: 1rem;
}

.category-menu__title {
  font-weight: bolder;
  font-size: $xx-large;
  margin-bottom: 2.5rem;
  text-align: center;
}

.category-menu__tutorial {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: $lighter-blue;
}
.category-menu__tutorial img {
  width: 1.2rem;
}
hr{
  border: 0.1rem solid $lighter-blue;
  border-radius: $border-radius;
  width: 80%;
  margin-bottom: 1rem;
}
</style>
