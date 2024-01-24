<template>
  <div class="component-wrap">
    <div class="scroll-dots">
      <div
        v-on:click="itemIndex(index)"
        v-for="(num, index) in listSize"
        :key="index"
        :class="{ 'scroll-dot': true, 'active-dot': index === currentItem }"
      ></div>
    </div>
    <div class="controls">
      <div
        v-on:click="handleClickRight"
        ref="arrowRight"
        class="arrow-control arrow-right"
      ></div>
      <div
        v-on:click="handleClickLeft"
        ref="arrowLeft"
        class="arrow-control arrow-left"
      ></div>
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
import { defineComponent, ref, onMounted } from "vue";
import WorkBox from "@/components/WorkBox.vue";
import experienceList from "@/services/experienceList.js";

export default defineComponent({
  name: "ExampleComponent",
  components: {
    WorkBox,
  },
  methods: {
    handleClickRight() {
      this.nextItem();
      clearInterval(this.interval);
    },
    handleClickLeft() {
      this.prevItem();
      clearInterval(this.interval);
    },
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
    itemIndex(index) {
      this.slideRight = index > this.currentItem ? true : false;
      this.currentItem = index;
      clearInterval(this.interval);
    },
  },
  setup() {
    const currentItem = ref(0);
    const carouselWrap = ref(null);
    const arrowRight = ref(null);
    const arrowLeft = ref(null);
    const listSize = experienceList.length;
    const slideRight = ref(true);
    const interval = ref(null);

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
  mounted() {
    this.interval = setInterval(() => {
      this.nextItem();
    }, 3000);
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
  height: 35svh;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    height: 40svh;
  }

  @media (max-width: 480px) {
    height: 50svh;
  }

  & > * {
    width: 80%;
    position: absolute;
    margin: 0 auto;
  }
}
.scroll-dots {
  display: flex;
  justify-content: center;
  .scroll-dot {
    font-size: 1.5em;
    margin: 0.3em;
    position: relative;
    user-select: none;
    cursor: pointer;
    color: var(--primary);
    height: 0.5em;
    width: 0.5em;
    border-radius: 1em;
    background-color: var(--secondary);
    box-shadow: 0px 0px 0px 2px var(--primary);

    transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;

    &.active-dot {
      box-shadow: 0px 0px 0px 0px var(--primary);
      background-color: var(--primary);
      transform: translateY(-10px);
      // &::before {
      //   text-shadow: 0px 0px 0px var(--primary);
      //   color: var(--primary);
      //   content: "▼";
      //   position: absolute;
      //   display: block;
      //   width: 20px;
      //   height: 20px;
      //   top: -20px;
      // }
    }
  }
}
.numbers {
  text-align: center;
  font-size: 1.2em;
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
