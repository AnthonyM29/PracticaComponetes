import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {StackNavigator} from './src/presentarion/navigator/StackNavigator';
import {ThemeProvider} from './src/presentarion/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

export default App;
