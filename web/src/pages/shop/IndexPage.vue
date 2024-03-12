<template>
  <q-page padding>
    <ProductsCarousel />

    <div class="row q-pt-md">
      <div class="col-12 tw-flex tw-gap-4 tw-justify-between tw-flex-wrap  tw-items-end">
        <h1 class="text-h3 tw-font-medium tw-flex-1 tw-text-nowrap">
          Discover Product
        </h1>
        <div class="tw-flex tw-gap-6 tw-flex-wrap">
          <template v-for="category, categoryId in categories" :key="categoryId">
            <RouterLink :to="{name: 'shop', params: {id: category.id, slug: category.slug}}">
            {{ category.name }}
          </RouterLink>
          </template>

        </div>
      </div>
      <div class="col-12 tw-my-6">
        <ProductCards :items="products" @add-cart:click="onAddToCart" />
      </div>
    </div>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ProductCards from 'src/components/shop/ProductCards.vue';
import ProductsCarousel from 'src/components/shop/ProductsCarousel.vue';
import { useShopStore } from 'src/stores/shop.store';
import { IProduct } from 'src/types/shop/shop';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const shopStore = useShopStore();
const {products, categories, cart} = storeToRefs(shopStore);

const route = useRoute();

const onAddToCart = (product: IProduct) => {
  if (cart.value[product.id]) {
    cart.value[product.id].push(product);
    console.log(cart.value);
    return;
  }

  cart.value = {
    ...cart.value,
    [product.id]: [product]
  }

  console.log(cart.value);
}

watch(route, () => {
  shopStore.getProducts(Number(route.params.id))
})

onMounted(() => {
  shopStore.getCategories();
  shopStore.getProducts(Number(route.params.id));
})
</script>

<style lang="scss" scoped>
@import '../../css/quasar.variables.scss';

.router-link-active {
  color: $accent;
}
</style>
