<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <div class="px-6 py-3">
      <div class="py-1 text-2xl">
        <strong>Actual Date</strong>
      </div>
      <div class="py-2">
        <small>Today</small>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class ActualDateCard extends Vue {}
</script>

<style lang="scss"></style>
