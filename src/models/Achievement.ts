import type { Url } from "./common.ts";

export type AchievementId = number;

export default interface Achievement {
    id: number,
    title: string,
    description: string,
    icon_url: Url,
    currentCount: number,
    goalCount: number,
}