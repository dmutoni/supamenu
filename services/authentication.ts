import axios, { AxiosResponse } from "axios"
import { ILogin, ISignUp, LoginResponse } from "../types"
import { url } from "../utils/url"

const login = async (body: ILogin): Promise<AxiosResponse<LoginResponse>> => {
    return await axios.post(`${url}/auth/signin`, body);
}

const signUp = async (body: ISignUp): Promise<AxiosResponse<void>> => {
    return await axios.post(`${url}/auth/client/signup`, body);
}

export {
    login, signUp
}