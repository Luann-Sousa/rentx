import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../Screens/Home';
import { CarDetails } from '../Screens/CardDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { SchedulingComplet } from '../Screens/SchedulingComplet';
import { MyCars } from '../Screens/MyCars';
import { CarDTO } from '../dtos/CarDTO'; 


export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDTO };
  Scheduling:{ car: CarDTO };
  SchedulingDetails: { car: CarDTO; dates: string[] };
  SchedulingComplet: undefined;
  MyCars: undefined;

};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes(){
  return(
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen 
        name='Home'
        component={ Home }
      />
       <Screen 
        name='CarDetails'
        component={ CarDetails }
      />
       <Screen 
        name='Scheduling'
        component={ Scheduling }
      />
       <Screen 
        name='SchedulingDetails'
        component={ SchedulingDetails }
      />
      <Screen 
        name='SchedulingComplet'
        component={ SchedulingComplet }
      />
      <Screen 
        name='MyCars'
        component={ MyCars }
      />
    </Navigator>
  )
}