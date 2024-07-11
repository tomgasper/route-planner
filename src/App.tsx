import 'maplibre-gl/dist/maplibre-gl.css';

import { useState } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import useWindowDimensions from './Hooks/useWindowDimensions';
import { WindowDimensions } from './types/ui';

import useMapPoints from './Hooks/useMapPoints';

import './styles/MarkerStyles.css';

function App() {
  const { height, width }: WindowDimensions = useWindowDimensions();
  const [viewState, setViewState] = useState({
    longitude: 21.0009,
    latitude: 52.23,
    zoom: 14
  });

  const { mapPoints, handleMapMouseClick, handleMarkerDrag } = useMapPoints();

  return (
    <>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        onClick={(e) => handleMapMouseClick(e)}
        style={{ width: width, height: height }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        {mapPoints.pointA && (
          <Marker
            longitude={mapPoints.pointA.lng}
            latitude={mapPoints.pointA.lat}
            draggable
            onDragEnd={(e) => handleMarkerDrag(e, 'pointA')}
          ><div className="marker marker-start">
          A
        </div></Marker>
        )}
        {mapPoints.pointB && (
          <Marker
            longitude={mapPoints.pointB.lng}
            latitude={mapPoints.pointB.lat}
            draggable
            onDragEnd={(e) => handleMarkerDrag(e, 'pointB')}
          ><div className="marker marker-end">
          B
        </div></Marker>
        )}
      </Map>
    </>
  );
}

export default App;