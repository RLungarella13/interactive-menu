<template>
  <div class="menu-category">
    <div class="menu-category__title">
      {{ category?.attributes.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Category } from "../model";

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
.menu-category{  
    padding: 20px;
    margin-bottom: 10px;
}

.menu-category { 
    display:  inline-block; 
    font-weight:  400; 
    cursor: pointer;
    vertical-align:  middle; 
    background-color:  #f1f1f1; 
    border:  0; 
    padding:  .25rem 1.5rem; 
    font-size:  1.5rem; 
    line-height:  1.5; 
    border-radius:  4rem; 
    transition:  all .3s ease-out; 
    box-shadow: 2px 1px 2px rgba(180,180,180,.7),inset 3px 2px 5px rgba(255,255,255,1);
  } 

  .menu-category:hover { 
    background-color: #f1f1f1; 
    border-radius: 2rem;
    box-shadow: -2px -1px 2px rgba(180,180,180,.3),inset -3px -2px 3px rgba(255,255,255,.7);
  } 
.menu-category__title{
    color:  #363636; 
    font-weight: bold;
    font-size: $large;
}
</style>
