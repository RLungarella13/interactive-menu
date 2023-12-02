<template>
  <sideBarMenu @categoryChosen="printCategory" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBarMenu from "./components/SideBarMenu.vue";

export default defineComponent({
  name: "App",
  components: { SideBarMenu },
  setup() {
    return {};
  },
  methods: {
    printCategory(category: string) {
      console.log(category)
    },
  },
});
</script>

<style lang="scss">
#app {
  color: $white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
