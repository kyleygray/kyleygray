<template>
  <div>
    <div class="devicons">
      <i data-name="Reason">
        <img v-if="!inverted" src="@/assets/devicons/Reason_Studios.svg" />
        <img v-if="inverted" src="@/assets/devicons/Reason_Studios_i.svg" />
      </i>
      <i class="devicon-apple-original" data-name="Logic"></i>
    </div>
    <p class="text-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ratione ipsa
      laudantium sequi deserunt officia quia debitis accusamus corporis esse obcaecati
      mollitia aliquam impedit quo perspiciatis quidem fuga voluptate quasi, odio
      blanditiis? Doloribus delectus similique, tempora dolorem quia incidunt, voluptatum
      voluptates amet ullam quibusdam sapiente perferendis! Placeat eveniet temporibus
      asperiores aperiam voluptas molestiae corporis amet blanditiis officia eius suscipit
      ducimus odio explicabo, repellat cupiditate esse quam libero nulla? Deserunt ad
      ullam, error itaque consequatur cum praesentium eaque aliquid facilis excepturi illo
      quas optio temporibus asperiores nostrum eligendi animi quasi minima? Qui libero
      esse nihil nisi sint, porro dolorum. Iste, soluta?
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useStore from "@/services/store.ts";

export default defineComponent({
  name: "AudioSkill",
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);
    return {
      inverted,
    };
  },
});
</script>

<style lang="scss" scoped></style>
