<template>
  <div>
    <template v-for="item in list">
      <div :key="item.id">{{ item.name }}</div>
    </template>
  </div>
</template>

<script>
import request from "@/services/request";

export default {
  name: "ApiView",

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.getList();
  },

  methods: {
    async getList() {
      const res = await request.post("/miniprogram/t-mini-app/list", {
        pageNum: 1,
        pageSize: 20,
      });
      if (res.status === 200) {
        this.list = res.list;
        console.log("dwd");
      }
    },
  },
};
</script>
