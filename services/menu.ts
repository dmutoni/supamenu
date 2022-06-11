import axios, { AxiosResponse } from "axios";
import { getToken } from "../helpers/GetData";
import { IMenuCategory, IMenuCategoryResponse, IOrderRequest, IOrderResponse, ResponseData } from "../types";
import { url } from "../utils/url";

const getMenuCategories = async (id: number): Promise<AxiosResponse<IMenuCategoryResponse[]>> => {
    const token = await getToken();

    return await axios.get(`${url}/menu-categories/listAll/service-provider/${id}?page=0&size=30`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}

const makeOrderApi = async (body: IOrderRequest): Promise<AxiosResponse<IOrderResponse>> => {
    const token = await getToken();

    return await axios.post(`${url}/orders`,body, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}
// const payOrder = async(): Promise<AxiosResponse<>> => {
//     const token = await getToken();
// }
export { getMenuCategories, makeOrderApi }