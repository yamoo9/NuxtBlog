<template>
  <div>
    <section class="intro"/>
    <notifications group="admin-noti"/>
    <header-nav
      :nav-links="navLinks"
      @onNavMenuToggle="toggleMenu"/>
    <header-nav-menu
      :nav-links="navLinks"
      :display="displayMenu"
      @onClose="closeMenu"/>
    <div class="layout-admin container">
      <h1 class="admin-title">관리자 페이지</h1>
    </div>
    <nuxt/>
  </div>
</template>

<script>
import HeaderNav from '@/components/Navigation/HeaderNav'
import HeaderNavMenu from '@/components/Navigation/HeaderNavMenu'

export default {
  name: 'Admin',
  components: {
    HeaderNav,
    HeaderNavMenu
  },
  data() {
    return {
      displayMenu: false,
      navLinks: [
        { route: '/posts', text: '블로그' },
        { route: '/about', text: '서비스 소개' }
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
  background: darken($color, 40%) url("~assets/images/admin-bg.jpg") center
  background-size: cover

.admin-title
  font-size: 24px
  margin-bottom: -1px
  // padding-left: 16px
  color: darken($point-color, 15%)
</style>
