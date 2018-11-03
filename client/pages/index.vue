<template lang="pug">
.page-home
  post-list(:posts="loadedPosts")
</template>


<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: { PostList },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // created() {
  //   this.$store.commit('setPosts', [
  //     {
  //       title: 'test',
  //       author: 'test',
  //       content: 'test',
  //       thumbnail: 'test'
  //     }
  //   ])
  // }
}
</script>


<style lang="sass" scoped>
@import "~assets/styles/config"

a
  text-decoration: none
  color: darken($color, 20%)
  transition: all 0.4s ease
  &:hover .post-content,
  &:active .post-content
    background-color: rgba($color, 0.26)

@media (min-width: 768px)
  .intro h1
    font-size: 2rem
</style>
