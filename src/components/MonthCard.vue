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

type PropsDate = { year: number; month: number; day: number }

export default defineComponent({
  props: {
    cardDate: Object
  },
  data() {
    return {
      date: '--',
      daylight: '--'
    }
  },
  async created() {
    const date = this.cardDate as DateTime
    this.setDate(date)
    this.setDaylight(date)
  },
  methods: {
    setDate(date: DateTime) {
      this.date = date
        .setLocale('it-IT')
        .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    },
    setDaylight(date: DateTime) {
      const store = useStore()
      store.watch(
        () => store.state.location,
        async () => {
          this.daylight = await store.dispatch('fetchDaylight', date)
        }
      )
    }
  }
})
</script>

<style lang="scss"></style>
