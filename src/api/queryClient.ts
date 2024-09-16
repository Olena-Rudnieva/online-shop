"use client";

import { QueryCache, QueryClient } from '@tanstack/react-query';
import { LOCAL_STORAGE_KEYS } from '../constant';


export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,          
        },
    },

    queryCache: new QueryCache({
        onError: async (error: any) => {
            if (error?.response.status === 403) {
                localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
                localStorage.removeItem(LOCAL_STORAGE_KEYS.LOGGED_IN);
            }
        },
    }),
});
