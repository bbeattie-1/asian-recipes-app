<script setup>

</script>

<template>

    <div id="filter-container">
        <calcite-input-text placeholder="Search recipes" icon="file-magnifying-glass">
            <calcite-action slot="action" icon="filter"></calcite-action>
        </calcite-input-text>
    </div>

</template>

<style scoped>

#filter-container {
    padding: var(--calcite-spacing-lg);
    padding-inline: var(--calcite-spacing-xxl);
}

calcite-input-text {
    --calcite-input-text-corner-radius: 4px
}


</style>