<template>
    <div id="app" class="layout-wrap">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'App',
        mounted(){
            this.initPageHeight();
        }
    }
</script>
<style lang="scss">
    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 750px;
        min-height: 100%;
        margin: 0 auto;
        color: #333333;
        font-size: 24px;
        overflow-x: hidden;
        box-shadow: 0 0 10px 2px #e1e2e3;
    }
</style>

