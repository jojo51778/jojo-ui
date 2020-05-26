// template.js
module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div :class="classObject">
    ${compoenntName}组件
  </div>
</template>

<script>
export default {
  name: 'jojo-${compoenntName.toLowerCase()}',
  props: {
  },
  computed: {
    classObject () {
      return [
        'jojo-${compoenntName.toLowerCase()}'
      ]
    }
  }
}
</script>
`
  }
}
