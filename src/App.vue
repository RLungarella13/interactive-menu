<template>
  <SideBarMenu :categories="categories" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import SideBarMenu from "./components/SideBarMenu.vue";
import { getMenuCategories } from "./api.services";

export default defineComponent({
  name: "App",
  components: { SideBarMenu },
  setup() {
    const categories = ref();
    onMounted(() => {
      getMenuCategories().then((response) => {
        categories.value = response;
      });
    });

    return {categories};
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
