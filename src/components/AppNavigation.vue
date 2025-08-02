<template>

    <calcite-navigation slot="header">
        <calcite-navigation-logo slot="logo" icon="language" heading="East Meets West" description=" Asian-inspired recipes from Ben"  />
        <calcite-action @click="$emit('share-click')" slot="content-end" icon="share" scale="m"></calcite-action>
    </calcite-navigation>

</template>

<style scoped>

* {
    --calcite-color-foreground-1: var(--calcite-color-brand);
    --calcite-icon-color: #ffffff;  
}

</style>