<template>
  <div class="gallery-container flex flex-wrap justify-center">
    <div
      ref="images"
      v-for="(image, index) in props.images"
      :key="index"
      class="gallery-component-image-wrapper"
    >
      <!-- <ImageModal :image="image" /> -->
      <div
        @click="handleClick(index, image)"
        :class="{
          image: true,
          selected: selected === index,
          unselected: selected !== index && selected !== 0,
        }"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import ImageModal from "@/components/page/ImageModal.vue";

export default defineComponent({
  name: "GalleryComponent",
  components: {
    // ImageModal,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selected = ref(0);
    const images = ref(null);

    function handleClick(index) {
      console.log(index, this.$refs.images[index], props.images[index]);
      this.$refs.images.forEach((image, j) => {
        if (index === j) {
          image.classList.add("selected");
          image.classList.remove("unselected");
        } else {
          image.classList.add("unselected");
          image.classList.remove("selected");
        }
      });
    }

    return {
      props,
      selected,
      handleClick,
      images,
    };
  },
});
</script>

<style lang="scss">
$boxshadow: var(--primary);
.gallery-container {
  position: relative;
  .gallery-component-image-wrapper {
    flex-basis: calc(
      33.33% - 0.6em
    ); // to maintain 3 images per row while including margins
    margin: 0.3em; // to create space between the images
    box-sizing: border-box;
    position: relative;
    padding-bottom: 6em;
    transition: flex-basis 1s ease, padding-bottom 1s ease, filter 1s ease;
    cursor: pointer;

    &.selected {
      flex-basis: calc(80% - 0.6em);
      padding-bottom: 50svh;
      cursor: initial;
      filter: saturate(100%);
      .image {
        background-size: contain;
      }
    }
    &.unselected {
      flex-basis: calc(10% - 0.6em);
      padding-bottom: 50svh;
      filter: saturate(0%);
      .image {
        box-shadow: inset 0px 0px 10px 5px var(--accent);
      }
    }

    .image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: cover;
      background-position: center;
      border-radius: 0.5rem;
      border: 2px dotted var(--primary);
    }
  }
}
</style>
