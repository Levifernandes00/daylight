<template>
  <div class="grid justify-content-center align-items-center flex-wrap mt-2">
    <MonthCard v-for="i in 12" v-bind:key="i" :month="i.toString()" />
  </div>
</template>

<script lang="ts">
import MonthCard from '@/components/MonthCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    MonthCard
  }
})
</script>

<style lang="scss"></style>
