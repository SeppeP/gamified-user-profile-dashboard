import type {Url} from "./common.ts";

export default interface Profile {
    name: String,
    avatar_url: Url,
    level: Number,
    current_xp: Number,
    xp_to_next_level: Number,
}