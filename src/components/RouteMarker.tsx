import { FC } from 'react';
import { Marker } from 'react-map-gl/maplibre';
import type { Point } from '../types/mapPoints';

interface RouteMarkerProps {
    point : Point,
    pointId : 'pointA' | 'pointB',
    dragEndHandler : (e: any, pointId: 'pointA' | 'pointB') => void
};

const RouteMarker: FC<RouteMarkerProps> = ({point, pointId, dragEndHandler}) => {
    if (pointId === 'pointA') {
        return (
            <>
            <Marker
                    longitude={point.lng}
                    latitude={point.lat}
                    draggable
                    onDragEnd={(e) => { dragEndHandler(e, "pointA"); }}
                    ><div className="marker marker-start">
                    A
                </div></Marker>
            </>
        )
    } else {
        return (
            <>
            <Marker
                    longitude={point.lng}
                    latitude={point.lat}
                    draggable
                    onDragEnd={(e) => dragEndHandler(e, "pointB")}
                    ><div className="marker marker-end">
                    B
                </div></Marker>
            </>
        )
    }
}

export default RouteMarker;