<template lang="pug">
button(
  class="ui-button"
  :class="styles"
  v-bind="$attrs"
  v-on="$listeners"
)
  slot
</template>

<script>
export default {
  props: {
    styles: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
// @import "~assets/styles/config"

$point-color: #0826c0 !default
$cancel-color: #d43c6d !default

.ui-button
  cursor: pointer
  border: none
  border-radius: 4px
  padding: 0.6em 1.2em
  background: rgba(darken($point-color, 5%), 0.7)
  color: #fff
  font-weight: bold
  transition: all 0.4s ease-out
  &:hover,
  &:focus
    background: darken($point-color, 20%)

  &.inverted
    background: #efefef
    border: 1px solid transparent
    color: $point-color
    &:hover,
    &:focus
      background: #dedede

  &.cancel
    background: rgba(darken($cancel-color, 10%), 0.7)
    color: #fff
    &:hover,
    &:focus
      background: $cancel-color

</style>
