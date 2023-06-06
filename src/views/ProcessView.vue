<template>
  <div class="view-container" ref="viewParent">
    <div class="skillselect">
      <div class="skillnav">
        <button
          @click="changeView('webdev')"
          :class="{ activebtn: activeView === 'webdev' }"
        >
          webdev
        </button>
        <button
          @click="changeView('design')"
          :class="{ activebtn: activeView === 'design' }"
        >
          design
        </button>
        <button
          @click="changeView('audio')"
          :class="{ activebtn: activeView === 'audio' }"
        >
          audio
        </button>
        <button @click="changeView('ux')" :class="{ activebtn: activeView === 'ux' }">
          ux
        </button>
        <button @click="changeView('os')" :class="{ activebtn: activeView === 'os' }">
          os
        </button>
      </div>
      <div class="skillheader">
        <div v-show="activeView === 'default'">
          <p class="text-2xl p-2 pb-0 font-extralight empty">(Select a skillset...)</p>
        </div>

        <div v-show="activeView === 'webdev'">
          <h1 class="text-2xl p-2 pb-0">Web Development &amp; Design</h1>
        </div>

        <div v-show="activeView === 'design'">
          <h1 class="text-2xl p-2 pb-0">Design &amp; Illustration</h1>
        </div>

        <div v-show="activeView === 'audio'">
          <h1 class="text-2xl p-2 pb-0">Audio &amp; Music Production</h1>
        </div>

        <div v-show="activeView === 'ux'">
          <h1 class="text-2xl p-2 pb-0">User Experience Design &amp; Prototyping</h1>
        </div>

        <div v-show="activeView === 'os'">
          <h1 class="text-2xl p-2 pb-0">Operating Systems</h1>
        </div>
      </div>
    </div>
    <div class="skillcontainer">
      <div class="" v-show="activeView === 'default'">
        <p class=""></p>
      </div>

      <div class="" v-show="activeView === 'webdev'">
        <div class="devicons">
          <i class="devicon-vuejs-plain" data-name="Vue"></i>
          <i class="devicon-angularjs-plain" data-name="Angular"></i>
          <i class="devicon-html5-plain" data-name="HTML"></i>
          <i class="devicon-css3-plain" data-name="CSS"></i>
          <i class="devicon-sass-original" data-name="Sass"></i>
          <i class="devicon-javascript-plain" data-name="JavaScript"></i>
          <i class="devicon-typescript-plain" data-name="TypeScript"></i>
        </div>
        <p class="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, nesciunt, facere
          natus quisquam accusamus iure repellendus, aliquid odio ipsam sit similique
          perspiciatis quasi? Consectetur commodi provident vero labore? Natus vitae qui
          fuga iure mollitia? Voluptatibus, sed. Assumenda nisi totam voluptatem tenetur
          quae, ducimus aut, porro sunt dignissimos iure autem atque. Repellendus
          reiciendis laborum facilis rerum excepturi corrupti commodi hic eius cum dolorum
          veritatis, nesciunt vero consectetur, praesentium doloremque quaerat! Molestiae
          sequi voluptatem vel ab exercitationem error optio eum aut dolores quia. Illum
          deleniti similique fugiat sequi, quod ratione numquam distinctio quo nihil!
          Similique, reiciendis? Impedit non fugiat quam quasi blanditiis?
        </p>
      </div>

      <div class="" v-show="activeView === 'design'">
        <div class="devicons">
          <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
          <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
          <i class="devicon-figma-plain" data-name="Figma"></i>
          <i class="devicon-apple-original" data-name="Procreate"></i>
        </div>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quis corrupti
          unde aliquid quas cum nesciunt provident iure expedita, vitae cumque iusto
          officia aspernatur iste debitis rem qui eveniet minima cupiditate mollitia
          sapiente? Voluptates quasi reprehenderit deserunt nostrum alias officia nihil
          voluptatem dolor, eveniet facilis totam voluptate dolorum temporibus earum ad
          ipsa? Fuga id odit vel dolor magni molestias deserunt sed consectetur at natus
          sint corporis a corrupti consequuntur doloribus iste sapiente quasi veniam, quis
          facilis eos numquam repudiandae. Minus quaerat accusamus magnam libero aliquam
          sint, eius voluptatum in dolorem, voluptatibus officia enim incidunt assumenda,
          non eligendi dolore ea illum!
        </p>
      </div>

      <div class="" v-show="activeView === 'audio'">
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
          blanditiis? Doloribus delectus similique, tempora dolorem quia incidunt,
          voluptatum voluptates amet ullam quibusdam sapiente perferendis! Placeat eveniet
          temporibus asperiores aperiam voluptas molestiae corporis amet blanditiis
          officia eius suscipit ducimus odio explicabo, repellat cupiditate esse quam
          libero nulla? Deserunt ad ullam, error itaque consequatur cum praesentium eaque
          aliquid facilis excepturi illo quas optio temporibus asperiores nostrum eligendi
          animi quasi minima? Qui libero esse nihil nisi sint, porro dolorum. Iste,
          soluta?
        </p>
      </div>

      <div class="" v-show="activeView === 'ux'">
        <div class="devicons">
          <i class="devicon-vuejs-plain" data-name="Vue"></i>
          <i class="devicon-angularjs-plain" data-name="Angular"></i>
          <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
          <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
          <i class="devicon-figma-plain" data-name="Figma"></i>
          <i class="devicon-google-plain" data-name="Google UX"></i>
        </div>
        <p class="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit,
          doloribus quidem corporis nam doloremque voluptatum dicta quis nemo soluta, ab
          ipsum nobis cum, maxime porro architecto vitae! Quia, vel dolore architecto
          soluta quam cumque eaque ex ab eligendi? Necessitatibus cupiditate, asperiores
          illum odio animi ratione aperiam quam? Modi exercitationem eos ad reprehenderit?
          Porro, debitis quod? Eveniet iure nisi natus veniam debitis, facilis vitae
          quidem neque laudantium dolores culpa beatae pariatur sit assumenda accusantium
          voluptates optio rem error. Rerum officia a qui nostrum quaerat tempore quam
          debitis odit natus quidem reiciendis nihil accusamus fugiat amet, possimus
          error? Tempora, amet hic?
        </p>
      </div>

      <div class="" v-show="activeView === 'os'">
        <div class="devicons">
          <i class="devicon-windows8-original" data-name="Windows"></i>
          <i class="devicon-apple-original" data-name="Mac"></i>
          <i class="devicon-linux-plain" data-name="Linux"></i>
          <i class="devicon-digitalocean-plain" data-name="Server Cloud"></i>
          <i class="devicon-bash-plain" data-name="Bash"></i>
          <i class="devicon-gitlab-plain" data-name="Gitlabs"></i>
        </div>
        <p class="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis
          eum vitae velit quis recusandae expedita earum mollitia nemo voluptatibus. Dicta
          ullam distinctio optio aut quibusdam fuga ea porro, id facere sint, doloremque
          nemo ipsam at ipsa iure blanditiis! Perferendis quam commodi facilis ab qui
          facere voluptates at iusto culpa non nesciunt, odio veritatis rerum incidunt
          dolorum omnis ipsam maxime dolore eum aperiam similique alias! Est quaerat nisi
          delectus mollitia voluptatum cum ducimus omnis sapiente facilis officiis
          doloremque assumenda inventore totam, illo fugiat voluptatibus! Rerum sunt fugit
          commodi placeat voluptatem libero error vel magni iure similique! Facilis
          veritatis ab similique?
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch, onMounted } from "vue";
import useStore from "@/services/store.ts";
import AnimatedFX from "@/components/page/AnimatedFX.vue";
import ScrollFX from "@/components/page/ScrollFX.vue";

