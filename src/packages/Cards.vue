<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jojo-cards',
  props: {
    cols: { type: String, default: '' }
  },
  computed: {
    classObject () {
      return [
        'jojo-cards',
        this.cols
      ]
    }
  }
}
</script>
