<script setup>

import AppNavigation from './components/AppNavigation.vue';

import { useRecipeStore } from './stores/recipes';
import Recipe from './components/Recipe.vue';
import Filter from './components/Filter.vue';

const { recipes } = useRecipeStore()

</script>

<template>

  <calcite-shell class="calcite-mode-dark">
    <AppNavigation />
    <Filter />
    <div class="recipes-container">
      <Recipe 
      v-for="recipe in recipes" 
      :key="recipe.id" 
      :recipe="recipe"
      />
    </div>
  </calcite-shell>

</template>

<style scoped>

.recipes-container {
  display: flex;
  flex-direction: column;
  padding-inline: var(--calcite-spacing-lg);
  gap: var(--calcite-spacing-lg);
}

</style>
