<template>
  <div class="pill wrapper" 
    :style="{
            'width': width, 
            'height': height
            }">
    <div class="container" 
    :style="{
            'background': color,
            // 'display': display
            'justify-content': 'center', 
            // // 'justify-items': 'left', 
            // 'align-content': 'center', 
            'align-items': alignment,
            }">
      <div class="text" 
        :style="{
                'color': textColor,
                'font-size': textSize, 
                }">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    text: String,
    color: String,
    textSize: String,
    display: String,
    textColor: String,
    alignment: String
  }
}
</script>

<style src="./pill.scss" lang="scss" scoped>
</style>