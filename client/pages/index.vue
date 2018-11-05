<template lang="pug">
.page-home
  post-list(:posts="loadedPosts")
</template>


<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: { PostList },
  head: {
    title: '홈',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '홈 페이지입니다.'
      }
    ]
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
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
