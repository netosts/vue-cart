<template>
  <q-page padding>
    <ProductsCarousel />

    <div class="row q-pt-md">
      <div class="col-12 tw-flex tw-gap-4 tw-justify-between tw-flex-wrap  tw-items-end">
        <h1 class="text-h3 tw-flex-1 tw-text-nowrap">
          Discover Product
        </h1>
        <div class="tw-flex tw-gap-6 tw-flex-wrap">
          <RouterLink :to="{ name: 'shop.electronics' }">Electronics</RouterLink>
          <RouterLink :to="{ name: 'shop.clothing' }">Clothing</RouterLink>
          <RouterLink :to="{ name: 'shop.housewares' }">Home & Kitchen</RouterLink>
        </div>
      </div>
      <div class="col-12">
        <RouterView />
      </div>
    </div>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import ProductsCarousel from 'src/components/shop/ProductsCarousel.vue';
</script>

<style lang="scss" scoped>
@import '../../css/quasar.variables.scss';

.router-link-active {
  color: $accent;
}
</style>
