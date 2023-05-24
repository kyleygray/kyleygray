<template>
  <div class="gallery-container flex flex-wrap justify-center">
    <div
      v-for="(image, index) in props.images"
      :key="index"
      class="gallery-component-image-wrapper"
    >
      <div class="image" :style="{ backgroundImage: `url(${image})` }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GalleryComponent",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss">
.gallery-container {
  .gallery-component-image-wrapper {
    flex-basis: calc(
      33.33% - 0.6em
    ); // to maintain 3 images per row while including margins
    margin: 0.3em; // to create space between the images
    box-sizing: border-box;
    position: relative;
    padding-bottom: 25vh; // This will keep the image square

    .image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: cover;
      background-position: 0px, 0px;
      border-radius: 0.5rem;
    }
  }
}
</style>
