<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.card {
  background-image: linear-gradient($body-color-top, $body-color-bottom);
  border-radius: 10px;
  border: solid 1px $text-color;

  padding: 1rem;
}
</style>