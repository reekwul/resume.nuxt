<template>
  <div class="contacts">
    <el-button
      v-for="contact in constants.CONTACT_LIST"
      :key="contact.type"
      tag="a"
      target="_blank"
      :href="contact.link"
      :icon="contact.icon"
      round
      class="contacts__link"
    >
      {{ contact.text }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import constants from '~/constants';
</script>

<style scoped lang="scss">
  .contacts {
    display: flex;
    gap: $spacing-xs;

    &__link {
      color: $color-text-primary;
      text-decoration: none;
    }

    & + & {
      margin: 0;
    }
  }
</style>
