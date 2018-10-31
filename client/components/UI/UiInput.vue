<template lang="pug">
.ui-input-control(role="group")
  label(:for="uniqueId", :style="{display: computedDisplay}")
    slot
  input(
    v-if="controlType === 'input'",
    :id="uniqueId",
    :aria-label="computedLabel"
    :placeholder="computedLabel"
    :value="value",
    v-bind="$attrs",
    @input="$emit('input', $event.target.value)"
  )
  textarea(
    v-if="controlType === 'textarea'",
    :id="uniqueId",
    v-bind="$attrs",
    :value="value",
    @input="$emit('input', $event.target.value)",
    rows="5"
  )
</template>

<script>
export default {
  props: {
    uniqueId: {
      type: String,
      required: true
    },
    controlType: {
      type: String,
      default: 'input'
    },
    labelHidden: {
      type: Boolean,
      default: null
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      label: null
    }
  },
  computed: {
    computedDisplay() {
      return this.labelHidden ? 'none' : 'block'
    },
    computedLabel() {
      return this.labelHidden ? this.label : null
    }
  },
  mounted() {
    // 사용자가 전달한 slot 콘텐츠
    this.label = this.$slots.default[0].text
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/styles/config"

.ui-input-control
  margin: 10px 0
  label
    display: block
    font-weight: bold
    margin-top: 20px
    margin-bottom: 10px
  input,
  textarea
    display: block
    width: 100%
    border: 1px solid $point-color
    border-radius: 4px
    padding: 0.4em
    font: inherit
    transition: background-color 0.4s ease
    &:focus
      background-color: rgba(lighten($point-color, 20%), 0.1)
      outline: 1px solid $point-color
  textarea
    padding: 0.95em
</style>
