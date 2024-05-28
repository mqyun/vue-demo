<template>
  <div>
    <el-button type="primary">默认按钮</el-button>
    <template v-for="item in list">
      <ListItem :key="item.id" :info="item" @finish="finish"></ListItem>
    </template>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  name: "HomeView",

  components: {
    ListItem,
  },

  data() {
    return {
      list: Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        name: `待办事项-${i + 1}`,
        finished: 0,
      })),
    };
  },

  methods: {
    finish(id) {
      const index = this.list.findIndex((item) => item.id === id);
      this.list[index].finished = 1;
    },
  },
};
</script>
