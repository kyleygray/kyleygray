<template>
  <div class="view-container">
    <h1 class="text-4xl py-10">Work Experience</h1>
    <article class="project">
      <div class="info">
        <h1 class="title text-2xl">Full Stack Web Developer ➡ Boeing</h1>
        <h2 class="period text-xl">2020 - 2022</h2>
        <div class="content">
          <div class="image-wrap">
            <img src="https://placehold.it/200x200" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis sapiente
            optio voluptas in rem nam cumque consequatur, eligendi reprehenderit pariatur
            alias saepe harum quas obcaecati libero. Blanditiis assumenda esse impedit
            magni quidem saepe praesentium at quaerat obcaecati soluta iure dolorem, sunt,
            in harum officia, nihil est itaque dolores suscipit. Unde odio, voluptas nihil
            sed animi nobis dignissimos distinctio ipsum quo exercitationem! Ex aperiam
            officia facilis qui error quis nemo expedita vero? Nesciunt eligendi illo
            doloremque officiis quia aut deserunt voluptatibus assumenda ut porro
            molestiae odio velit possimus ipsa, a harum error ab cupiditate nobis at
            voluptas cum! Debitis, excepturi?
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  .project {
    .info {
      .title,
      .period {
        width: 100%;
      }

      .content {
        display: flex;
        flex-direction: row;

        img {
          flex-basis: 30%;
          width: 100%;
          height: auto;
          object-fit: cover;
          max-height: 200px;
        }

        p {
          flex-basis: 70%;
          padding-left: 20px;
        }

        @media (max-width: 767px) {
          flex-direction: column;

          img {
            width: 100%;
            height: auto;
            max-height: 200px;
            flex-basis: auto;
          }

          p {
            padding-left: 0;
            flex-basis: auto;
          }
        }
      }
    }
  }
}
</style>
