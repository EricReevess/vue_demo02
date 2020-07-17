<template>
  <div>
    <p>点击了 {{$store.state.count}} 次，当前次数是{{evenOrOdd}}</p>
    <button @click="handelDec">减少</button>
    <button @click="handelPlus">增加</button>
    <button @click="handelPlusIfEven">如果是偶数就增加</button>
    <button @click="handelPlusAsync">延迟增加</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    computed: {
      evenOrOdd () {
        //再此处通知vuex调用函数，而非直接调用
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      handelDec () {
        this.$store.dispatch('handelDec')
      },
      handelPlus () {
        this.$store.dispatch('handelPlus')
      },
      handelPlusIfEven () {
        this.$store.dispatch('handelPlusIfEven')
      },
      handelPlusAsync () {
        this.$store.dispatch('handelPlusAsync')
      },
    }
  }
</script>

<style scoped>

</style>
