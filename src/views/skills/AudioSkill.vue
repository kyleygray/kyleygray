<template>
  <div>
    <div class="devicons">
      <i data-name="Reason">
        <transition name="fade">
          <img v-if="!inverted" src="@/assets/devicons/Reason_Studios.svg" />
        </transition>
        <transition name="fade">
          <img v-if="inverted" src="@/assets/devicons/Reason_Studios_i.svg" />
        </transition>
      </i>
      <i class="devicon-apple-original" data-name="Logic"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="12" skillLevel="expert" />

      <div class="token-container">
        <SkillToken>Reason</SkillToken>
        <SkillToken>Logic</SkillToken>
        <SkillToken>Ableton Live</SkillToken>
        <SkillToken>Renoise</SkillToken>
        <!-- <SkillToken accent>I ♥ Music</SkillToken> -->
        <SkillToken>Electronic/IDM</SkillToken>
        <SkillToken>Hardcore</SkillToken>
        <SkillToken>Melodic/Minimal Techno</SkillToken>
        <SkillToken>Sound Design</SkillToken>
        <SkillToken>Mixing</SkillToken>
        <!-- <SkillToken accent>Dance Dance Revolution</SkillToken> -->
        <SkillToken>Mastering</SkillToken>
        <SkillToken>Audio Sample Editing</SkillToken>
        <SkillToken>Original Composition</SkillToken>
        <!-- <SkillToken accent>Producing since 2004</SkillToken> -->
        <SkillToken>Arrangement</SkillToken>
        <SkillToken>Film and Interactive Media</SkillToken>
        <SkillToken highlight
          ><a href="https://cubeshark.bandcamp.com" target="_blank"
            >Cubeshark on Bandcamp...</a
          ></SkillToken
        >
      </div>
      <p class="my-5 text-xl">
        I have been producing a wide range of electronic music styles since 2004. I have
        obtained a certification in Sound Design with Reason from the Berklee College of
        Music. I have released 2 albums under the alias "Cubeshark". Overall, I have been
        doing this for a long time and I really enjoy it. Below are some select samples of
        music produced in the last decade.
      </p>
      <div class="audiowrapper">
        <AudioPlayer :file="audio1" />
        <AudioPlayer :file="audio2" />
      </div>
      <div class="audiowrapper">
        <AudioPlayer :file="audio3" />
        <AudioPlayer :file="audio4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useStore from "@/services/store.ts";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";
import AudioPlayer from "@/components/page/AudioPlayer.vue";
import SkillToken from "@/components/page/SkillToken.vue";

import audio1 from "@/assets/audio/audio1.mp3";
import audio2 from "@/assets/audio/audio2.mp3";
import audio3 from "@/assets/audio/audio3.mp3";
import audio4 from "@/assets/audio/audio4.mp3";

export default defineComponent({
  name: "AudioSkill",
  components: {
    SkillStats,
    AudioPlayer,
    SkillToken,
  },
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);

    return {
      inverted,
      audio1,
      audio2,
      audio3,
      audio4,
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  // position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  position: absolute;
  opacity: 0;
}

.audiowrapper {
  display: flex;
  flex-wrap: 1;
  width: 100%;

  & > * {
    margin-right: 15px;
    margin-bottom: 7px;
    margin-top: 7px;
    flex-basis: 50%;
  }
}
</style>
