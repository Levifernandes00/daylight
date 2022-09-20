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
  data() {
    return {
      date: '--',
      daylight: '--'
    }
  },
  async created() {
    const store = useStore()
    const today = DateTime.now()
    const date = DateTime.utc(today.year, parseInt(this.month!), today.day)

    this.date = date
      .setLocale('it-IT')
      .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

    store.watch(
      () => store.state.location,
      async () => {
        this.daylight = await store.dispatch('fetchDaylight', date)
      }
    )
  },
  mounted() {
    this.month
  }
})
</script>

<style lang="scss"></style>
