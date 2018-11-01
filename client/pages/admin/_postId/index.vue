<template lang="pug">
.page-admin-post.container
  section.update-form
    h2.page-title 포스트 수정
    p 작성된 글을 수정합니다.
    post-form(:post="loadedPost")
</template>

<script>
import PostForm from '@/components/Admin/PostForm'
export default {
  layout: 'admin',
  components: { PostForm },
  data() {
    return {
      loadedPost: {
        title: '포스트 타이틀',
        author: '작성자',
        thumbnail: '썸네일 URL',
        content: '포스트 콘텐츠'
      }
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
