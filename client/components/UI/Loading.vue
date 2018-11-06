<template>
  <div
    v-if="isLoading"
    class="loading-process">
    <!-- 로딩 프로세스 콘텐츠 -->
    <svg
      class="loader"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50">
      <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    },
    increase(num) {
      console.log(num)
    }
  }
}
</script>

<style scoped>
.loading-process {
  position: fixed;
  z-index: 10000;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 0 2em;
  height: 100px;
  width: 400px;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}
.loader {
  width: 60px;
  height: 60px;
}
svg path,
svg rect {
  fill: #00d0ff;
}
</style>
