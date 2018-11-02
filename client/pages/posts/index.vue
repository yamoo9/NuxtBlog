<template lang="pug">
  .page-posts.container
    h1.page-title Posts
    p 블로그 포스트 리스트
    post-list(:posts="loadedPosts")
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: { PostList },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: '빅 데이터',
              thumbnail: '//goo.gl/mJ5Vsy',
              content:
                '빅 데이터란? 기존 데이터베이스 관리도구의 능력을 넘어서는 대량의 정형 또는 비정형 데이터 집합을 포함한 데이터로부터 가치를 추출하고 결과를 분석하는 기술이다.'
            },
            {
              id: '2',
              title: '머신 러닝',
              thumbnail: '//goo.gl/HoiVkE',
              content:
                '머신 러닝은 인공 지능의 한 분야로, 컴퓨터가 학습할 수 있도록 하는 알고리즘과 기술을 개발하는 분야를 말한다.'
            }
          ]
        })
      }, 1000)
      // reject(new Error())
    })
      .then(data => data)
      .catch(e => console.error(e))
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
