import {defineStore} from "pinia";
import type Achievement from "../models/Achievement.ts";

const useAchievementStore = defineStore('achievementStore', {
    state: () => ({
        achievements: null as null | Array<Achievement>,
    }),
    actions: {
        async getAchievements() {
            const response = await fetch('http://localhost:3000/achievements');
            this.achievements = await response.json();
        },

        handleYoshiCoinClick() {
            const yoshiCoinAchievement = this.achievements?.find(achievement => achievement.id === '3')
            if(yoshiCoinAchievement) {
                yoshiCoinAchievement.currentCount++;
            }
        }
    }
})

export default useAchievementStore;