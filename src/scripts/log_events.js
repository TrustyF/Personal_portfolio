import axios from "axios";
import {session_seed, geo_location} from "@/scripts/session.js";

let local_url = 'http://192.168.1.11:5000'
let server_url = ' https://analytics-trustyfox.pythonanywhere.com'

export function log_event(name, type, info = null) {

    let url = `${server_url}/event/add`
    // if (import.meta.env.DEV) url = `${local_url}/event/add`

    let params = {
        name: String(name),
        source: 'portfolio',
        type: String(type),
        info: String(info),
        uid: session_seed,
        geo: geo_location,
    }


    // console.log(params)


    axios.post(url, params)
        .then()
        .catch(error => null)
}