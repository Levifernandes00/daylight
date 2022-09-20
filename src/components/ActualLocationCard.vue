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
      const location = await store.dispatch('fetchLocation')
      return location
    }
  }
})
</script>

<style lang="scss"></style>
