<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <div class="px-6 py-3">
      <div class="py-1 text-2xl">
        <strong>Actual Location</strong>
      </div>
      <div class="py-2">{{ latitude }} - {{ longitude }}</div>
    </div>
  </main>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'

function getLocation() {
  return new Promise(
    (resolve: (value: { latitude: number; longitude: number }) => void) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords
          resolve({ latitude, longitude })
        })
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
  )
}

export default defineComponent({
  async setup() {
    const store = useStore()
    const { latitude, longitude } = await getLocation()
    store.dispatch('setLocation', { latitude, longitude })
    return { latitude, longitude }
  }
})
</script>

<style lang="scss"></style>
