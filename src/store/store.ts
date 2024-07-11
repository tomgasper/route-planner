import { configureStore } from "@reduxjs/toolkit";
import mapPointsReducer from "./mapPointsSlice";

export const store = configureStore({
    reducer: {
        mapPoints: mapPointsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;