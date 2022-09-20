<template>
    <div class="fiedx_foot">
        {{ text }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props: ["text"]
}
</script>

<style scoped>
.fiedx_foot {
    width: 90%;
    height: 40px;
    border-radius: 15px;
    margin: 0 auto;
    background-color: #D41246;
    text-align: center;
    line-height: 40px;
    color: white;
}
</style>