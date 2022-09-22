<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <div class="px-6 py-3">
      <div class="py-1 text-2xl">
        <strong>Actual Date</strong>
      </div>
      <div class="py-2">{{ today }}</div>
    </div>
  </main>
</template>

<script lang="ts">
import { DateTime } from 'luxon'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      today: ''
    }
  },
  created() {
    this.setToday()
  },
  methods: {
    setToday() {
      this.today = DateTime.now()
        .setLocale('it-IT')
        .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    }
  }
})
</script>

<style lang="scss"></style>
