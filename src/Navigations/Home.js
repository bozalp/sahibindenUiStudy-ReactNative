import { View, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import CategoryList from "./CategoryList";

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CategoryList" component={CategoryList} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Home;