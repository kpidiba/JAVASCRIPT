<template>
  <div class="post-list">
    <h2>This is post list</h2>
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
      <!-- <h3>{{ post.title }}</h3> -->
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from "./SinglePost.vue";

export default {
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
    onMounted(() => {
      console.log("component is mounted");
    });
    onUnmounted(() => {
      console.log("component is unmounted");
    });
    onUpdated(() => {
      console.log("component is updated");
    });
  },
  components: { SinglePost },
};
</script>

<style>
</style>