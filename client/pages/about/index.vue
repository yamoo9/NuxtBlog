<template lang="pug">
.page-about.container
  h1.page-title About
  p 블로그 서비스 소개
</template>

<script>
export default {
  head: {
    title: '서비스 소개',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '서비스 소개 페이지입니다.'
      }
    ]
  }
}
</script>


<style lang="sass" scoped>
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
