import axios from 'axios';
import { AppDispatch } from '../store/store';
import { setRoute } from '../store/mapPointsSlice';
import { Point } from '../types/mapPoints';

const GRAPH_HOPPER_URL = 'http://localhost:8989/route/';
const GRAPH_HOPPER_PROFILE = 'car';

export const fetchRoute = (pointA: Point, pointB: Point) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(GRAPH_HOPPER_URL, {
      points: [
        [pointA.lng, pointA.lat],
        [pointB.lng, pointB.lat]
      ],
      profile: GRAPH_HOPPER_PROFILE,
      elevation: false,
      points_encoded: false,
    headers: {
        'Content-Type': 'application/json'
    }
    });
    dispatch(setRoute(response.data));
  } catch (error) {
    console.error('Error fetching route from Graphhopper', error);
  }
};