import {axios} from "@bundled-es-modules/axios";
import {geo_location, get_session_seed} from "@/scripts/session.js";

let local_url = 'http://192.168.1.11:5000'
let server_url = 'https://analytics-trustyfox.pythonanywhere.com'
let curr_api = server_url
let project = 'portfolio'

export async function log_event(name, type, info = null) {

    let url = `${curr_api}/event/add`

    let params = {
        name: String(name),
        source: project,
        type: String(type),
        info: String(info),
        uid: get_session_seed(),
        geo: await geo_location,
        timestamp: Date.now()
    }

    if (import.meta.env.DEV && curr_api !== local_url) {
        console.log('dev log', params)
        return
    }

    axios.post(url, params)
        .then(resp => {
            console.log('successfully logged event')
        })
        .catch(error => null)
}

export async function ping_user_leave() {

    let url = `${curr_api}/event/ping_user_alive`

    let params = {
        source: project,
        uid: get_session_seed(),
        geo: await geo_location,
        timestamp: Date.now()
    }

    if (import.meta.env.DEV && curr_api !== local_url) {
        return
    }

    axios.put(url, params)
        .then(resp => null)
        .catch(error => null)
}