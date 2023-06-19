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
        class="image"
        :style="{ backgroundImage: `url(${image})` }"
      >
        <div class="imagepreload"></div>
      </div>
      <!-- <div
        @click="handleClick(index, image)"
        class="image"
        :style="{ backgroundImage: `url()` }"
      > -->
      <!-- <div class="imagepreload"></div> -->
      <!-- </div> -->
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
    const selected = ref(-1);
    const images = ref(null);

    function handleClick(index) {
      if (index === selected.value) {
        selected.value = -1;
      } else {
        selected.value = index;
      }
      console.log(index, this.$refs.images[index], props.images[index]);
      this.$refs.images.forEach((image, j) => {
        if (index === j && selected.value !== -1) {
          image.classList.add("selected");
          image.classList.remove("unselected");
        } else if (selected.value !== -1) {
          image.classList.add("unselected");
          image.classList.remove("selected");
        } else {
          image.classList.remove("unselected");
          image.classList.remove("selected");
        }
      });
    }

    return {
      props,
      selected,
      handleClick,
      // eslint-disable-next-line vue/no-dupe-keys
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
    transition: flex-basis 0.5s ease, padding-bottom 0.5s ease;
    cursor: pointer;

    &.selected {
      flex-basis: calc(80% - 0.6em);
      padding-bottom: 50svh;
      // filter: saturate(100%);
      .image {
        background-size: contain;
      }
    }
    &.unselected {
      flex-basis: calc(10% - 0.6em);
      padding-bottom: 50svh;
      // filter: saturate(0%);
      .image {
        box-shadow: inset 0px 0px 50px 10px var(--primary);
        .imagepreload::after {
          content: "";
        }
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

      .imagepreload {
        position: absolute;
        background-color: var(--accent);
        width: 100%;
        height: 100%;
        z-index: -1;
        display: flex;

        &::after {
          font-family: monospace;
          content: "slow internet...";
          align-self: center;
          text-align: center;
          width: 100%;
          font-size: 1em;
        }
      }
    }
  }
}
</style>
