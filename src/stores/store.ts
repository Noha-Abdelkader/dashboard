import { configureStore } from "@reduxjs/toolkit";

// reducers
import sidebarReducer from "@/stores/slices/sidebar-slice";
import { postsApi } from "./services/posts";

export const store = () => {

    return configureStore({
      reducer: {
        sidebar: sidebarReducer,
        [postsApi.reducerPath]: postsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postsApi.middleware),
    });
};


export type AppStore = ReturnType<typeof store >

export type RootState = ReturnType <AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
