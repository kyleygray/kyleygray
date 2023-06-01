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
          <p class="text-3xl font-extralight empty">(Select a skillset...)</p>
        </div>

        <div v-show="activeView === 'webdev'">
          <p class="text-3xl">Web Development &amp; Design</p>
        </div>

        <div v-show="activeView === 'design'">
          <p class="text-3xl">Design &amp; Illustration</p>
        </div>

        <div v-show="activeView === 'audio'">
          <p class="text-3xl">Audio &amp; Music Production</p>
        </div>

        <div v-show="activeView === 'ux'">
          <p class="text-3xl">User Experience Design</p>
        </div>

        <div v-show="activeView === 'os'">
          <p class="text-3xl">Operating Systems</p>
        </div>
      </div>
    </div>
    <div class="skillcontainer">
      <div class="" v-show="activeView === 'default'">
        <p class=""></p>
      </div>

      <div class="" v-show="activeView === 'webdev'">
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
import { defineComponent, ref, provide } from "vue";
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
    provide("viewParent", viewParent);

    const activeView = ref<SkillView>("default");

    const changeView = (view: SkillView) => {
      activeView.value = view;
    };

    return {
      viewParent,
      activeView,
      changeView,
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
    box-shadow: -22px 5px 2px 2px var(--accent);

    & > * {
      width: 100%;
    }

    button {
      padding: 0.5em;
      margin: 0px 10px;
      margin-bottom: 10px;
      border: 1px dotted var(--primary);
      border-radius: 1em;
      min-width: 100px;
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

    div {
      padding: 1em;
      padding-left: 0;
    }
  }

  .skillheader p {
    margin-top: 10px;
    border-left: 5px double var(--primary);
    padding-left: 0.5em;

    &.empty {
      border: 0;
    }
  }
}
</style>
