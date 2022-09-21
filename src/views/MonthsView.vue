<template>
  <div class="grid justify-content-center align-items-center flex-wrap mt-2">
    <MonthCard v-for="date in dates" v-bind:key="date.month" :cardDate="date" />
  </div>
</template>

<script lang="ts">
import MonthCard from '@/components/MonthCard.vue'
import { DateTime } from 'luxon'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    MonthCard
  },
  data() {
    return {
      dates: this.getDates()
    }
  },
  methods: {
    getDates() {
      const today = DateTime.now()
      return [...Array(12).keys()].map(index =>
        DateTime.utc(today.year, index + 1, today.day)
      )
    }
  }
})
</script>

<style lang="scss"></style>
