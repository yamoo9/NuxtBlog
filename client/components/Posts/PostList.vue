<template lang="pug">
section.post-list
  post-preview(
    v-for="post in posts",
    :key="post.id",
    :id="post.id",
    :isAdmin="isAdmin",
    :title="post.title",
    :thumbnail="post.thumbnail",
    :content="post.content"
  )
</template>

<script>
import PostPreview from './PostPreview'

export default {
  components: { PostPreview },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.post-list
  display: flex
  justify-content: flex-start
  align-items: flex-start
  flex-wrap: wrap
  padding: 20px
</style>
