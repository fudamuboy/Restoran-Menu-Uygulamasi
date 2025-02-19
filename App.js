
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodView from './screens/FoodView';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { DrawerNavigator } from './DrawerNavigator';
import FavoritesContextProvider from './store/favoritescontext';





const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: 'white' },
          headerTintColor: 'black',
          contentStyle: { backgroundColor: '#c9c9c5' }
        }

        }>

          <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Food" component={FoodView} />
          <Stack.Screen name="FoodDetail" component={FoodDetailScreen} options={{ title: 'Contents' }} />


        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
