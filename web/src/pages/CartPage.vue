<template>
  <q-page>
    <div class="row tw-flex tw-w-full tw-justify-center tw-items-center tw-py-10">
      <q-card v-for="cartValue, cartKey in cart" :key="cartKey" class="col-12 tw-px-[10%]" flat bordered>
      <q-card-section class="tw-flex tw-justify-between">
        <q-card-section class="tw-flex tw-gap-6">
          <q-img
        fit="contain"
          class="tw-w-[200px] tw-h-[150px] tw-flex tw-mt-2"
          :src="cartValue[0].image"
        />
        <div class="tw-flex tw-flex-col tw-justify-between">
          <div class="tw-flex tw-flex-col">
            <span class="tw-text-xl tw-font-medium">{{ cartValue[0].name }}</span>
            <span class="tw-mt-4">{{ cartValue[0].description }}</span>
          </div>
          <div class="tw-flex tw-items-center tw-gap-2">
            <q-icon name="remove_circle_outline" size="sm" class="tw-cursor-pointer"></q-icon>
            <q-input square outlined v-model="cartValue[0].price" class="tw-w-20" />
            <q-icon name="add_circle_outline" size="sm" class="tw-cursor-pointer"></q-icon>
            <q-separator vertical></q-separator>
            <q-icon name="delete" size="sm" class="tw-cursor-pointer"></q-icon>
          </div>
        </div>

        </q-card-section>
        <q-card-section>
          <div class="tw-text-accent tw-text-lg tw-font-bold">${{ cartValue[0].price }}</div>
        </q-card-section>

      </q-card-section>
    </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useShopStore } from 'src/stores/shop.store';

const shopStore = useShopStore();
const {cart} = storeToRefs(shopStore);
</script>

<style scoped>

</style>
