<template>
  <div class="prop">
    <h1>Prop</h1>
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost" >Click</button>
    <button @click="posts.pop()">delete</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Prop",
  setup() {
    const posts = ref([
      {
        title: "Welcome to the blog",
        body: "Bienvenue au welcome body",
        id: 1,
      },
      {
        title: "Top 5 css blog are",
        body: "loremSit duis ex excepteur exercitation pariatur qui sunt enim ut. Ut enim tempor ea tempor officia elit proident qui nulla nostrud ea mollit magna nostrud. Excepteur aliqua consectetur mollit consequat. Mollit non reprehenderit aute id ullamco quis esse excepteur deserunt culpa do. Non anim elit velit dolor qui nisi. Reprehenderit cupidatat eiusmod sit elit.",
        id: 2,
      },
    ]);

    const showPost = ref(true);

    return { posts,showPost };
  },
  components: { PostList },
};
</script>

<style>
</style>