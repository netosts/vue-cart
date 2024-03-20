<template>
  <q-page>
    <div class="q-pt-md q-px-md">
      <q-btn flat icon="arrow_back_ios_new" color="dark" label="Go back" @click="$router.go(-1)" />
    </div>

    <div class="row tw-flex tw-w-full tw-justify-center tw-items-center tw-py-4">
      <q-card v-for="cartValue, cartKey in cart" :key="cartKey" class="col-12 tw-px-[10%]" flat bordered>
        <q-card-section class="tw-flex tw-gap-10 tw-justify-between"
          :class="{ 'tw-flex-col': $q.screen.lt.sm }">
          <q-card-section>
            <div class="tw-flex tw-gap-10" :class="{ 'tw-flex-col': $q.screen.lt.sm }">
              <q-img fit="contain" class="tw-w-[170px] tw-min-w-[170px] tw-min-h-[150px] tw-h-[150px] tw-flex tw-mt-2" :src="cartValue.image" />
              <div class="tw-flex tw-flex-col tw-justify-between">
                <div class="tw-flex tw-flex-col">
                  <span class="tw-text-xl tw-font-medium">{{ cartValue.name }}</span>
                  <span class="tw-mt-4">{{ cartValue.description }}</span>
                </div>
                <div class="tw-flex tw-items-center tw-gap-2">
                  <CartAmountButtons
                    :cart-value="cartValue"
                    @click:add="addToCart($event)"
                    @click:remove="removeFromCart($event)"
                  />
                  <q-separator vertical></q-separator>
                  <q-icon name="delete" @click="deleteFromCart(cartValue)" size="sm"
                    class="tw-cursor-pointer"></q-icon>
                </div>
              </div>
            </div>

          </q-card-section>
          <q-card-section>
            <div class="tw-text-accent tw-text-lg tw-font-bold">{{ useCurrencyToUS(cartValue.price) }}</div>
          </q-card-section>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CartAmountButtons from 'src/components/shop/CartAmountButtons.vue';
import { useCart } from 'src/composable/useCart';
import { useCurrencyToUS } from 'src/composable/useCurrency';
import { useShopStore } from 'src/stores/shop.store';

const shopStore = useShopStore();
const { cart } = storeToRefs(shopStore);
const { addToCart, removeFromCart, deleteFromCart } = useCart();
</script>

<style scoped></style>
