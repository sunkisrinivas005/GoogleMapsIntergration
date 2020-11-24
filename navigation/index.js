import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {routes} from './routes';
import {SplashScreen} from '@Screens';


const Stack = createStackNavigator();

const Navigation = () => {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {loading && (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        )}
        {routes.map((i, n) => {
          let {name, component} = i;
          return <Stack.Screen key={n} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
