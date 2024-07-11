import './App.css'

import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <>
      <Map initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }} style={{width:600, height: 400}} mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      />
    </>
  )
}

export default App
