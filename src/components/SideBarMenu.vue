<template>
  <div class="sidebar-container">
    <div class="sidebar-container--title">menu</div>
    <div v-for="category in categories" :key="category.id">
      <MenuCategory
        :category="category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuCategory from "./MenuCategory.vue";
import { Category } from "../model";

export default defineComponent({
  props: {
    categories: {
      type: Array as () => Category[],
    },
  },  
  setup() {
    return {};
  },
  components: { MenuCategory },
});
</script>

<style scoped lang="scss">
.sidebar-container {
  height: 100vh;
  width: 30%;
  background-size: cover;
  background-color: white;
  padding: 50px;
}
.sidebar-container--title {
  font-size: $xx-large;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>
