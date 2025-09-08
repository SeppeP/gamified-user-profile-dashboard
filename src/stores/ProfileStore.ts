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
       }
    }
})

export default useProfileStore;