<template>
  <div v-if="profile" class="profile">
    <img :src="profile.avatar_url" :alt="`${profile.name}'s profile picture`">
    <h1 class="profile__name">{{ profile.name }}</h1>
    <p class="profile__level">Level {{ profile.level }}</p>
  </div>
</template>

<script setup lang="ts">
import useProfileStore from "../stores/ProfileStore.ts";
import {storeToRefs} from "pinia";

const { profile } = storeToRefs(useProfileStore());
</script>

<style lang="scss">
  .profile {
    margin: 4.5rem auto 0;
    max-width: fit-content;
    text-align: center;

    &__name {
      font-size: 1.5rem;
      margin-top: .75rem;
    }

    &__level {
      font-size: .75rem;
    }
  }
</style>