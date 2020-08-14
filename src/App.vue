<template>
    <div id="app">
        <!--edit.$on('input',fn),我给我的组件订阅了input 的 fn 事件-->
        <Edit @input="handleInput"/>
        <Show :code="code"/>
    </div>
</template>

<script>
    import Edit from './components/edit';
    import Show from './components/show';

    export default {
        components: {Show, Edit},
        data(){
            return{ code:'' }
        },
        methods:{
            handleInput(v){
                this.code = v
            }
        }
    };
</script>

<style lang="scss">
    * {margin: 0;padding: 0;}

    html, body, #app {
        width: 100%;
        height: 100%;
    }

    #app {
        display: flex;

        & > div {
            width: 50%;
            height: 100%;
        }
    }
</style>
