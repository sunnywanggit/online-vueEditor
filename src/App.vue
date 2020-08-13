<template>
  <div id="app">
      <Edit/>
      <Show/>
  </div>
</template>

<script>
  import Edit from "./components/edit";
  import Show from "./components/show";
  export default {
    components: {Show, Edit}
  }
</script>

<style lang="scss">
    *{margin: 0;padding: 0;}
    html,body,#app{
        width: 100%;
        height: 100%;
    }
    #app{
        display: flex;
        & > div{
            width: 50%;
            height: 100%;
        }
    }
</style>
