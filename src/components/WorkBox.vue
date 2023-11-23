<template>
  <article class="project">
    <div class="info">
      <div class="title">
        <h1>{{props.title}}</h1>
      </div>
      <div class="company">
        <h1>@ {{props.company}}</h1>
        <h2 class="period">{{props.period}}</h2>
      </div>
      <div class="content">
        <div class="skilllinks">
          <router-link v-for="(link, index) in props.links" :key="index" :to='"/skills/" + link'>{{link}}</router-link>
          <!-- <router-link to="/skills/webdev">webdev</router-link>
          <router-link to="/skills/ux">ux</router-link>
          <router-link to="/skills/design">design</router-link> -->
        </div>
        <p>
          <ul class="content-list">
            <li v-for="(item, index) in props.list" :key="index">{{item}}</li>
            <!-- <li>UX consultant for large national clients.</li>
            <li>Designer and prototyper in Angular.</li>
            <li>Wireframes, presentations, reports, interviews.</li>
            <li>Highly-collaborative workplace, clear communication with team members.</li> -->
          </ul>
        </p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkBox",
  props: {
    title: {
      type: String,
      required: true,
      default: "...",
    },
    company: {
      type: String,
      required: true,
      default: "...",
    },
    period: {
      type: String,
      required: true,
      default: "...",
    },
    links: {
      type: Array,
      required: false,
    },
    list: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
  .project {
      width: calc(50% - 1em);
      margin: 0.5em;
      // border-right: 1px dotted var(--primary);
      // border-bottom: 1px dotted var(--primary);
      // box-shadow: 10px 10px 0px 0px var(--accent);
      // transition: background-color 0.5s ease, color 0.5s ease;
      border-radius: 0 1em 1em 0;
      // padding: 1em;
      &.move-left {
        margin-right: calc(50% - 1em);
      }

      &.move-right {
        margin-left: calc(50% - 1em);
      }

      @media (max-width: 767px) {
        width: 100%;
        &.move-left {
        margin-right: calc(30% - 1em);
      }

      &.move-right {
        margin-left: calc(30% - 1em);
      }
      }


      .info {
        & > * {
          margin-left: 1em;
          margin-right: 1em;
          // transition: background-color 0.5s ease, color 0.5s ease;
        }

        .title,
        .company {
          font-weight: 500;
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
          font-weight: 300;
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
          font-size: 0.9em;
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

          .skilllinks {
            margin-top: 20px;
            a {
              margin: 0px 5px;
              border: 1px dotted var(--primary);
              padding: 0.5em;
              border-radius: 0.5em;
              background-color: var(--primary);
              color: var(--secondary);
              &:nth-child(1) {
                margin-left: 0px;
              }
            }
          }

          p {
            // flex-basis: 70%;
            padding: 1em;
            padding-left: 0;
            
            ul.content-list {

              li {
                border-bottom: 1px solid var(--accent);
              }
            }
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
</style>
