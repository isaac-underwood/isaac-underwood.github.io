<template>
  <canvas id="animatedBackground"></canvas>
</template>

<script lang="ts">
import animateBackground from "@/animation/background";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Background",
  setup() {
    const bdIdName = "animatedBackground";

    onMounted(() => {
      animateBackground(bdIdName);
    });
  },
});
</script>

<style lang="less">
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
