import axios, { AxiosResponse } from "axios"
import { ILogin, ISignUp, LoginResponse, Response } from "../types"
import { url } from "../utils/url"

const login = async (body: ILogin): Promise<AxiosResponse<Response<LoginResponse>>> => {
    return (await axios.post(`${url}/auth/admin/signin`, body));
}

const signUp = async (body: ISignUp): Promise<AxiosResponse<void>> => {
    return await axios.post(`${url}/auth/signup`, body);
}

export {
    login, signUp
}