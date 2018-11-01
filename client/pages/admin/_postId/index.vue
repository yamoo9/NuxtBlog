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
