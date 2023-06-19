<template>
  <div class="modalwrapper">
    <button class="showbtn" @click="showModal = true">Open Modal</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <img :src="image" alt="Modal Image" />
        <button class="closebtn" @click="showModal = false">Close Modal</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "ImageModal",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal,
    };
  },
});
</script>

<style lang="scss" scoped>
.showbtn {
  position: absolute;
  z-index: 50;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  //   align-items: center;
  justify-content: center;
  background: var(--primary);
  z-index: 51;
}

.modal-content {
  background: white;
  padding: 1rem;
}
</style>
