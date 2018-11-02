<template lang="pug">
  .page-single-post
    section.post
      h1.post-title {{ loadedPost.title }}
      .post-info
        span.post-author {{ loadedPost.author }}
        span.post-data {{ loadedPost.updatedDate }}
      img.post-image(:src="loadedPost.thumbnail", alt, width="600")
      p.post-content {{ loadedPost.content }}
    section.post-feedback
      p
        | 해당 포스트에 대해 궁금한 점이 있으면
        a(href="mailto:yamoo9@naver.com") yamoo9@naver.com
        | 로 문의주세요.
</template>

<script>
export default {
  computed: {
    loadedPost() {
      const id = this.$route.params.id - 1
      return this.$store.getters.loadedPosts[id]
    }
  }
  // asyncData({ route }, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       loadedPost: {
  //         id: '1',
  //         title: '빅 데이터',
  //         author: '야무(yamoo9)',
  //         updatedDate: new Date().toLocaleString(),
  //         thumbnail: '//goo.gl/mJ5Vsy',
  //         content:
  //           '빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다.'
  //       }
  //     })
  //   }, 1000)
  // }
}
</script>


<style lang="sass" scoped>
  .page-single-post
    padding: 30px
    text-align: center
    box-sizing: border-box

  .post
    width: 100%

  .post-title
    margin: 0

  .post-info
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    box-sizing: inherit
    border-bottom: 1px solid #ccc
    padding: 10px

  .post-data,
  .post-author
    margin: 0 10px
    color: #9a9a9a

  .post-image
    margin-top: 20px
    width: 100%
    height: auto

  .post-feedback
    width: 60%
    margin:
      top: 30px
      right: auto
      left: auto
    border-top: 1px solid rgba(#000, 0.1)
    padding-top: 15px
    a
      padding:
        left: 5px
        right: 5px
      color: #46b784
      text-decoration: none
      transition: color 0.4s ease
      &:hover,
      &:active
        color: darken(#46b784, 20%)


  @media (min-width: 768px)
    .post
      width: 600px
      margin: auto

    .post-info
      flex-direction: row
</style>
