<script>

// Imports
import Navbar from '@/components/shared/Navbar'

export default {
  setup() {
    
  },
  components: {
    Navbar,
  }
}
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>