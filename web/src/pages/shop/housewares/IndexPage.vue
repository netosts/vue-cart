<template>
  <div class="q-py-md">
    <ProductCards :items="housewareItems" />
  </div>
</template>

<script setup lang="ts">
import ProductCards from 'src/components/shop/ProductCards.vue';
import { useShopStore } from '../../../stores/shop.store';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const shopStore = useShopStore();
const { housewareItems } = storeToRefs(shopStore);

onMounted(() => {
  shopStore.getHousewares();
})
</script>

<style scoped></style>
