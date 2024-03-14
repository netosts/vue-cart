<template>
  <q-page padding>
    <ProductsCarousel />

    <div class="row q-pt-md">
      <div class="col-12 tw-flex tw-gap-4 tw-justify-between tw-flex-wrap  tw-items-end">
        <h1 class="text-h3 tw-font-medium tw-flex-1 tw-text-nowrap" :class="{'text-h3' : $q.screen.gt.sm, 'text-h4' : $q.screen.lt.sm}">
          Discover Product
        </h1>
        <div class="tw-flex tw-gap-6 tw-flex-wrap">
          <template v-for="category, categoryId in categories" :key="categoryId">
            <RouterLink :to="{ name: 'shop', params: { id: category.id, slug: category.slug } }">
              {{ category.name }}
            </RouterLink>
          </template>

        </div>
      </div>
      <div class="col-12 tw-my-6">
        <ProductCards :items="products" @add-cart:click="onAddToCart" v-model:is-add-loading="isAddLoading" />
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
import { useCart } from 'src/composable/useCart';
import { notifyError, notifySuccess } from 'src/composable/useNotification';
import { useShopStore } from 'src/stores/shop.store';
import { IProduct } from 'src/types/shop/shop';
import Swal from 'sweetalert2';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const shopStore = useShopStore();
const { products, categories } = storeToRefs(shopStore);
const {addToCart} = useCart();

const isAddLoading = ref(false);

const route = useRoute();
const router = useRouter();

const onAddToCart = (product: IProduct) => {
  isAddLoading.value = true;
  const res = addToCart(product);
  res.then((msg: string) => {
    (notifySuccess() as typeof Swal).fire(msg)
    .then((result) => {
      if (result.isConfirmed) {
        router.push({name: 'cart'});
      }
    });
  }).catch((err: string) => {
    notifyError(err);
  }).finally(() => isAddLoading.value = false)
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
