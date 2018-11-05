<template lang="pug">
.page-admin-auth.container
  form.auth-form
    ui-input(
      type="email",
      uniqueId="email") 이메일 주소
    ui-input(
      type="password",
      uniqueId="password") 비밀번호
    .button-group(role="group")
      ui-button(style="margin-right: 10px")
        | {{ isLogin ? '로그인' : '회원가입' }}
      ui-button(
        type="button",
        styles="inverted",
        @click="isLogin = !isLogin"
      )
        | {{ '"' + (isLogin ? '회원가입' : '로그인') + '" 폼으로 변경' }}
</template>

<script>
import UiInput from '@/components/UI/UiInput'
import UiButton from '@/components/UI/UiButton'

export default {
  layout: 'admin',
  components: { UiInput, UiButton },
  head: {
    title: '인증 - NUXT BLOG',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '인증 페이지입니다.'
      }
    ]
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang="sass" scoped>
.auth-form
  width: 80%
  margin:
    left: auto
    right: auto

.button-group
  margin-top: 30px
</style>
