import {analytics_track} from "@/scripts/AnalyticsTracker.js";

export const openNewTab = (path) => {
    analytics_track('open_new_tab', path)
    window.open(path, '_blank')
}