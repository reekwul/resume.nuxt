<script setup lang="ts">
    import { useAuthStore } from '~/store/authStore';

    const authStore = useAuthStore();
</script>

<template>
    <div>
        <div>
            <template v-if="authStore.isAuth"> user </template>
            <template v-else>
                <CButton label="Войти" icon="pi-sign-in" />
            </template>
        </div>
    </div>
</template>
