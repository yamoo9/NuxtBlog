<template lang="pug">
.page-admin-create.container
  section.create-post-form
    h2.page-title 포스트 생성
    p 새로운 글을 작성합니다.
    post-form
</template>

<script>
import PostForm from '@/components/Admin/PostForm'

export default {
  components: {
    PostForm
  }
}
</script>
