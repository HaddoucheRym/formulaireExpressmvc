import { AxiosResponse, AxiosError } from "axios"

let axios = require("axios");

export class UserModel {
   
    getaxios = () => {

        return axios.get('http://localhost:3000/users')
    }

    getaxiosid = (id:string) => {
        return axios.get(`http://localhost:3000/users/${id}`)
    }

    deleteAxios = (id:string) => {
        axios.delete(`http://localhost:3000/users/${id}`)
    }

    postAxios = (newUser: Object) => {
        axios.post('http://localhost:3000/users', newUser)
    }

    patchAxios = (id:string, modifUser: Object) => {
       return axios.patch(`http://localhost:3000/users/${id}`, modifUser)
    }
}
