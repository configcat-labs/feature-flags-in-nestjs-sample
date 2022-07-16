<script>
// Imports
import AppBanner from '@/components/AppBanner.vue'
import GasMileageCalculator from '@/components/GasMileageCalculator'
import SubscriptionCTA from '@/components/SubscriptionCTA.vue'

export default {
  name: 'home-page',
  setup() {},
  components: {
    AppBanner,
    GasMileageCalculator,
    SubscriptionCTA,
  },
  data() {
    return {
      isMileageCalculatorAvailable: false
    }
  },
  mounted() {
    fetch("http://localhost:3000/api/travel/mileage")
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.isMileageCalculatorAvailable = data;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
        this.isMileageCalculatorAvailable = false;
      });
  }
}

</script>

<template>
 <div>
    <AppBanner />

    <div class="flex justify-center items-center">
      <div class="container" v-if="isMileageCalculatorAvailable">
      <GasMileageCalculator />
      </div>
      <div v-else class="container">
        <SubscriptionCTA />
      </div>
    </div>
 </div>

</template>