<template>
  <div class="wrap">
    <div class="title">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContainer",
};
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;

  .title {
    border: 1px solid #2c3e50;
    padding: 15px;
  }

  .content {
    margin-top: 20px;
  }
}
</style>
