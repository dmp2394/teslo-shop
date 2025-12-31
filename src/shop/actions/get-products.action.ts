import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getProductsAction = async (): Promise<ProductsResponse> => {
    const { data } = await tesloApi.get<ProductsResponse>('/products');

    const productsWithImageUrls = data.products.map(product => ({
        ...product,
        images: product.images.map(image => `${BASE_URL}/files/product/${image}`)
    }))

    return {
        ...data,
        products: productsWithImageUrls,
    };
}