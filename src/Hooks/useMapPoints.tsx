import { useState } from 'react';
import { MapLayerMouseEvent } from 'react-map-gl/maplibre';

export interface MapPoints {
  pointA: { lng: number, lat: number } | null;
  pointB: { lng: number, lat: number } | null;
}

const useMapPoints = () => {
  const [mapPoints, setMapPoints] = useState<MapPoints>({
    pointA: null,
    pointB: null
  });

  const handleMapMouseClick = (e: MapLayerMouseEvent) => {
    const coordsMouseClick = e.lngLat;
    let newState: MapPoints;

    if ((mapPoints.pointA === null && mapPoints.pointB === null) || (mapPoints.pointA === null && mapPoints.pointB !== null)) {
      newState = {
        ...mapPoints,
        pointA: { lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }
      };
    } else {
      newState = {
        ...mapPoints,
        pointB: { lng: coordsMouseClick.lng, lat: coordsMouseClick.lat }
      };
    }

    setMapPoints(newState);
  };

  const handleMarkerDrag = (e: any, point: 'pointA' | 'pointB') => {
    const coordsMouseDrag = e.lngLat;
    setMapPoints(prevState => ({
      ...prevState,
      [point]: { lng: coordsMouseDrag.lng, lat: coordsMouseDrag.lat }
    }));
  };

  return { mapPoints, setMapPoints, handleMapMouseClick, handleMarkerDrag };
};

export default useMapPoints;