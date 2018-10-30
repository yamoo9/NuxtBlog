<template lang="pug">
  .page-home
    section.intro
      h1 BLOG 서비스 with Nuxt.js
    section.featured-posts
      article.post-preview
        nuxt-link(:to="'/posts/'+1")
          figure.post-thumbnail(style="background-image: url(https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/sixwaysandco.jpg)")
          .post-content
            h2.post-title 포스트 제목 1
            p.post-text 포스트 내용
      article.post-preview
        nuxt-link(:to="'/posts/'+2")
          figure.post-thumbnail(style="background-image: url(https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg)")
          .post-content
            h2.post-title 포스트 제목 2
            p.post-text 포스트 내용
</template>

<style lang="sass" scoped>
  .intro
    position: relative
    height: 200px
    margin-bottom: 20px
    padding: 30px
    background: darken(#5db4f3, 40%) top center
    background-size: cover

    h1
      position: absolute
      top: 5%
      left: 5%
      width: 90%
      font-size: 1.5rem
      color: lighten(#5db4f3, 20%)
      background-color: rgba(#5db4f3, 0.26)
      border-radius: 4px
      padding: 10px

  .featured-posts
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    padding: 20px

  .post-preview
    border: 1px solid rgba(#aaa, 0.45)
    box-shadow: 0 2px 2px rgba(#aaa, 0.45)
    background-color: #fff
    flex: 1 0 90%
    margin:
      left: 5%
      right: 5%
      bottom: 15px

  a
    text-decoration: none
    color: darken(#5db4f3, 20%)
    transition: all 0.4s ease
    &:hover .post-content,
    &:active .post-content
      background-color: rgba(#5db4f3, 0.26)

  .post-thumbnail
    width: 100%
    height: 150px
    margin: 0
    background-position: center
    background-size: cover

  .post-title
    margin-bottom: 0

  .post-text
    margin-top: 0

  .post-content
    padding: 10px
    text-align: center

  @media (min-width: 768px)
    .intro h1
      font-size: 2rem
    .post-preview
      flex: 0 0 45%
      margin:
        left: 10px
        right: 10px
</style>
