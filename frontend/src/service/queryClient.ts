import axios from "axios";
import { QueryClient } from "react-query";

import UseAuth from "../hooks/useAtuth";

export const BASE_URL = 'http://localhost:3000';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey: [url] }) => {
                if (typeof url === 'string') {
                    const { data } = await axios.get(`${BASE_URL}/${url.toLowerCase()}`)
                    return data
                }
                throw new Error('Invalid QueryKey')
            },
        },
    },
});