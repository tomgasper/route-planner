import { MapLayerMouseEvent } from 'react-map-gl/maplibre';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setPointA, setPointB, updatePoint } from '../store/mapPointsSlice';

import type { Point } from '../types/mapPoints';

const useMapPoints = () => {
  const dispatch = useAppDispatch();
  const mapPoints = useAppSelector((state) => state.mapPoints);

  const setPointCoordsOnClick = (e: MapLayerMouseEvent) => {
    const coordsMouseClick: Point = e.lngLat;
  
    if ((mapPoints.pointA === null && mapPoints.pointB === null) || (mapPoints.pointA === null && mapPoints.pointB !== null)) {
      dispatch(setPointA({ lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }));
    } else {
      dispatch(setPointB({ lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }));
    }
  };
  
  const setPointCoordsOnDragEnd = (e: any, point: 'pointA' | 'pointB') => {
    const coordsMouseDrag = e.lngLat;
    dispatch(updatePoint({ point, coords: { lng: coordsMouseDrag.lng, lat: coordsMouseDrag.lat }}));
  };

  return { mapPoints, setPointCoordsOnClick, setPointCoordsOnDragEnd }
}

export default useMapPoints;