<template>
  <div class="mobile-banner wrapper">
    <div class="container">
      <div class="center-text">
        {{ centerText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    centerText: String,
  }
}
</script>

<style src="./mobile-banner.scss" lang="scss" scoped>
</style>