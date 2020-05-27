<template>
  <div :class="classObject">
    <div class='header' v-if='$slots.header'>
      <slot name='header'></slot>
    </div>
    <div class='image' v-if='$slots.image'>
      <slot name='image'></slot>
    </div>
    <div class='content' v-if='$slots.default'>
      <slot></slot>
    </div>
    <div class='footer' v-if='$slots.footer'>
      <slot name='footer'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jojo-card',
  props: {
    fluid: { type: Boolean, default: false },
    nopadding: { type: Boolean, default: false },
    color: { type: String, default: '' }
  },
  computed: {
    classObject () {
      return [
        'jojo-card',
        this.color,
        { fluid: this.fluid, nopadding: this.nopadding }
      ]
    }
  }
}
</script>
