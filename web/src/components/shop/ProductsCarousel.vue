<template>
  <div>
    <q-carousel animated v-model="slide" navigation :autoplay="autoplay" infinite arrows transition-prev="slide-right"
      transition-next="slide-left" :height="$q.screen.lt.sm ? '22rem' : $q.screen.lt.md ? '28rem' : '35rem'"
      @mouseenter="autoplay = false" @mouseleave="autoplay = true">
      <q-carousel-slide v-for="item, id in items" :key="id" :name="id + 1" class="tw-flex">
        <img :src="item.src" class="tw-flex-1" />
        <img :src="item.src" class="tw-flex-1 tw-grayscale" v-if="$q.screen.gt.sm" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(1);
const autoplay = ref(true)

export interface ProductsCarouselItems {
  src: string;
}

const items: ProductsCarouselItems[] = [
  {
    src: '/images/shop/mobile-phone.jpg',
  },
  {
    src: '/images/shop/gaming-joystick.jpg',
  },
  {
    src: '/images/shop/laptop-wallpaper.jpg',
  },
]
</script>

<style lang="scss" scoped>
.q-carousel__slide,
.q-carousel .q-carousel--padding {
  padding: 0 0 16px 0;
}
</style>
