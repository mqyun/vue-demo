<template>
  <div
    @click="onClick"
    :class="{
      'list-item': true,
      finished: info.finished,
    }"
  >
    {{ info.name }}
  </div>
</template>

<script>
export default {
  name: "ListItem",

  props: ["info"],

  methods: {
    onClick() {
      this.$emit("finish", this.info.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  font-weight: 600;
  margin-bottom: 10px;
  padding: 20px;
  border: 1px solid #2c3e50;
  cursor: pointer;

  &.finished {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
