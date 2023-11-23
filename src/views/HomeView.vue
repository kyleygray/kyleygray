<template>
  <div class="view-container">
    <div class="mytitlecontainer">
      <h1 class="mytitle text-8xl font-bold w-100 text-center p-2">
        <TextFX text="Kyley Gray" type="fadein" speed="20" />
      </h1>
      <h1 class="mydesc text-4xl font-thin w-100 text-center p-2">
        <TextFX text="Designer • Illustrator • Developer" type="fadein" speed="20" />
      </h1>
      <div class="linkwrap">
        <router-link to="/about">About Me</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
    <div class="toilets"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextFX from "@/components/page/TextFX.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    TextFX,
  },
});
</script>

<style lang="scss">
.view-container {
  // margin: 0;
}

.toilets {
  // position: absolute;
  // display: flex;
  background: url("@/assets/toilets.png");
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 5em 4em var(--secondary);
  // border-radius: 2em;
  opacity: 0.7;
  // border: 1px solid black;
  // background-size: 100%;
  background-position: center;
  // opacity: 0.25;
  background-repeat: repeat;
  // text-align: center;
  animation: move 30s infinite linear, blurry 10s infinite linear;

  // & > * {
  //   align-self: center;
  //   justify-self: center;
  //   text-align: center;
  //   font-size: 4em;
  //   font-family: "Rubik", sans-serif;
  //   font-weight: bold;
  //   text-shadow: 0px 2px 4px var(--primary);
  //   color: var(--secondary);
  // }
}

@keyframes move {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: 639px 639px;
  }
}

@keyframes blurry {
  0% {
    filter: blur(0) invert(0);
  }
  25% {
    filter: blur(0) invert(0.4);
  }
  50% {
    filter: blur(20px) invert(0.8);
  }
  75% {
    filter: blur(0) invert(0.4);
  }
  100% {
    filter: blur(0) invert(0);
  }
}

.mytitlecontainer {
  position: absolute;
  top: 50svh;
  transform: translateY(-50%);
  right: 0;
  width: 100%;
  // height: 100svh;
  z-index: 100;
  // border: 2px dotted var(--primary);
  // border-radius: 0.5rem;

  animation: intro 3s forwards ease;

  & * {
    // transition: background-color 0.5s ease;
  }
  .mytitle {
    position: relative;
    width: 100%;
    color: #ff8888;
    // text-shadow: 2px 2px 0px var(--accent);
    // border-radius: 0.5rem 0.5rem 0 0;
    // color: var(--primary);
    // background-color: var(--secondary);
    text-shadow: 0px 0px 0px var(--primary);
    color: rgba(0, 0, 0, 0);
    .fx {
      .fadein {
        animation: blurinout 10s linear infinite;
        // filter: hue-rotate(0deg);
      }
    }
  }

  .mydesc {
    position: relative;
    // border-radius: 0 0 0.5rem 0.5rem;
    width: 100%;
    text-shadow: 0px 0px 0px var(--primary);
    color: rgba(0, 0, 0, 0);
    // background-color: var(--secondary);
    .fx {
      .fadein {
        animation: blurinout 10s linear infinite;
      }
    }
  }

  .linkwrap {
    position: relative;
    display: flex;
    margin: 0 auto;
    margin-top: 2em;
    max-width: 50vw;
    min-width: 10rem;

    a {
      max-width: 40%;
      margin: 0 10px;
      position: relative;
      display: block;
      font-size: 1.5rem;
      text-align: center;
      // border: 1px dotted var(--primary);
      padding: 0.1em;
      border-radius: 0.3em;
      background-color: var(--primary);
      color: var(--secondary);

      &::after {
        content: "▷";
        margin-left: 0.5em;
      }
    }
    animation: delayed 5s forwards ease;
  }

  @keyframes intro {
    0% {
      filter: blur(50px);
    }
    100% {
      filter: blur(0px);
    }
  }

  @keyframes delayed {
    0% {
      opacity: 0;
      filter: blur(20px);
      transform: translateY(-100%);
    }
    60% {
      opacity: 0;
      filter: blur(20px);
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0%);
    }
  }

  @keyframes colorcycle {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @keyframes blurinout {
    0% {
      text-shadow: 0px 0px 0px var(--primary);
    }
    25% {
      text-shadow: 0px 0px 0px var(--primary);
    }
    50% {
      opacity: 0.5;
      text-shadow: 0px 0px 20px var(--primary);
    }
    75% {
      text-shadow: 0px 0px 0px var(--primary);
    }
    100% {
      text-shadow: 0px 0px 0px var(--primary);
    }
  }
}
</style>
