<template lang="pug">
form(@submit.prevent="onSave")
  ui-input(uniqueId="author", v-model="editedPost.author") 작성자
  ui-input(uniqueId="title", v-model="editedPost.title") 제목
  ui-input(uniqueId="thumbnail", v-model="editedPost.thumbnail") 썸네일 이미지 링크
  ui-input(controlType="textarea", uniqueId="content", v-model="editedPost.content") 콘텐츠
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
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: ''
          }
    }
  },
  methods: {
    onSave() {
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

form
  margin-bottom: 30px

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
