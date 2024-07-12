import { useState, useEffect } from 'react';
import Map from 'react-map-gl/maplibre';
import { fetchRoute } from './services/graphhopperService';
import useMapPoints from './hooks/useMapPoints';
import useWindowDimensions from './hooks/useWindowDimensions';
import type { MapLayerMouseEvent } from 'react-map-gl/maplibre';
import RouteMarker from './components/RouteMarker';
import { WindowDimensions } from './types/ui';
import { useAppDispatch} from './hooks/reduxHooks';
import RouteLayer from './components/RouteLayer';
import './styles/MarkerStyles.css';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  const { height, width }: WindowDimensions = useWindowDimensions();
  const [viewState, setViewState] = useState({
    longitude: 13.357826,
    latitude: 52.514957,
    zoom: 14
  });
  const { mapPoints, setPointCoordsOnClick, setPointCoordsOnDragEnd } = useMapPoints();
  const dispatch = useAppDispatch();
  
  const onMapClick = (e: MapLayerMouseEvent) => {
    setPointCoordsOnClick(e);
  };

  const onMarkerDragEnd = (e : any, pointId : "pointA" | "pointB") => {
    setPointCoordsOnDragEnd(e, pointId);
  };

  useEffect(() => {
    if (mapPoints.pointA && mapPoints.pointB) {
      dispatch(fetchRoute(mapPoints.pointA, mapPoints.pointB));
    }
  }, [mapPoints.pointA, mapPoints.pointB, dispatch]);

  return (
    <>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        onClick={(e) => onMapClick(e) }
        style={{ width: width, height: height }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <RouteLayer route={mapPoints.route}/>
        {mapPoints.pointA &&
          <RouteMarker point={mapPoints.pointA} pointId='pointA' dragEndHandler={onMarkerDragEnd} />}
        {mapPoints.pointB && (
          <RouteMarker point={mapPoints.pointB} pointId='pointB' dragEndHandler={onMarkerDragEnd} />)}
      </Map>
    </>
  );
}

export default App;