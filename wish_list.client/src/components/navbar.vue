<template>
    <div class="nav">
        <b-container>
            <div class="background">
                <div id="TestList">TestList</div>
                <div>

                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="scss">
    .nav {
        width: 100%;
        height: 66px;
        margin: 0 auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 0 0 8px 8px;
    }
    #TestList{
        width: 72px;
        height: 28px;
        font-size: 22px;
        line-height: 28px;
        color: #59606D;
        float: left;
        padding: 18px 0 0 88px;
    }
</style>