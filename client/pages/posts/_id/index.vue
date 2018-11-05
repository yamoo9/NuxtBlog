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
  asyncData(context) {
    console.log(context)
  },
  head() {
    const post = this.loadedPost
    return {
      title: post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${post.title} 페이지입니다.`
        }
      ]
    }
  },
  computed: {
    loadedPost() {
      const id = this.$route.params.id
      return this.$store.getters.loadedPosts.find(
        post => post.title.replace(/\?/, '') === id
      )
    }
  }
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
