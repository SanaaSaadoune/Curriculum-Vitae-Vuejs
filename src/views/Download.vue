<template>
  <div>
    <curriculumVitae></curriculumVitae>

    <button
      style="background-color: blue; color:white; margin-left:8px"
      @click="generateReport"
    >
      download now
    </button>
  </div>
</template>

<script>
import curriculumVitae from "@/views/Curriculum_Vitae.vue";
import VueHtml2pdf from "vue-html2pdf";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    curriculumVitae,
    VueHtml2pdf,
  },
  methods: {
    generateReport() {
      print();
    },
  },
};
</script>

<style scoped></style>
