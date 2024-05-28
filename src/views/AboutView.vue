<template>
  <PageContainer>
    <template v-slot:header>
      <div>header view</div>
    </template>
    <div v-html="html"></div>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/PageContainer.vue";

export default {
  components: { PageContainer },

  data() {
    return {
      html: '<div style="color: red;">hello</div>',
    };
  },

  mounted() {
    console.log("mounted");
  },
};
</script>
