<template>
    <div class="edit">
        <div class="edit-list">
            <button>运行</button>
            <button>取消</button>
        </div>
        <!--对于原生标签，v-model 并不等于 input + value,内部会对输入法做处理 而且不同的标签，解析出的结果不一样-->
        <div class="edit-box">
            <textarea :value="code" @input="handleInput" @keydown.9.prevent="handleKeyDown"></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Edit',
        data() {
            return {
                code: ''
            };
        },
        methods: {
            handleInput(e) {
                this.code = e.target.value;
                //当用户输入的时候，使用发布订阅模式，将数据传递给父组件
                //触发订阅的事件
                this.$emit('input',this.code)
            },
            handleKeyDown(e){
                if(e.key === 'Tab'){
                    console.log('keydown tab');
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .edit {
        .edit-list {
            padding: 10px;
            background-color: #ccc;

            button {
                width: 50px;
                height: 30px;
            }
        }

        .edit-box {
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            right: 50%;

            textarea {
                padding: 10px;
                border: none;
                width: 100%;
                height: 100%;
                outline: none;
                font-size: 24px;
            }
        }
    }

</style>
