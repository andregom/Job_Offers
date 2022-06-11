import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(url, options)
            .then(response => {
                setData(response.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return { data, error, isLoading }
}