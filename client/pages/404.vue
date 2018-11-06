<template lang="pug">
.page-not-found.container
  h1.error-title 요청한 페이지를 찾을 수 없습니다
  .display-404
</template>

<style lang="sass" scoped>
.error-title
  text-align: center
  color: rgba(#000, 0.67)
  font-weight: 300

.display-404::before
  content: '404'
  position: fixed
  top: 50%
  left: 50%
  transform: translateX(-50%)
  font: bold 200px/1 Verdana
  letter-spacing: -0.05em
  color: rgba(#000, 0.05)
</style>
