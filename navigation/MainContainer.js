import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingScreen';

//Screen names
const homeName = "Home";
const detailsName = "Account";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // initialRouteName={homeName}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     let rn = route.name;

        //     if (rn === homeName) {
        //       iconName = focused ? 'circle-thin' : 'home-outline';

        //     } else if (rn === detailsName) {
        //       iconName = focused ? 'times' : 'person-circle';

        //     } else if (rn === settingsName) {
        //       iconName = focused ? 'settings' : 'settings-outline';
        //     }

        //     // You can return any component that you like here!
        //     return <Icon name={iconName} size={size} color={color} />;
        //   },
        // })}
        >

        
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;