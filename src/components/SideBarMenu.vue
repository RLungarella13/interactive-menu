<template>
  <div v-for="category in categories" :key="category.id">
    <MenuCategory
      :category="category"
      @click="$emit('categoryChosen', category.attributes.name)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import MenuCategory from "./MenuCategory.vue";
import { getMenuCategories } from "../api.services";

export default defineComponent({
  setup() {
    const categories = ref();
    onMounted(() => {
      getMenuCategories().then((response) => {
        categories.value = response;
      });
    });

    return { categories };
  },
  components: { MenuCategory },
});
</script>

<style scoped lang="scss"></style>
