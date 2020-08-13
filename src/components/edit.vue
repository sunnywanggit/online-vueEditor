<template>
    <div class="edit">
        <div class="edit-list">
            <button>运行</button>
            <button>取消</button>
        </div>
        <div class="edit-box">
            <textarea></textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Edit'
    }
</script>

<style scoped lang="scss">
    .edit{
        .edit-list{
            padding: 10px;
            background-color: #ccc;
            button{
                width: 50px;
                height: 30px;
            }
        }
        .edit-box{
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            right: 50%;
            textarea{
                border: none;
                width: 100%;
                height: 100%;
                outline: none;
            }
        }
    }

</style>