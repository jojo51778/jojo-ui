<template>
  <button tabindex="0"
    :class="classObject"
    @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'jojo-button',
  props: {
    active: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String },
    shape: { type: String },
    size: { type: String }
  },
  computed: {
    classObject () {
      return [
        'jojo-button',
        { active: this.active },
        this.type,
        { loading: this.loading },
        { disabled: this.disabled },
        this.shape,
        this.size
      ]
    }
  },
  methods: {
    clickHandler (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
