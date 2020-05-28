<template>
  <div :class="classObject">
    <div class="title" @click="clickTitleHandler">
      <slot name="title">{{ title }}</slot>
      <label v-if="label">{{ label }}</label>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jojo-collapse-item',
  data () {
    return {
      show: false
    }
  },
  props: {
    title: { type: String },
    label: { type: String },
    index: { type: [String, Number], required: true }
  },
  computed: {
    classObject () {
      return [
        'jojo-collapse-item',
        { active: this.show }
      ]
    }
  },
  methods: {
    clickTitleHandler () {
      this.show = !this.show
      this.$emit('click', this.index, this.show)
    }
  }
}
</script>
