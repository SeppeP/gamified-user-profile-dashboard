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
        }
    }
})

export default useAchievementStore;