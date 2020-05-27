<template>
  <div id="app" style="padding: 30px">
    <jojo-buttons>
      <jojo-button loading>123</jojo-button>
      <jojo-button type="success">
        <i class="fas fa-search"></i>
        232
      </jojo-button>
    </jojo-buttons>
    <jojo-backtop></jojo-backtop>
    <jojo-card fluid style="width: 25%;">
      <div slot='header'>title</div>
      <img src="https://img.ruten.com.tw/s2/5/6c/00/21934524960768_895.jpg" slot="image" width="100%"/>
      <div>jojo</div>
      <div slot='footer'>
        <jojo-button>确认</jojo-button>
      </div>
    </jojo-card>
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
