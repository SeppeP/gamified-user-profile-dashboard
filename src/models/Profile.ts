import type {Url} from "./common.ts";

export default interface Profile {
    name: String,
    avatar_url: Url,
    level: number,
    current_xp: number,
    xp_to_next_level: number,
}