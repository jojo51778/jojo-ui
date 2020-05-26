<template>
  <div :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'jojo-buttons',
  props: {
    type: { type: String },
    size: { type: String }
  },
  computed: {
    classObject () {
      return [
        'jojo-buttons',
        this.type,
        this.size
      ]
    }
  }
}
</script>
