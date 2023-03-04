<template>
  <div>
    <p>{{ snippet }}</p>
    <br /><br />
  </div>
</template>

<script >
import { computed, onMounted, onUnmounted, onUpdated } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    })
    
    return {snippet}
  },
};
</script>

<style lang="scss" scoped>
</style>