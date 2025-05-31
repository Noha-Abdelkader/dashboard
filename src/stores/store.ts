import { configureStore } from "@reduxjs/toolkit";

// reducers
import sidebarReducer from "@/stores/slices/sidebar-slice";

export const store = () => {

    return configureStore({
      reducer: {
        sidebar: sidebarReducer,
      },
    });
};


export type AppStore = ReturnType<typeof store >

export type RootState = ReturnType <AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
