<script>
// Imports
import GasMileageForm from './GasMileageForm.vue'

export default {
  name: 'gas-mileage-calculator',
  setup() {
    
  },
  components: {
    GasMileageForm
  },
}
</script>

<template>

<div class="p-4 w-full bg-white rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 class="text-center mb-2 text-3xl font-bold text-gray-900 dark:text-white">Calculate Your Travel Mileage</h5>
  <p class="text-center mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move it forward with eco fuel. More mileage for less dollars.</p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    <GasMileageForm />
  </div>
</div>

</template>