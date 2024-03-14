<template>
  <q-page padding>
    <q-card class="my-card tw-max-w-[500px] tw-m-auto tw-my-10">
      <RouterLink :to="{name: 'shop', params: {id: 1, slug: 'electronics'}}">
      <q-img src="/images/vue-cart-logo.png">
        <div class="absolute-bottom text-subtitle2 text-center">
          Go Shopping!
        </div>
      </q-img>
    </RouterLink>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
