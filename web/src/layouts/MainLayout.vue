<template>
  <q-layout view="lhh LpR lFf">
    <q-header reveal bordered class="bg-dark text-white" height-hint="98">
      <q-toolbar class="tw-py-4">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <RouterLink to="/">
            <q-avatar>
              <img src="/images/vue-cart-logo.png" />
            </q-avatar>
            {{ productName ?? 'Vue Cart' }}
          </RouterLink>
        </q-toolbar-title>

        <RouterLink :to="{ name: 'cart' }" class="tw-relative">
          <q-icon name="shopping_cart" size="lg" class="tw-mr-8" />
          <q-icon name="radio_button_unchecked" size="md" class="tw-absolute tw-left-6 -tw-bottom-2" />
          <span class="tw-absolute tw-font-bold tw-text-accent -tw-bottom-0.5"
            :class="{ 'tw-left-9': decimalShopCart === 1, 'tw-left-8': decimalShopCart === 2, 'tw-left-7': decimalShopCart === 3 }">{{
          countShopCart }}</span>
        </RouterLink>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
      <div class="q-pa-md q-gutter-md">
    <q-list padding class="rounded-borders" style="max-width: 350px">
      <q-item-label header>Menu</q-item-label>

      <q-item clickable v-ripple :to="{name: 'home'}" active-class="menu-active">
        <q-item-section avatar top>
          <q-avatar icon="home" size="50px" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Home</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="shopRoute()" active-class="menu-active">
        <q-item-section avatar top>
          <q-avatar icon="shopping_cart" size="50px" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Shop</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>

      <div class="absolute" style="top: 15px; right: -17px" v-if="leftDrawerOpen">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="leftDrawerOpen = false" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="tw-bg-dark-light tw-w-full text-white tw-h-32 tw-flex tw-justify-center tw-items-center">
      <div class="row">
        <div class="col-12 tw-flex tw-gap-6 tw-justify-center">
          <a v-for="social, socialId in socialItems" :key="socialId" :href="social.href ?? undefined" target="_blank"
            rel="noopener">
            <q-avatar size="40px" class="social-items">
              <img :src="social.src" :alt="social.alt">
            </q-avatar>
          </a>
        </div>
        <div class="col-12 tw-text-center tw-mt-6">
          <span class="tw-mr-1 tw-text-gray-300">made by</span> <a href="https://netosts.com/" target="_blank"
            rel="noopener">Neto Santos</a>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { productName } from '../../package.json';
import { useShopStore } from 'src/stores/shop.store';
import { useRoute } from 'vue-router';

const leftDrawerOpen = ref(false);
const shopStore = useShopStore();
const countShopCart = computed(() => Object.values(shopStore.cart).flat().length);
const decimalShopCart = computed(() => countShopCart.value.toString().length);

const route = useRoute();

const shopRoute = () => {
  if (!route.params.id) {
    return {name: 'shop', params: {id: 1, slug: 'electronics'}}
  }

  return {name: 'shop', params: {id: route.params.id, slug: route.params.slug}}
}

export interface ISocialItems {
  src: string;
  alt?: string;
  href?: string;
}

const socialItems: ISocialItems[] = [
  {
    src: '/images/github-logo.png',
    alt: 'github-logo.png',
    href: 'https://github.com/netosts/vue-cart',
  },
  {
    src: '/images/linkedin-logo.png',
    alt: 'linkedin-logo.png',
    href: 'https://www.linkedin.com/in/silvio-dos-santos-neto-24a910259/',
  },
]

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>

<style lang="scss" scoped>
@import '../css/quasar.variables.scss';

.social-items {
  img {
    transition: 0.25s;
  }
}

.social-items:hover {
  img {
    background-color: $accent;
  }
}

.menu-active {
  background-color: $accent-light;
  color: $accent;
}
</style>
