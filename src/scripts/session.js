import axios from "axios";

export const session_seed = Math.round(Math.random() * 10000000)

const get_geo = async () => {
    let key = import.meta.env.VITE_GEO_API
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}`;
    return await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(resp => resp.data)
        .then(json => {
            return {
                country_name: json['country_name'],
                state_prov: json['state_prov'],
                city: json['city'],
                zipcode: json['zipcode'],
                country_code2: json['country_code2'],
                country_code3: json['country_code3'],
                country_flag: json['country_flag'],
                country_emoji: json['country_emoji'],
            }
        })
        .catch(err => err)
}

export const geo_location = await get_geo()
