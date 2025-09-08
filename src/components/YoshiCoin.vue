<template>
  <div class="yoshiCoin">
    <button @click="handleCoinClick"
            :style="{ position: 'absolute', top: position.top + 'px', left: position.left + 'px' }"
            class="yoshiCoin__button">
      <img
          v-if="imageVisible"
          src="/achievements/yoshi-coin.png"
          alt="yoshi coin"
          class="yoshiCoin__image"
      />
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import useProfileStore from "@/stores/ProfileStore.js";
import useAchievementStore from "@/stores/AchievementStore.js";

const position = ref({top: 0, left: 0})
const imageVisible = ref(true)

function getRandomPosition() {
  const imageWidth = 286
  const imageHeight = 423

  const width = window.screen.width
  const height = window.screen.height
  const left = Math.random() * (width - imageWidth)
  const top = Math.random() * (height - imageHeight)
  return {top, left}
}

let intervalId

onMounted(() => {
  position.value = getRandomPosition()

  intervalId = setInterval(() => {
    if (imageVisible.value) return
    position.value = getRandomPosition()
    imageVisible.value = true;
  }, 5000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const profileStore = useProfileStore();
const achievementStore = useAchievementStore();

function handleCoinClick() {
  imageVisible.value = false;

  profileStore.addXp(10);
  achievementStore.handleYoshiCoinClick();
}
</script>

<style lang="scss">
.yoshiCoin {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 1;

  &__button, &__image {
    max-height: 100px;
  }
  
  &__button {
    cursor: pointer;
    background: none;
    border: none;
  }
}
</style>
