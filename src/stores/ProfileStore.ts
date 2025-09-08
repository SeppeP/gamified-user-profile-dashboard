import {defineStore} from "pinia";
import type Profile from "../models/Profile.ts";

const useProfileStore = defineStore('taskStore', {
    state: () => ({
        profile: null as null | Profile,
    }),
    actions: {
        async getProfile() {
            const response = await fetch('http://localhost:3000/profile');
            this.profile = await response.json();
        },

        addXp(amount: number) {
            if (!this.profile) return

            if ((this.profile.current_xp + amount) >= this.profile.xp_to_next_level) {
                this.levelUp();
                this.profile.current_xp += amount - this.profile.xp_to_next_level;
            } else {
                this.profile.current_xp += amount;
            }
        },

        levelUp() {
            if(!this.profile) return;
            this.profile.level++;
        }
    }
})

export default useProfileStore;