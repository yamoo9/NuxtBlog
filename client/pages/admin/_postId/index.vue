<template lang="pug">
.page-admin-post.container
  section.update-form
    h2.page-title 포스트 수정
    p 작성된 글을 수정합니다.
    post-form(:post="loadedPost", @submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/Admin/PostForm'
export default {
  layout: 'admin',
  name: 'SinglePost',
  components: { PostForm },
  computed: {
    loadedPost() {
      const id = this.$route.params.postId
      return this.$store.getters.loadedPosts.find(
        post => post.title.replace(/\?/, '') === id
      )
    }
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch('updatePost', editedPost)
        .then(res => this.$router.push('/admin'))
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

.page-title
  margin-bottom: 0
  font-family: Changa, Sans-Serif
  letter-spacing: -0.03em

p
  margin-top: 0
  color: rgba(#000, 0.5)
  font-size: 13px
  letter-spacing: -0.06em
</style>
