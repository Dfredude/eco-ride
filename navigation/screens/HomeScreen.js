import * as React from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text,Button, } from 'react-native';
import {StyleSheet} from 'react-native';
import Mapbox from '@rnmapbox/maps';
import Map from '../../components/Map';
import {StopwatchApp} from './StopwatchApp'

export default function HomeScreen({ navigation }) {

  const [stopwatchStarted, setStopwatchStarted] = React.useState(false);
  const handleStartStopwatch = (res) => {
    if(res){
      setStopwatchStarted(!stopwatchStarted);
    }
    
  };
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Map></Map>
          <View style={styles.buttonContainer}>
          <Button
          title={stopwatchStarted ? 'Stop' : 'Start'} onPress={() =>{  return handleStartStopwatch(true), <StopwatchApp></StopwatchApp>}}/>
          </View>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16, // Adjust bottom spacing as needed
    right: 16, // Adjust right spacing as needed
  },
});