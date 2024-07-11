import { MapLayerMouseEvent } from 'react-map-gl/maplibre';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { setPointA, setPointB, updatePoint } from '../store/mapPointsSlice';

import type { Point } from '../types/mapPoints';


const mapPointsController = () => {
  const dispatch = useAppDispatch();
  const mapPoints = useAppSelector((state => state.mapPoints));

  const handleMapMouseClick = (e: MapLayerMouseEvent) => {
    const coordsMouseClick : Point = e.lngLat;

    // Point A and Point B not added yet OR Point B added and Point A deleted ---> assign position from mouse click to Point A
    if ((mapPoints.pointA === null && mapPoints.pointB === null) || (mapPoints.pointA === null && mapPoints.pointB !== null)) {
      dispatch(setPointA({ lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }));
    // Point A and Point B already added OR only Point A added ---> assign position from mouse click to Point B
    } else {
      dispatch(setPointB({ lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }));
    }
  };

  const handleMarkerDrag = (e: any, point: 'pointA' | 'pointB') => {
    const coordsMouseDrag = e.lngLat;
    dispatch(updatePoint({ point, coords: { lng: coordsMouseDrag.lng, lat: coordsMouseDrag.lat }}));
  };

  return { mapPoints, handleMapMouseClick, handleMarkerDrag };
};

export default mapPointsController;