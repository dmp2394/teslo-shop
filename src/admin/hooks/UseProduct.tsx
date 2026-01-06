import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const UseProduct = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: ['product', { id }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5, // 5 min
    });

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            // invalidar cache de pantalla ppal
            queryClient.invalidateQueries({ queryKey: ['products'] });
            // invalidar cache de la descripcion de este producto

            //actualizar cache para el producto que se acabó de insertar para tenerlo en cache
            queryClient.setQueryData(['product', { id: product.id }], product);
        }
    });


    return {
        ...query,
        mutation,
    };
}