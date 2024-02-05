<script lang="ts" setup>
const emits = defineEmits(['back-click', 'menu-click'])
</script>

<template>
  <div class="func-list">
    <button class="func-btn btn-menu" @click="emits('menu-click')">
      <img src="../assets/btn-menu.png" alt="" />
    </button>
    <button class="func-btn btn-back" @click="emits('back-click')">
      <img src="../assets/btn-back.png" alt="" />
    </button>
  </div>
</template>

<style lang="less" scoped>
.func-list {
  position: absolute;
  left: 20%;
  top: 20px;
  display: flex;
  align-items: center;
  .func-btn {
    height: 30px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
