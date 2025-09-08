<template>
  <div class="dashboard">
    <ProfileCard class="dashboard__profile-card"/>
    <LevelProgress :current_xp="profile?.current_xp" :max_xp="profile?.xp_to_next_level"
                   class="dashboard__levelProgress"/>
    <AchievementList/>
  </div>
</template>

<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import {onMounted} from "vue";
import useProfileStore from "../stores/ProfileStore.ts";
import useAchievementStore from "../stores/AchievementStore.ts";
import LevelProgress from "@/components/LevelProgress.vue";
import {storeToRefs} from "pinia";
import AchievementList from "@/components/AchievementList.vue";

onMounted(() => {
  const profileStore = useProfileStore();
  const achievementStore = useAchievementStore();

  profileStore.getProfile();
  achievementStore.getAchievements();
})

const { profile } = storeToRefs(useProfileStore());

</script>

<style lang="scss">
 .dashboard {
   margin: 1rem;

   &__profile-card {
     margin-bottom: 1rem;
   }

   &__levelProgress {
     max-width: 30rem;
     margin: 0 auto 1rem;
   }
 }
</style>
