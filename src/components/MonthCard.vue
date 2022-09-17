<template>
  <main class="bg-white shadow-1 border-round flex-grow-1 p-2 m-1">
    <h3>{{ month }}</h3>
    <div class="px-6 py-3">
      <div class="py-1">
        <small>Day light:</small>
        <h2>12:03:20</h2>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    month: String
  },
  mounted() {
    this.month
  }
})
</script>

<style lang="scss"></style>
