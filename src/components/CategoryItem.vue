<template>
  <div v-if="category">
    <div class="category-item" :class="{ selected: selectedElementID === category.id}" @click="setSelectedCategoryItem(category.id)">
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
  },
  setup() {
    const selectedElementID: Ref<number | null> = ref(0);   
    const setSelectedCategoryItem = (id: number) => {

      selectedElementID.value = id;
    };
    return { setSelectedCategoryItem, selectedElementID};
  },
});
</script>

<style scoped lang="scss">
.category-item {
  font-weight: bold;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  color: $lighter-blue;
}

.category-item:hover {
  background-color: $blue;
  color: white;
}
.category-item.selected {
  background-color: $blue;
  color: white;
}

.category-item__title {
  font-size: $large;
  text-transform: uppercase;
  border-bottom: 0.1rem solid $lighter-blue;
}
</style>
