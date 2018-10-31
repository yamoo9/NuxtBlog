<template lang="pug">
.page-admin-create.container
  section.create-post-form
    h2.page-title 포스트 생성
    p 새로운 글을 작성합니다.
    form(@submit.prevent="onSave")
      ui-input(uniqueId="author", v-model="post.author") 작성자
      ui-input(uniqueId="title", v-model="post.title") 제목
      ui-input(uniqueId="thumbnail", v-model="post.thumbnail") 썸네일 이미지 링크
      ui-input(controlType="textarea", uniqueId="content", v-model="post.content") 콘텐츠
      ui-button 저장
      ui-button(
        type="button",
        style="margin-left: 10px",
        styles="cancel",
        @click="onCancel"
      ) 취소
</template>

<script>
import UiButton from '@/components/UI/UiButton'
import UiInput from '@/components/UI/UiInput'

export default {
  components: {
    UiButton,
    UiInput
  },
  data() {
    return {
      post: {
        author: '',
        title: '',
        thumbnail: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      // 글 저장
      console.log(this.post)
    },
    onCancel() {
      this.$router.push('/admin')
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
