import { Layer, Source } from 'react-map-gl';
import { useAppSelector } from '../hooks/reduxHooks';
import type { FeatureCollection } from 'geojson';
import { FC } from 'react';

const RouteLayer : FC<any> = ({ route })  => {
  if (!route) return null;

  const routeGeoJSON: FeatureCollection = {
    type: 'FeatureCollection',
    features: route.paths.map((path: any) => ({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: path.points.coordinates
      },
      properties: {}
    }))
  };

  console.log(route);

  return (
    <Source id="route" type="geojson" data={routeGeoJSON}>
      <Layer
        id="route"
        type="line"
        paint={{
          'line-color': '#888',
          'line-width': 8
        }}
      />
    </Source>
  );
};

export default RouteLayer;
