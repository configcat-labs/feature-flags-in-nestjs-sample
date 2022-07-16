<script>
// Imports
import AppBanner from '@/components/AppBanner.vue'
import GasMilageCalculator from '@/components/GasMilageCalculator'
import SubscriptionCTA from '@/components/SubscriptionCTA.vue'

export default {
  name: 'home-page',
  setup() {},
  components: {
    AppBanner,
    GasMilageCalculator,
    SubscriptionCTA,
  },
  data() {
    return {
      isMilageCalculatorAvailable: false
    }
  },
  mounted() {
    fetch("https://api.npms.io/v2/invalid-url")
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.isMilageCalculatorAvailable = true;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
        this.isMilageCalculatorAvailable = false;
      });
  }
}

</script>

<template>
 <div>
    <AppBanner />

    <div class="flex justify-center items-center">
      <div class="container" v-if="isMilageCalculatorAvailable">
      <GasMilageCalculator />
      </div>
      <div v-else class="container">
        <SubscriptionCTA />
      </div>
    </div>
 </div>

</template>