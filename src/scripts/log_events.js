import axios from "axios";
import {session_seed, geo_location} from "@/scripts/session.js";

// let local_url = 'http://192.168.1.11:5000'
let server_url = ' https://analytics-trustyfox.pythonanywhere.com'

export async function log_event(name, type, info = null) {

    if (import.meta.env.DEV) return

    let url = `${server_url}/event/add`

    let params = {
        name: String(name),
        source: 'portfolio',
        type: String(type),
        info: String(info),
        uid: session_seed,
        geo: await geo_location,
    }

    // console.log(params)

    axios.post(url, params)
        .then(resp => {
            console.log('successfully logged event')
        })
        .catch(error => null)
}