<template>
  <main class="px-5">
    <h1>Day light calculator</h1>
    <ActualView />
    <MonthsView />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ActualView from './views/ActualView.vue'
import MonthsView from './views/MonthsView.vue'

@Options({
  components: {
    ActualView,
    MonthsView
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
