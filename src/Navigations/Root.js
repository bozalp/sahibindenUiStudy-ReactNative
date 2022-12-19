import { View, Text, FlatList, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CategoryList from './CategoryList';
import Home from './Home';

const Drawer = createDrawerNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                drawerStyle: {
                    backgroundColor: '#000',
                    width: 240,
                },
            }}>
                <Drawer.Screen name="Home" component={Home} options={{
                    headerTitle: 'Özalpten.com',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#175f92' },
                }} />
                <Drawer.Screen name="CategoryList" component={CategoryList} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Root;