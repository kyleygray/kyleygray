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
      <!-- <input
        type="range"
        min="0"
        :max="duration"
        v-model="currentTime"
        @input="changeTime"
        class="w-full audio-bar"
      /> -->
      <div class="audio-bar" @click="changeTime" ref="audioBar">
        <span ref="audioTracker"></span>
      </div>
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
    const audioBar = ref(null);
    const audioTracker = ref(null);

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
      audioTracker.value.style.width =
        (e.target.currentTime / e.target.duration) * 100 + "%";
    };

    const changeTime = (e) => {
      console.log(e.layerX, e.explicitOriginalTarget);
      audioRef.value.currentTime =
        duration.value * (e.layerX / e.explicitOriginalTarget.clientWidth);
    };

    const resetPlayer = () => {
      currentTime.value = 0;
      isPlaying.value = false;
      audioTracker.value.style.width = "0%";
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
      audioBar,
      audioTracker,
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
      position: relative;
      width: 95%;
      margin-right: 5%;
      display: block;
      height: 0.4em;
      background-color: var(--accent);
      border-radius: 0;
      cursor: pointer;

      span {
        pointer-events: none;
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        transition: width 0.2s linear;
        height: 0.4em;
        background-color: var(--primary);
        display: flex;

        &::after {
          content: "";
          position: absolute;
          right: 0;
          align-self: center;
          // justify-self: flex-start;
          width: 0.3em;
          box-shadow: 0px 0px 10px 5px var(--secondary);
          height: 1em;
          border-radius: 0.5em;
          background-color: var(--secondary);
        }
      }
    }
  }
}
</style>
