<template>
  <div class="card-wrap">
    <div class="card-image" :style="{ backgroundImage: `url(${props.image})` }"></div>
    <div class="card-info">
      <h1 class="card-title">{{ props.title }}</h1>
      <p class="card-content">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DisplayCard",
  props: {
    image: {
      type: Image,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss" scoped>
.card-wrap {
  max-width: 32em;
  height: auto;
  .card-image {
    border-radius: 0.5em 0.5em 0em 0em;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 25svh;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0%);
    }
    transition: filter 0.25s ease;
  }
  .card-info {
    .card-title {
      font-size: 2em;
      padding-left: 0.25em;
      font-weight: medium;
      background-color: var(--primary);
      color: var(--secondary);
    }
    .card-content {
      padding: 0.25em;
    }
  }
}
</style>
