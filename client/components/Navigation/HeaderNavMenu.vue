<template lang="pug">
  .page-header-menu
    //- 배경(딤 처리)
    transition(name="fade")
      .menu-backdrop(
        v-if="display",
        @click="$emit('onClose')"
      )
    //- 모바일 슬라이드 내비게이션 메뉴
    transition(name="slide-side")
      nav.menu(v-if="display")
        ul.menu-list
          li.menu-item(
            v-for="(link, index) in navLinks",
            :key="index"
          )
            a(
              href="/",
              @click.prevent="goToRouteAndClose(link)"
            ) {{ link.text }}
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      default: false
    },
    navLinks: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    goToRouteAndClose(link) {
      this.$router.push(link.route)
      this.$emit('onClose')
    }
  }
}
</script>


<style lang="sass" scoped>
@import "~assets/styles/config"

.page-header-menu
  height: 100%
  width: 100%

.menu-backdrop
  opacity: 1
  position: fixed
  z-index: 1000
  top: 0
  right: 0
  width: 100%
  height: 100%
  background-color: rgba(#000, 0.7)

.menu
  position: fixed
  z-index: 10000
  top: 0
  right: 0
  width: 300px
  height: 100%
  padding: 30px
  background-color: #fff

.menu-list
  list-style: none
  padding: 0
  margin: 0

.menu-item
  margin: 20px 0
  a
    text-decoration: none
    color: black
    font-size: 1.5rem
    transition: all 0.4s ease
    &:hover,
    &:active,
    &:focus
      color: $point-color

// 트랜지션 fade
.fade-enter-active,
.fade-leave-active
  transition: all 0.3s ease-out

.fade-enter,
.fade-leave-to
  opacity: 0

// 트랜지션 slide-side
.slide-side-enter-active,
.slide-side-leave-active
  transition: all 0.3s ease-out

.slide-side-enter,
.slide-side-leave-to
  transform: translateX(100%)
</style>
