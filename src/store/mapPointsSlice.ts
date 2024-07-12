import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Point } from "../types/mapPoints";

type MapPointsState = {
    pointA: Point | null,
    pointB: Point | null,
    route: any
}

const initialState: MapPointsState = {
    pointA: null,
    pointB: null,
    route: null
};

const mapPointsSlice = createSlice({
    name: 'mapPoints',
    initialState,
    reducers: {
        setPointA(state, action: PayloadAction<Point>) {
            state.pointA = action.payload;
        },
        setPointB(state, action: PayloadAction<Point>) {
            state.pointB = action.payload;
        },
        updatePoint(state, action: PayloadAction<{ point: 'pointA' | 'pointB'; coords: Point }>)
        {
            state[action.payload.point] = action.payload.coords;
        },
        setRoute(state, action: PayloadAction<any>) {
            state.route = action.payload;
        }
    }
});

export const { setPointA, setPointB, updatePoint, setRoute } = mapPointsSlice.actions;

export default mapPointsSlice.reducer;