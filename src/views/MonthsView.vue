<template>
  <div class="grid justify-content-center align-items-center flex-wrap mt-2">
    <MonthCard v-for="i in 12" v-bind:key="i" :month="i.toString()" />
  </div>
</template>

<script lang="ts">
import MonthCard from '@/components/MonthCard.vue'
import { DateTime } from 'luxon'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    const today = DateTime.now()
    const dates = [...Array(12).keys()].map(index => ({
      year: today.year,
      month: index + 1,
      day: today.day
    }))
    return {
      dates
    }
  },
  components: {
    MonthCard
  }
})
</script>

<style lang="scss"></style>
