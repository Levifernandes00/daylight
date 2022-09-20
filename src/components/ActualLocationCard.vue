<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <div class="px-6 py-3">
      <div class="py-1 text-2xl">
        <strong>Actual Location</strong>
      </div>
      <Suspense>
        <template v-if="loading">
          <spinner></spinner>
        </template>

        <template v-else>
          <div class="py-2">{{ latitude }} - {{ longitude }}</div>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script lang="ts">
import { Location, useStore } from '@/store'
import { defineComponent } from 'vue'

function getLocation() {
  return new Promise((resolve: (value: Location) => void) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        resolve({ latitude, longitude })
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  })
}

export default defineComponent({
  data() {
    return { loading: false, latitude: 0, longitude: 0 }
  },
  async created() {
    this.loading = true
    const { latitude, longitude } = await this.getLocationData()
    this.latitude = latitude
    this.longitude = longitude
    this.loading = false
  },

  methods: {
    async getLocationData() {
      const store = useStore()
      const location = await getLocation()
      store.dispatch('setLocation', location)
      return location
    }
  }
})
</script>

<style lang="scss"></style>
