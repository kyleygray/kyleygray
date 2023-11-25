<template>
  <div class="component-wrap">
    <div class="controls">
      <div v-on:click="nextItem" ref="arrowRight" class="arrow-control arrow-right"></div>
      <div v-on:click="prevItem" ref="arrowLeft" class="arrow-control arrow-left"></div>
    </div>
    <div ref="carouselWrap" class="carousel-wrap">
      <WorkBox
        v-for="(item, index) in experienceList"
        v-show="currentItem === index"
        :key="index"
        :title="item.title"
        :company="item.company"
        :period="item.period"
        :list="item.list"
        :links="item.links"
        :slideRight="slideRight"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WorkBox from "@/components/WorkBox.vue";
import experienceList from "@/services/experienceList.js";

// :style="{ transform: `translateX(${(index % currentItem) * 100 + '%'})` }"

// :class="{
//       'move-right': index % 2 === 0,
//       'move-left': index % 2 !== 0,
//     }"

export default defineComponent({
  name: "ExampleComponent",
  components: {
    WorkBox,
  },
  methods: {
    nextItem() {
      this.slideRight = true;
      this.currentItem =
        this.currentItem === this.listSize - 1 ? 0 : this.currentItem + 1;
    },
    prevItem() {
      this.slideRight = false;
      this.currentItem =
        this.currentItem === 0 ? this.listSize - 1 : this.currentItem - 1;
    },
  },
  setup() {
    const currentItem = ref(0);
    const carouselWrap = ref(null);
    const arrowRight = ref(null);
    const arrowLeft = ref(null);
    const listSize = experienceList.length;
    const slideRight = ref(true);

    return {
      experienceList,
      currentItem,
      carouselWrap,
      arrowRight,
      arrowLeft,
      listSize,
      slideRight,
    };
  },
});
</script>

<style lang="scss" scoped>
.component-wrap {
  display: block;
  position: relative;
  margin: 0 20px;
  width: 100%;
}

.carousel-wrap {
  //   display: flex;
  //   align-items: flex-start;
  //   flex-grow: 1;
  height: 40svh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    height: 50svh;
  }

  @media (max-width: 480px) {
    height: 60svh;
  }

  & > * {
    width: 80%;
    position: absolute;
    margin: 0 auto;
  }
}
.controls {
  position: absolute;
  width: 100%;

  .arrow-control {
    // align-self: center;
    display: block;
    // position: absolute;
    height: 200px;
    border-radius: 0.5em;
    position: relative;
    font-weight: bold;
    font-size: 3em;
    width: 40px;
    background: var(--accent);
    display: flex;
    cursor: pointer;
    user-select: none;

    @media (max-width: 480px) {
      font-size: 2em;
      width: 20px;
    }

    &::before {
      content: "";
      //   width: 40px;
      align-self: center;
      //   margin: 0 auto;
      display: block;
      margin: 0 auto;
      //   position: absolute;
    }
  }

  .arrow-left {
    position: absolute;
    left: 0;
    &::before {
      content: "⏴";
    }
  }
  .arrow-right {
    position: absolute;
    right: 0;
    &::before {
      content: "⏵";
    }
  }
}
</style>
