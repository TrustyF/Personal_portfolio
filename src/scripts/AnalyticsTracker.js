import {logEvent} from "firebase/analytics";
import {analytics} from "@/firebase/init.js";

export function analytics_track(name, content) {
    console.log(name, {'info': String(content)})
    logEvent(analytics, name, {'info': String(content)});
}