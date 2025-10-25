<script setup>

const props = defineProps({
    recipeTitle: String,
    ingredients: Array,
    thumbnail: String
})

</script>

<template>

     <div class="recipe-container">
        <span class="recipe-title">{{ props.recipeTitle }}</span>
        <div class="recipe-tags-container">
            <calcite-chip scale="s">China</calcite-chip>
            <calcite-chip scale="s">Taiwan</calcite-chip>
        </div>
        <calcite-list>
            <calcite-list-item 
            v-for="(ingredient, index) in props.ingredients" 
            :label="ingredient"
            :icon-start="`number-circle-${index + 1}-f`"  
            />
        </calcite-list>
      </div>


</template>

<style scoped>

.recipe-container {
    display: flex;
    flex-direction: column;
    gap: var(--calcite-spacing-sm);
    padding: var(--calcite-spacing-sm);
}

.recipe-title {
    color: var(--calcite-color-text-1);
    font-size: var(--calcite-font-size-2);
    font-weight: var(--calcite-font-weight-medium);
}

.recipe-tags-container {
    display: flex;
    gap: var(--calcite-spacing-xs);
}

</style>