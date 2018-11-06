<template lang="pug">
.page-admin-create.container
  section.create-post-form
    h2.page-title 포스트 생성
    p 새로운 글을 작성합니다.
    post-form(@submit="onSubmitted")
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/Admin/PostForm'

export default {
  layout: 'admin',
  components: { PostForm },
  head: {
    title: '관리자: 포스트 생성',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '관리자: 포스트 생성 페이지입니다.'
      }
    ]
  },
  methods: {
    onSubmitted(newPost) {
      this.$store.dispatch('createPost', newPost).then(() => {
        this.$notify({
          group: 'admin-noti',
          title: '등록 성공!',
          text: '새 포스트 등록에 성공했습니다.',
          duration: 2000,
          speed: 400
        })
        setTimeout(() => {
          this.$router.push('/admin')
        }, 1000)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

.create-post
  border-bottom: 1px solid rgba(#000, 0.2)
  padding-bottom: 30px

.page-title
  margin-bottom: 0
  font-family: Changa, Sans-Serif
  letter-spacing: -0.03em

.posts
  margin-top: 30px

p
  margin-top: 0
  color: rgba(#000, 0.5)
  font-size: 13px
  letter-spacing: -0.06em
</style>
