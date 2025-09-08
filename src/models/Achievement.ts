import type { Url } from "./common.ts";

export type AchievementId = Number;

export default interface Achievement {
    id: AchievementId,
    title: String,
    description: String,
    icon_url: Url,
    currentCount: Number,
    goalCount: Number,
}