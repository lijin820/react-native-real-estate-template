import 'react-native-gesture-handler';
import React from 'react';
import {Platform} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ApartmentsScreen} from './src/screens/Apartments';

const endpointUrl =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3000/graphql'
    : 'http://localhost:3000/graphql';
const client = new ApolloClient({
  uri: endpointUrl,
  cache: new InMemoryCache(),
});

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Buscar" component={ApartmentsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
