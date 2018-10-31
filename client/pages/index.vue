<template lang="pug">
.page-home
  section.featured-posts
    post-preview(
      id="1",
      title="빅 데이터",
      thumbnail="//goo.gl/mJ5Vsy",
      content="빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다."
    )
    post-preview(
      id="2",
      title="머신 러닝",
      thumbnail="//goo.gl/HoiVkE",
      content="머신 러닝은 인공 지능의 한 분야로, 컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하는 분야를 말한다."
    )
</template>


<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: { PostPreview }
}
</script>


<style lang="sass" scoped>
@import "~assets/styles/config"

.featured-posts
  display: flex
  justify-content: center
  align-items: flex-start
  flex-wrap: wrap
  padding: 20px

a
  text-decoration: none
  color: darken($color, 20%)
  transition: all 0.4s ease
  &:hover .post-content,
  &:active .post-content
    background-color: rgba($color, 0.26)

@media (min-width: 768px)
  .intro h1
    font-size: 2rem
</style>
