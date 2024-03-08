<template>
  <q-layout view="lhh LpR lFf">
    <q-header reveal bordered class="bg-dark text-white" height-hint="98">
      <q-toolbar class="tw-py-4">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/images/vue-cart-logo.png" />
          </q-avatar>
          {{ productName ?? 'Vue Cart' }}
        </q-toolbar-title>



        <div class="row">
          <div class="col tw-flex tw-gap-4 tw-mx-6">
            <a v-for="social, socialId in socialItems" :key="socialId" :href="social.href ?? undefined" target="_blank"
              rel="noopener">
              <q-avatar class="social-items">
                <img :src="social.src" :alt="social.alt">
              </q-avatar>
            </a>
          </div>
        </div>
      </q-toolbar>

      <q-separator color="white" />

      <q-tabs align="left" class="tw-mx-10 tw-pt-1">
        <q-route-tab :to="{ name: 'home' }" label="Home" />
        <q-route-tab :to="{ name: 'shop.electronics' }" label="Shop" />
      </q-tabs>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->

      <div class="absolute" style="top: 15px; right: -17px" v-if="leftDrawerOpen">
        <q-btn dense round unelevated color="accent" icon="chevron_left" @click="leftDrawerOpen = false" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { productName } from '../../package.json';

const leftDrawerOpen = ref(false);

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
  {
    src: '/images/neto-logo.png',
    alt: 'neto-logo.png',
    href: 'https://netosts.com/',
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
</style>
