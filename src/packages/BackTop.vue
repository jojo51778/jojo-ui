<template>
  <div v-if="visible" class="jojo-backtop" @click="clickHandler($event)">
    <i class="fas fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: 'jojo-backtop',
  data () {
    return {
      visible: false,
      timer: null
    }
  },
  mounted () {
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      this.visible = scrollTop > clientHeight
    }
  },
  methods: {
    clickHandler (event) {
      this.timer = setInterval(() => {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        const speed = Math.floor(-scrollTop / 3)
        document.documentElement.scrollTop = scrollTop + speed
        window.pageYOffset = scrollTop + speed
        document.body.scrollTop = scrollTop + speed
        if (scrollTop === 0) {
          clearInterval(this.timer)
        }
      }, 30)
      this.$emit('click', event)
    }
  }
}
</script>
