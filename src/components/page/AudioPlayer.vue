<template>
  <div class="audio-player">
    <audio
      ref="audioRef"
      :src="file"
      @timeupdate="updateTime"
      @ended="resetPlayer"
    ></audio>
    <div class="controls">
      <button class="focus:outline-none" @click="togglePlay">
        {{ isPlaying ? "◼" : "▶" }}
      </button>
      <input
        type="range"
        min="0"
        :max="duration"
        v-model="currentTime"
        @input="changeTime"
        class="w-full audio-bar"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "AudioPlayer",
  props: {
    file: {
      type: String,
      required: true,
    },
  },
  setup() {
    const audioRef = ref(null);
    const isPlaying = ref(false);
    const duration = ref(0);
    const currentTime = ref(0);

    const togglePlay = () => {
      if (isPlaying.value) {
        audioRef.value.pause();
      } else {
        audioRef.value.play();
      }
      isPlaying.value = !isPlaying.value;
    };

    const updateTime = (e) => {
      currentTime.value = e.target.currentTime;
      duration.value = e.target.duration;
    };

    const changeTime = () => {
      audioRef.value.currentTime = currentTime.value;
    };

    const resetPlayer = () => {
      currentTime.value = 0;
      isPlaying.value = false;
    };

    watch(isPlaying, (newVal) => {
      if (!newVal) {
        audioRef.value.pause();
      } else {
        audioRef.value.play();
      }
    });

    return {
      audioRef,
      isPlaying,
      togglePlay,
      updateTime,
      changeTime,
      resetPlayer,
      duration,
      currentTime,
    };
  },
});
</script>

<style lang="scss" scoped>
.audio-player {
  width: 100%;
  //   background-color: var(--accent);
  padding: 0.3em;
  border-radius: 0.25em;
  border: 1px dotted var(--primary);
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0.25em 0.5em;
      //   border: 1px solid var(--primary);
      background-color: var(--secondary);
      color: var(--primary);
      border-radius: 0.25em;
      margin-right: 10px;
    }

    .audio-bar {
    }
  }
}
</style>