type SkillView = "default" | "webdev" | "design" | "audio" | "ux" | "os";

export default defineComponent({
  components: {
    // AnimatedFX,
    // ScrollFX,
  },
  setup() {
    const viewParent = ref(null);
    const { state } = useStore();
    provide("viewParent", viewParent);
    const devicons = ref(new Set());

    function addDevicons(el) {
      console.log(el);
      devicons.value.add(el);
    }

    const activeView = ref<SkillView>("default");

    const changeView = (view: SkillView) => {
      activeView.value = view;
    };

    const inverted = ref(false);

    watch(
      () => state.theme,
      (theme) => {
        inverted.value = theme.inverted; // Access `inverted` directly from `newVal`
      },
      { immediate: true } // this makes the watcher fire immediately upon setup
    );

    onMounted(() => {
      console.log(devicons.value);
    });

    return {
      viewParent,
      activeView,
      changeView,
      inverted,
      addDevicons,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  height: 100vh; // to ensure the view-container takes full viewport height
  display: flex;
  flex-direction: column; // to stack skillselect and skillcontainer vertically

  & * {
    transition: background-color 0.5s ease, box-shadow 0.5s ease;
  }

  .devicons {
    font-size: 3em;
    display: flex;
    margin: 0.5em 0;
    flex-wrap: wrap;

    i {
      // $delay-time: 0.3s;

      // @for $i from 1 through 10 {
      //   &:nth-child(#{$i}) {
      //     transition-delay: $delay-time * $i !important;
      //   }
      // }

      margin: 0.1em;
      position: relative;
      display: flex;
      width: object-fit;
      max-width: 50px;
      margin: 0.2em;

      &::after {
        content: attr(data-name);
        display: block;
        text-align: center;
        position: absolute;
        font-size: 0.2em;
        left: 0;
        right: 0;
        bottom: -1.5em;
        font-family: "Inconsolata", monospace;
        font-style: initial;
      }
    }
  }

  .skillselect {
    flex-basis: 10%; // to allocate 10% of the height to skillselect
    display: flex; // to align buttons in a row
    flex-wrap: wrap;
    justify-content: flex-start; // to provide equal space around the buttons
    align-items: center; // to center align the buttons vertically
    background-color: var(--secondary);
    padding: 1em;
    padding-left: 0;
    margin-left: 0;
    box-shadow: -11px 2px 0px 2px var(--accent);
    border-left: 1px dotted var(--primary);
    border-bottom: 1px dotted var(--primary);

    & > * {
      width: 100%;
    }

    button {
      padding: 0.3em;
      margin: 0px 10px;
      margin-bottom: 10px;
      border: 1px dotted var(--primary);
      border-radius: 0.8em;
      min-width: 80px;
      cursor: pointer;
      transition: background-color 0.5s ease;

      &.activebtn {
        border-color: var(--accent);
        background-color: var(--accent);
      }
    }
  }

  .skillcontainer {
    flex-basis: 90%; // to allocate 90% of the height to skillcontainer
    overflow: auto; // to enable scroll if content height exceeds the container height

    & > div {
      padding: 1em;
      padding-left: 0;
    }
  }

  .skillheader p {
    margin-top: 10px;
    // border-left: 5px double var(--primary);
    padding-left: 0.5em;

    &.empty {
      border: 0;
    }
  }

  .icons-enter-active,
  .icons-leave-active {
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    .devicons {
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease;
    }
  }
  .icons-enter-from {
    .devicons {
      opacity: 0;
    }
  }
  .icons-enter-to,
  .icons-leave-from {
    .devicons {
      opacity: 1;
    }
  }
  .icons-leave-to {
    transition-property: opacity;
    transition-duration: 0s;
    transition-timing-function: ease;
    .devicons {
      transition-property: opacity;
      transition-duration: 0s;
      transition-timing-function: ease;
      opacity: 1;
    }
  }
}
</style>
