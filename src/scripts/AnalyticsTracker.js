import {logEvent} from "firebase/analytics";
import {analytics} from "@/firebase/init.js";

export function analytics_track(name, content) {
    if (import.meta.env.DEV) {
        console.log(name, {'info': String(content)})
    }
    if (import.meta.env.PROD) {
        logEvent(analytics, name, {'info': String(content)});
    }
}