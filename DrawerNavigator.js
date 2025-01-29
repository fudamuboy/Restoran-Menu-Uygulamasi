const { createDrawerNavigator } = require("@react-navigation/drawer")
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import Entypo from '@expo/vector-icons/Entypo';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: 'black',
            contentStyle: { backgroundColor: 'gray' }
        }}>
            <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
                title: 'All Categories',
                drawerIcon: () => (
                    < Entypo name="list" size={24} color="blue" />
                )
            }} />
            <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
                drawerIcon: () => (
                    < Entypo name="star-outlined" size={24} color="blue" />
                )
            }} />
        </Drawer.Navigator>
    )
}
// avec list ve star-outlined kismin on peut afficher les logos favoris ou list vbbb