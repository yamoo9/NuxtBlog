<template>
  <div>
    <section class="intro"/>
    <header-nav
      :nav-links="navLinks"
      @onNavMenuToggle="toggleMenu"/>
    <header-nav-menu
      :nav-links="navLinks"
      :display="displayMenu"
      @onClose="closeMenu"/>
    <nuxt/>
  </div>
</template>

<script>
import HeaderNav from '@/components/Navigation/HeaderNav'
import HeaderNavMenu from '@/components/Navigation/HeaderNavMenu'

export default {
  components: {
    HeaderNav,
    HeaderNavMenu
  },
  data() {
    return {
      displayMenu: false,
      navLinks: [
        { route: '/posts', text: '블로그' },
        { route: '/about', text: '서비스 소개' },
        { route: '/admin', text: '관리자' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu
    },
    closeMenu() {
      this.displayMenu = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

.intro
  position: relative
  height: 200px
  margin-bottom: 20px
  padding: 30px
  background: darken($color, 40%) url("~assets/images/intro-bg.jpg") center
  background-size: cover
</style>
