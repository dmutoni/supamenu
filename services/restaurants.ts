import axios, { AxiosResponse } from "axios";
import { RestaurantInfo } from "../types";
import { url } from "../utils/url";

const searchResto = async (keyword: string): Promise<AxiosResponse<RestaurantInfo>> => {
    return await axios.get(`${url}/service-providers/search/keyword/${keyword}?page=0&size=30`);
}

export { searchResto }