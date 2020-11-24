import React from 'react';
import {View, Text, Image} from 'react-native';


const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#5a67f2',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style = {{fontWeight:"bold", fontSize:18}}>Navigation App</Text>
    </View>
  );
};

export default SplashScreen;
