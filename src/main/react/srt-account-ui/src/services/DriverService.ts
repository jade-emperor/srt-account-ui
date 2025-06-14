import axios, { Axios } from "axios"

export const getAllDrivers = ():Promise<any> => {
    const url = "http://localhost:9292/srt-accounts/cab-driver/all";
    return axios.get(url).then(resp => {return resp.data});
}

export const addOrUpdateDriver = (data):Promise<any> => {
    const url = "http://localhost:9292/srt-accounts/cab-driver/add-or-update";
    return axios.post(url, data).then(resp => resp?.data);
}