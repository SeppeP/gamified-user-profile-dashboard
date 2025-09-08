<template>
  <div class="achievementList">
    <h2 class="achievementList__title">Achievements</h2>
    <div class="achievementList__items">
      <AchievementCard v-for="achievement in achievements" :key="achievement.id" :achievement
                       class="achievementList__card"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAchievementStore from "@/stores/AchievementStore.ts";
import {storeToRefs} from "pinia";
import AchievementCard from "@/components/AchievementCard.vue";

const {achievements} = storeToRefs(useAchievementStore());

</script>

<style lang="scss">
.achievementList {
  max-width: 960px;
  margin: 0 auto;
  display: grid;

  &__title {
    margin-bottom: 1rem;
  }

  &__items {
    display: grid;
    grid-gap: 1rem;
  }
}

@media only screen and (min-width: 550px) {
  .achievementList__items {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
}
</style>