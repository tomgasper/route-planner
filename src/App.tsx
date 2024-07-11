import './App.css'
import 'maplibre-gl/dist/maplibre-gl.css';

import Map from 'react-map-gl/maplibre';
import useWindowDimensions from './Hooks/useWindowDimensions';
import { WindowDimensions } from './types/ui';

function App() {
  const { height, width } : WindowDimensions = useWindowDimensions();

  return (
    <>
      <Map initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }} style={{width: width, height: height}} mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </>
  )
}

export default App