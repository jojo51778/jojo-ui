<template>
  <div id="app">
    <jojo-buttons>
      <jojo-button loading>123</jojo-button>
      <jojo-button type="success">
        <i class="fas fa-search"></i>
        232
      </jojo-button>
    </jojo-buttons>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    test () {
      alert('123')
    }
  }
}
</script>
