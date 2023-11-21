<template>
  <div class="resume-container">
    <a href="@/assets/KyleyGrayResume.pdf" download class="resume-btn">
      Download My Resume
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResumeBtn",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.resume-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.resume-btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: var(--secondary);
  background-color: var(--primary);
  text-decoration: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
}
</style>
