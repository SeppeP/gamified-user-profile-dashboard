<template>
  <ProfileCard/>
</template>

<script setup lang="ts">
import ProfileCard from "./ProfileCard.vue";
import {onMounted} from "vue";
import useProfileStore from "../stores/ProfileStore.ts";
import useAchievementStore from "../stores/AchievementStore.ts";

onMounted(() => {
  const profileStore = useProfileStore();
  const achievementStore = useAchievementStore();

  profileStore.getProfile();
  achievementStore.getAchievements();
})

</script>

<style>
</style>
