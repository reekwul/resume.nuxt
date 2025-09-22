<template>
    <nav class="header-navigation">
        <ul>
            <li v-for="(item, key) in constants.MENU_LIST" :key>
                <NuxtLink :to="item.path">
                    {{ item.text }}

                    <el-icon>
                        <component :is="item.icon" />
                    </el-icon>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
    import constants from '~/constants';
</script>

<style lang="scss" scoped></style>
