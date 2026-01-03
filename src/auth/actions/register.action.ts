import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interfaces/auth.response";
import type { AxiosError } from "axios";

export interface ApiError {
    message: string[];
    error: string;
    statusCode: number;
}



export const registerAction = async (fullName: string, email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
            fullName,
            email,
            password
        });

        return data;


    } catch (error) {

        const axiosError = error as AxiosError<ApiError>;

        const apiErrorMessage = axiosError.response?.data.message;

        if (apiErrorMessage) {
            throw apiErrorMessage;
        }

        throw ["Error inesperado"];
    }
}