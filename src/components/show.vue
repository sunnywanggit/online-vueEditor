<template>
    <div>
        <h1>代码运行结果</h1>
        <div>
            {{code}}
        </div>
    </div>
</template>

<script>
    export default {
        name:'Show',
        props:{
            code:{
                type:String,
                default:''
            }
        },
        methods:{
            run(){
                console.log('show-run');
            }
        }
    }
</script>

<style scoped>

</style>
