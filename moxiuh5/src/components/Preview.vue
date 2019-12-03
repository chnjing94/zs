<template>
    <div id="image-wapper" :style="style">

    </div>
</template>

<script>
export default {
    name: 'Preview',
    data () {
        return {
            style: {
                backgroundImage: 'url(' + require('../image/背景.png') + ')',
                backgroundSize: 'auto'
            }
        }
    }
}
</script>

<style scoped>
#image-wapper {
    width: 750px;
    height: 1280px;
    /* background-image: url('../image/背景.png') */
}
</style>