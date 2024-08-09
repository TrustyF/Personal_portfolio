import {analytics} from "@/main.js";
import {logEvent} from "firebase/analytics";

export function analytics_track(name, content) {
    // console.log(name, content)
    logEvent(analytics, name, content);
}