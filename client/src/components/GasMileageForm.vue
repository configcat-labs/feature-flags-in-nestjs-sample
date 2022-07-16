<script>

// Imports
import FormGroup from './FormGroup.vue'

export default {
  setup() {
    
  },
  components: {
    FormGroup,
  }
}
</script>

<template>

  <form>
      <div class="grid gap-6 mb-6 md:grid-cols-4">
          <FormGroup inputName="your-location" label="Your Location" type="text" />
          <FormGroup inputName="your-destination" label="Your Destination" type="text" />
          <FormGroup inputName="your-vehicle-model" label="Your Vehicle Model" type="text" />
          <FormGroup inputName="fuel-type" label="Fuel Type (Diesel or Gas)" type="text" />
 
      </div>


      <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Calculate Mileage</button>
  </form>

</template>