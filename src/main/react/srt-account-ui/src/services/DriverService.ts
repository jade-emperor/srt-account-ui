import axios, { Axios } from "axios"

export const getAllDrivers = ():Promise<any> => {
    const url = "http://localhost:9292/srt-accounts/cab-driver/all";
    return axios.get(url).then(resp => {return resp.data});
}