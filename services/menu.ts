import axios, { AxiosResponse } from "axios";
import { getToken } from "../helpers/GetData";
import { IMenuCategory, IMenuCategoryResponse, ResponseData } from "../types";
import { url } from "../utils/url";

const getMenuCategories = async (): Promise<AxiosResponse<IMenuCategoryResponse>> => {
    const token = await getToken();

    return await axios.get(`${url}/menu-categories?page=0&size=30`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}

export { getMenuCategories }