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
    <jojo-cards cols="two">
      <jojo-card fluid>
        <div slot='header'>title</div>
        <img src="https://img.ruten.com.tw/s2/5/6c/00/21934524960768_895.jpg" slot="image" width="100%"/>
        <div>jojo 我不做人啦</div>
        <div slot='footer'>
          <jojo-button>确认</jojo-button>
        </div>
      </jojo-card>
      <jojo-card fluid>
        <div slot='header'>title</div>
        <img src="https://img.ruten.com.tw/s2/5/6c/00/21934524960768_895.jpg" slot="image" width="100%"/>
        <div>jojo 我不做人啦</div>
        <div slot='footer'>
          <jojo-button>确认</jojo-button>
        </div>
      </jojo-card>
    </jojo-cards>
    <jojo-collapse bordered>
      <jojo-collapse-item index='0' title="我不做人啦" label='123'>
        jojo
      </jojo-collapse-item>
      <jojo-collapse-item index='1' title="我不做人啦">
        jojo
      </jojo-collapse-item>
    </jojo-collapse>
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
