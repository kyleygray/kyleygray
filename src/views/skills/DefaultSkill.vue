<template>
  <div class="toiletsskill">
    <div>
      <TextFX
        text="I have many skills, some of them are marketable."
        type="fadein"
        speed="20"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextFX from "@/components/page/TextFX.vue";

export default defineComponent({
  name: "DefaultSkill",
  components: {
    TextFX,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.toiletsskill {
  // position: absolute;
  display: flex;
  // background: url("@/assets/toilets.png");
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 5em 4em var(--secondary);
  border-radius: 2em;
  // border: 1px solid black;
  // background-size: 100%;
  background-position: center;
  // opacity: 0.25;
  background-repeat: repeat;
  text-align: center;
  animation: move 15s infinite linear;

  & > * {
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 4em;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    width: 100%;
    // text-shadow: 0px 2px 4px var(--primary);
    color: var(--primary);
  }
}

@keyframes move {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 639px 639px;
  }
}

@media (max-width: 767px) {
  .toilets > * {
    font-size: 3em;
  }
}
</style>
