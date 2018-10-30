<template lang="pug">
article.post-preview
	nuxt-link(:to="'/posts/' + id")
		figure.post-thumbnail(:style="{'background-image': 'url('+ thumbnail +')'}")
		.post-content
			h2.post-title {{ title }}
			p.post-text {{ ellipseContent }}
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    ellipseContent() {
      const ellipseText =
        this.content.length < 65
          ? this.content
          : this.content.slice(0, 60) + '...'
      return ellipseText
    }
  }
}
</script>


<style lang="sass" scoped>
@import "~assets/styles/config"

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
  color: darken($color, 20%)
  transition: all 0.4s ease
  &:hover .post-content,
  &:active .post-content
    background-color: rgba($color, 0.26)

.post-thumbnail
  width: 100%
  height: 150px
  margin: 0
  background-position: center
  background-size: cover

.post-title
  margin-bottom: 10px

.post-text
  margin-top: 0

.post-content
  padding: 10px
  text-align: center

@media (min-width: 768px)
  .post-preview
    flex: 0 0 45%
    margin:
      left: 10px
      right: 10px
</style>
