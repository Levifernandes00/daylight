<template>
  <div class="grid flex-wrap">
    <ActualDateCard />
    <ActualLocationCard />
  </div>
</template>

<script lang="ts">
import ActualDateCard from '@/components/ActualDateCard.vue'
import ActualLocationCard from '@/components/ActualLocationCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ActualDateCard,
    ActualLocationCard
  }
})
</script>

<style lang="scss"></style>
