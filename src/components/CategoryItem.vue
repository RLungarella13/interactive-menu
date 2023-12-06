<template>
  <div v-if="category">
    <div class="category-item" :class="{ selected: selected }" @click="$emit('changeCategoryStyle')">
      <div class="category-item__title">
        {{ category.attributes.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { Category } from '../model';

export default defineComponent({
  props: {
    category: {
      type: Object as () => Category,
    },
    selected: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.category-item {
  color: $darker-blue;
  background-color: $darker-pink;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  border-radius: $border-radius;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.category-item:hover {
  transform: translateX(1rem);
  background-color: $lighter-blue;
  transition: 0.2s ease-in-out;
}

.category-item.selected {
  background-color: $blue;
  color: white;
  transform: translateX(1rem);
  transition: all 0.1s ease-in-out;
}

.category-item__title {
  font-size: $large;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
}
</style>
