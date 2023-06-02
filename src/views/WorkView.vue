<template>
  <div class="view-container">
    <h1 class="text-3xl py-5">Career Experience</h1>
    <div class="project-container">
      <article class="project">
        <div class="info">
          <div class="title">
            <h1>UX Designer/Protyper</h1>
          </div>
          <div class="company">
            <h1>@ BP3 Global</h1>
            <h2 class="period">2020 - 2022</h2>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
              sapiente optio voluptas in rem nam cumque consequatur, eligendi
              reprehenderit pariatur alias saepe harum quas obcaecati libero. Blanditiis
              assumenda esse impedit magni quidem saepe praesentium at quaerat obcaecati
              soluta iure dolorem, sunt, in harum officia, nihil est itaque dolores
              suscipit. Unde odio, voluptas nihil sed animi nobis dignissimos distinctio
              ipsum quo exercitationem!
            </p>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="info">
          <div class="title">
            <h1>Full Stack Developer</h1>
          </div>
          <div class="company">
            <h1>@ Boeing</h1>
            <h2 class="period">2020 - 2022</h2>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
              sapiente optio voluptas in rem nam cumque consequatur, eligendi
              reprehenderit pariatur alias saepe harum quas obcaecati libero. Blanditiis
              assumenda esse impedit magni quidem saepe praesentium at quaerat obcaecati
              soluta iure dolorem, sunt, in harum officia, nihil est itaque dolores
              suscipit. Unde odio, voluptas nihil sed animi nobis dignissimos distinctio
              ipsum quo exercitationem!
            </p>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="info">
          <div class="title">
            <h1>Automation Tester</h1>
          </div>
          <div class="company">
            <h1>@ WorkBoard</h1>
            <h2 class="period">2020 - 2022</h2>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
              sapiente optio voluptas in rem nam cumque consequatur, eligendi
              reprehenderit pariatur alias saepe harum quas obcaecati libero. Blanditiis
              assumenda esse impedit magni quidem saepe praesentium at quaerat obcaecati
              soluta iure dolorem, sunt, in harum officia, nihil est itaque dolores
              suscipit. Unde odio, voluptas nihil sed animi nobis dignissimos distinctio
              ipsum quo exercitationem!
            </p>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="info">
          <div class="title">
            <h1>C.S. Teacher &amp; Mentor</h1>
          </div>
          <div class="company">
            <h1>@ King's High School</h1>
            <h2 class="period"></h2>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
              sapiente optio voluptas in rem nam cumque consequatur, eligendi
              reprehenderit pariatur alias saepe harum quas obcaecati libero. Blanditiis
              assumenda esse impedit magni quidem saepe praesentium at quaerat obcaecati
              soluta iure dolorem, sunt, in harum officia, nihil est itaque dolores
              suscipit. Unde odio, voluptas nihil sed animi nobis dignissimos distinctio
              ipsum quo exercitationem!
            </p>
          </div>
        </div>
      </article>

      <article class="project">
        <div class="info">
          <div class="title">
            <h1>Freelance Developer</h1>
          </div>
          <div class="company">
            <h1>@ Self-Employed</h1>
            <h2 class="period">2020 - 2022</h2>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos debitis
              sapiente optio voluptas in rem nam cumque consequatur, eligendi
              reprehenderit pariatur alias saepe harum quas obcaecati libero. Blanditiis
              assumenda esse impedit magni quidem saepe praesentium at quaerat obcaecati
              soluta iure dolorem, sunt, in harum officia, nihil est itaque dolores
              suscipit. Unde odio, voluptas nihil sed animi nobis dignissimos distinctio
              ipsum quo exercitationem!
            </p>
          </div>
        </div>
      </article>
    </div>
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
  .project-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .project {
      width: calc(50% - 1em);
      margin: 0.5em;
      // border-right: 1px dotted var(--primary);
      // border-bottom: 1px dotted var(--primary);
      // box-shadow: 10px 10px 0px 0px var(--accent);
      transition: background-color 0.5s ease, color 0.5s ease;
      border-radius: 0 1em 1em 0;
      // padding: 1em;

      @media (max-width: 767px) {
        width: 100%;
      }

      .info {
        & > * {
          margin-left: 1em;
          margin-right: 1em;
          transition: background-color 0.5s ease, color 0.5s ease;
        }

        .title,
        .company {
          font-weight: bold;
        }

        .title {
          width: 100%;
          margin: 0;
          h1 {
            border-radius: 0 1em 0 0;
            padding: 0.1em 0.3em;
            font-size: 1.2em;
            color: var(--primary);
            background-color: var(--accent);
            transition: background-color 0.5s ease, color 0.5s ease;
          }
        }

        .company {
          margin: 0;
          padding: 0 0.3em;
          background-color: var(--accent);
          color: var(--primary);
          position: relative;

          h1 {
            display: inline-block;
            font-size: 1em;
            font-weight: normal;
          }
          h2 {
            position: absolute;
            right: 10px;
            display: inline-block;
            font-size: 0.8em;
            font-weight: normal;
          }
        }

        .content {
          font-size: 0.8em;
          margin-left: 0.3em;
          // display: flex;
          // flex-direction: row;

          // img {
          //   flex-basis: 30%;
          //   width: 100%;
          //   height: auto;
          //   object-fit: cover;
          //   max-height: 200px;
          // }

          p {
            // flex-basis: 70%;
            padding: 1em;
            padding-left: 0;
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
}
</style>
