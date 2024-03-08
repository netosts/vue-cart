<template>
  <div class="q-py-md">
    <ProductCards :items="clothingItems" />
  </div>
</template>

<script setup lang="ts">
import ProductCards from 'src/components/shop/ProductCards.vue';
import { useShopStore } from '../../../stores/shop.store';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const shopStore = useShopStore();
const { clothingItems } = storeToRefs(shopStore);

onMounted(() => {
  shopStore.getClothings();
})
</script>

<style scoped></style>
