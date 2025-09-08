<template>
  <div class="LevelProgress">
    <p class="LevelProgress__xp">{{props.current_xp}}/{{props.max_xp}}</p>
    <div class="LevelProgress__container">
      <div :style="progressionBarWidth" :class="progressionBarColor" class="LevelProgress__progression-bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";

const props = defineProps<{
  current_xp: number;
  max_xp: number;
}>()

const isCompleted = computed(() => props.current_xp >= props.max_xp)

const progressionBarColor = computed(() => {
  return isCompleted.value ? 'LevelProgress__progression-bar--completed' : 'LevelProgress__progression-bar--ongoing';
})

const progressionBarWidth = computed(() => {
  return {
    width: `${(props.current_xp / props.max_xp) * 100 }%`,
  };
})

</script>

<style lang="scss">
.LevelProgress {
  &__xp {
    text-align: right;
    font-size: .75rem;
  }

  &__container {
    height: .5rem;
    background-color: $text-color;
    border-radius: 10px;
    overflow: hidden;
  }

  &__progression-bar {
    position: relative;
    background-color: red;
    height: 100%;
    transition: all 0.2s;

    &--completed {
      background-color: $progress-completed-color;
    }

    &--ongoing {
      background-color: $progress-ongoing-color;
    }
  }
}
</style>