<template>
  <div class="page-container">
    <h1>Process Page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.page-container {
    background: blue;
  }
</style>