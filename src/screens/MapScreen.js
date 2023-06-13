import {StyleSheet, Text, View,Alert} from 'react-native';
import React from 'react';

import locations from '../utils/LocationList';
import MyMarker from '../components/MyMarker';
import MyMapView from '../components/MyMapView';
import useFetch from '../services/apiComponents/useFetch';

const MapScreen = () => {
  const {data, error, loading} = useFetch(
    'https://random-data-api.com/api/v2/users?size=10',
  );

  //console.log({data,loading,error})
  return (
    <View>
      <MyMapView
        children={locations.map((location, index) => {
          return(
            <MyMarker
            
       
            locationInfo={location} key={index} />
          );
        })}
      />
    </View>
  );
};

export default MapScreen;
