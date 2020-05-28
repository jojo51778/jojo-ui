<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jojo-collapse',
  props: {
    bordered: { type: Boolean, default: false }
  },
  computed: {
    classObject () {
      return [
        'jojo-collapse',
        { bordered: this.bordered }
      ]
    }
  }
}
</script>
