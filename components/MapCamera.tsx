import React, {useRef, useEffect} from 'react'
import {Camera} from '@rnmapbox/maps'

const MapCamera = () => {
    // Initial region set to 44.64332781897539, -63.58233697511372
    const lon = -63.58233697511372, lat = 44.64332781897539;
    const camera = useRef<Camera>(null);
    useEffect(() => {
    camera.current?.setCamera({
        centerCoordinate: [lon, lat],
        zoomLevel: 10,
    });
    }, []);
  return (
    <Camera ref={camera}/>
  )
}

export default MapCamera