import type { Url } from "./common.ts";

export type AchievementId = string;

export default interface Achievement {
    id: AchievementId,
    title: string,
    description: string,
    icon_url: Url,
    currentCount: number,
    goalCount: number,
}