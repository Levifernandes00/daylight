<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <h3>{{ date }}</h3>
    <div class="px-6 py-3">
      <div class="py-1">
        <small>Day light:</small>
        <h2>{{ daylight }}</h2>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { useStore } from '@/store/index'
import { DateTime } from 'luxon'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    month: String
  },
  async setup(props) {
    const store = useStore()
    const today = DateTime.now()
    const date = DateTime.utc(today.year, parseInt(props.month!), today.day)

    const { latitude, longitude } = store.state.location

    const data = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date.toISODate()}`
    ).then(response => response.json())

    return {
      date: date
        .setLocale('it-IT')
        .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY),
      daylight: data.results['day_length']
    }
  },
  mounted() {
    this.month
  }
})
</script>

<style lang="scss"></style>
