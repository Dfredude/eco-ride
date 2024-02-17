import React, {useRef, useState, useEffect} from 'react';
import Mapbox, {Camera, MarkerView, Image} from '@rnmapbox/maps';
import { View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import MapCamera from './MapCamera';

Mapbox.setAccessToken("sk.eyJ1Ijoia2FuaXNoazAxIiwiYSI6ImNsc2d4endpZjFiOWsyaXBxNXlxbzJhc2IifQ.9ptlcm-JO-S6OBrA60acoQ");

const Map = () => {
  // Initial region set to longitude: -63.58233697511372, latitude: 44.64332781897539
  const initial_coordinates = [-63.58233697511372, 44.64332781897539]
  const halifaxBoundingCoordinates = {
    minLat: 44.62497756750548,
    maxLat: 44.67407574190784,
    minLon: -63.56606458532189,
    maxLon: -63.643802022498804
};
  function generateRandomCoordinate(minLat, maxLat, minLon, maxLon) {
    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lon = Math.random() * (maxLon - minLon) + minLon;
    return [lon, lat];
  }

  const numberOfBicycles = 20;
  const bicycleCoordinates = Array.from({ length: numberOfBicycles }, () =>
      generateRandomCoordinate(halifaxBoundingCoordinates.minLat, halifaxBoundingCoordinates.maxLat, halifaxBoundingCoordinates.minLon, halifaxBoundingCoordinates.maxLon)
  );

  return (
    <Mapbox.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/mapbox/navigation-night-v1"
        rotateEnabled={true}
        >
        <MapCamera />
        {
          bicycleCoordinates.map((coordinate, index) => {
            return (
                <Mapbox.PointAnnotation
                    key={index}
                    id={`bicycle-${index}`}
                    title='Cycle!'
                    coordinate={coordinate}>
                    <Mapbox.Callout title='Cycle' />
                </Mapbox.PointAnnotation>
            );
          })
        }
        <Mapbox.PointAnnotation
            key='9090'
            id="userAnnotation"
            title="You"
            coordinate={initial_coordinates}>
            <Mapbox.Callout title={'You'}><Text>You</Text></Mapbox.Callout>
        </Mapbox.PointAnnotation>
      </Mapbox.MapView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});

export default Map;