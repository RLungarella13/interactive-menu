<template>
  <div class="category-item">
    <div class="category-item__title">
      {{ category?.attributes.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Category } from '../model';

export default defineComponent({
  props: {
    category: {
      type: Object as () => Category,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.category-item {
  font-weight: bold;
  margin-bottom: 20px;
  padding: 20px;
  color: $lighter-blue;
}

.category-item:hover {
  background-color: $blue;
  color: white;
}

.category-item__title {
  font-size: $large;
  text-transform: uppercase;
  border-bottom: 2px solid $lighter-blue;
}
</style>
