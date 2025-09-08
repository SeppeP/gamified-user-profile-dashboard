<template>
  <Card class="achievement-card">
    <img :src="achievement.icon_url" :alt="achievement.title" class="achievement-card__img" />
    <div>
      <h3>{{ achievement.title }}</h3>
      <p class="achievement-card__description">{{ achievement.description }}</p>
      <LevelProgress :current_xp="achievement.currentCount" :max_xp="achievement.goalCount"/>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type Achievement from "@/models/Achievement.ts";
import Card from "@/components/Card.vue";
import LevelProgress from "@/components/LevelProgress.vue";

defineProps<{
  achievement: Achievement;
}>();
</script>

<style lang="scss">
  .achievement-card {
    display: grid;
    grid-template-columns: 4rem 1fr;
    grid-gap: .5rem;

    &__img {
      margin: auto;
      max-width: 100%;
    }

    &__description {
      font-size: .75rem;
    }
  }

  @media only screen and (min-width: 550px) {
    .achievement-card {
      grid-template-columns: 1fr;
      text-align: center;

      &__img {
        max-width: 60%;
        max-height: 8rem;
        margin: 1.5rem auto;
      }
    }
  }
</style>