<script>
// Imports

import SiteLayout from './views/layout/SiteLayout.vue';

export default {
  data() {
    return {
      navigationItems: [
        {
          path: '/',
          label: 'Home'
        }
      ]
    }
  },
  components: {
    SiteLayout,
  }
}

</script>

<template>
  <SiteLayout :navigationItems="navigationItems">
    <router-view></router-view>
  </SiteLayout>
</template>