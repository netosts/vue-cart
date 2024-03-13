<template>
  <div class="row q-pt-md">
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 tw-flex tw-justify-center"
      :class="{ 'tw-mx-auto': $q.screen.lt.sm }" v-for="item, id in props.items" :key="id">
      <q-card class="tw-w-[270px] tw-mb-6 tw-mx-3" flat bordered>
        <q-img :src="item.image ?? '/images/vue-cart-logo.png'" fit="contain"
          class="tw-w-[200px] tw-h-[150px] tw-mx-auto tw-flex tw-mt-2" />
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ item.name ?? 'N/A' }}</div>
          <div class="text-caption text-grey tw-h-12">
            {{ item.description }}
          </div>
        </q-card-section>
        <q-card-actions class="tw-flex tw-justify-between">
          <div class="text-h6 q-mb-xs q-pl-sm">${{ item.price ?? 'N/A' }}</div>
          <q-btn flat icon="shopping_cart" :loading="isAddLoading" color="accent" label="Add to cart"
            @click="onAddToCart(item)" />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from 'src/types/shop/shop';

interface Props {
  items: IProduct[]
}

const isAddLoading = defineModel('isAddLoading', { required: true, default: false, type: Boolean });

const props = defineProps<Props>();
const emit = defineEmits<{
  'addCart:click': [value: IProduct]
}>()

const onAddToCart = (item: IProduct) => {
  emit('addCart:click', item);
}
</script>

<style scoped></style>
