import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";

import UseAuth from "./useAtuth";

const useAxiosPrivate = () => {
    const { auth } = UseAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (config.headers && !config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth}`;
                    console.log(auth);
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
        };
    }, [auth]);

    return axiosPrivate;
}

export default useAxiosPrivate;