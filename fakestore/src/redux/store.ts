import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import { useDispatch } from "react-redux";
import thunk from "redux-thunk";

const store = configureStore ({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(thunk);
    },
    devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;