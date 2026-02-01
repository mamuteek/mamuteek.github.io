<template>
  <div class="section-container">
    <div style="margin-bottom: 42px;">
      Some examples of my work (listing published projects only).
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>

<style scoped>
.section-container {
  padding-bottom: 60px;
  min-height: 400px;
}
</style>
