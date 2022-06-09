import axios, { AxiosResponse } from "axios";
import { ResponseData } from "../types";
import { url } from "../utils/url";

const searchResto = async (): Promise<AxiosResponse<ResponseData>> => {
    // return await axios.get(`${url}/service-providers/search/keyword/${keyword}?page=0&size=30`);
    return await axios.get(`${url}/service-providers?page=0&size=30`);
}

export { searchResto }