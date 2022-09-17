<template>
  <div class="grid justify-content-center align-items-center flex-wrap mt-2">
    <MonthCard v-for="i in 12" v-bind:key="i" :month="i" />
  </div>
</template>

<script lang="ts">
import MonthCard from '@/components/MonthCard.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    MonthCard
  }
})
export default class MonthsView extends Vue {}
</script>

<style lang="scss"></style>
