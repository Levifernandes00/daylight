<template>
  <div class="grid flex-wrap">
    <ActualDateCard />
    <ActualLocationCard />
  </div>
</template>

<script lang="ts">
import ActualDateCard from '@/components/ActualDateCard.vue'
import ActualLocationCard from '@/components/ActualLocationCard.vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
    ActualDateCard,
    ActualLocationCard
  }
})
export default class ActualView extends Vue {}
</script>

<style lang="scss"></style>
