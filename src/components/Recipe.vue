<script setup>

defineProps({
    recipe: Object,
})

</script>

<template>

     <div class="recipe-container">
        <span class="recipe-title">{{ recipe.name }}<span class="recipe-country">&nbsp;&nbsp;{{ recipe.origin }}</span></span>
        <div class="recipe-tags-container">
            <calcite-chip 
            v-for="tag in recipe.tags"  
            scale="s">{{ tag }}</calcite-chip>
        </div>
        <calcite-list>
            <calcite-list-item 
            v-for="(ingredient, index) in recipe.ingredients" 
            :label="ingredient"
            :icon-start="`number-circle-${index + 1}-f`"
            interaction-mode="static"
            selection-mode="none"
            />
        </calcite-list>
        <span class="divider">中国菜中国菜</span>
      </div>


</template>

<style scoped>

.recipe-container {
    display: flex;
    flex-direction: column;
    gap: var(--calcite-spacing-md);
    padding-inline: var(--calcite-spacing-sm);
}

.recipe-title {
    color: var(--calcite-color-text-1);
    font-size: var(--calcite-font-size-xl);
    font-weight: var(--calcite-font-weight-medium);
}

.recipe-country {
    color: var(--calcite-color-text-3);
    font-size: var(--calcite-font-size-sm);
    font-weight: var(--calcite-font-weight-light);
    text-transform: uppercase;
}

.recipe-tags-container {
    display: flex;
    gap: var(--calcite-spacing-xs);
}

.divider {
    color: var(--calcite-color-foreground-2);
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.75rem;
}

</style>