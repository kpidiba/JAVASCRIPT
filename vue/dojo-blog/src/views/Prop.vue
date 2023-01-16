<template>
  <div class="prop">
    <h1>Prop</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import {ref} from 'vue'
import PostList from "../components/PostList.vue"

export default {
    name: 'Prop',
    setup(){
        const posts = ref([
            {title:'Welcome to the blog',body:'Lorem ipsum',id:1},
            {title:'Top 5 css blog are',body:'Lorem ipsum',id:2}

    ])

        return {posts}
    },
    components: {PostList}
}
</script>

<style>

</style>