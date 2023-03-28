import * as React from 'react'
import BrandContainer from './brands/BrandContainer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ShoppingListContainer from './shopping/ShoppingListContainer';

function TestComponent() {
  return (
    <div>TestComponent</div>
  )
}

const Tab = createMaterialTopTabNavigator();

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app" >
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Brands" component={BrandContainer} />
            <Tab.Screen name="Shopping list" component={ShoppingListContainer} />
            <Tab.Screen name="Seasonals" component={TestComponent} />
            <Tab.Screen name="FAQ" component={TestComponent} />
          </Tab.Navigator>
        </NavigationContainer>
      </div>
    );
  }
}

export default App;