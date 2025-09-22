<script lang="ts" setup></script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-container>
                <el-aside> aside </el-aside>
                <el-main>
                    <slot />
                </el-main>
            </el-container>
            <el-footer> foo </el-footer>
        </el-container>
    </div>
</template>

<style lang="scss" scoped></style>
