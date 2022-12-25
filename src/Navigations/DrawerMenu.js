import { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import CategoryLine from "../Components/CategoryLine";
import categories from '../JsonFiles/Categories.json';

import { useNavigation } from '@react-navigation/native';
import Icons from '@expo/vector-icons/FontAwesome';
import Icons2 from '@expo/vector-icons/Ionicons';

const CustomButton = ({ title, iconName, whichPage }) => {
    const navigation = useNavigation();

    function GoOtherPage() {
        navigation.navigate(whichPage);
    }

    return (
        <TouchableOpacity style={styles.header_button} activeOpacity={0.7} onPress={GoOtherPage}>
            <Icons2 name={iconName} size={20} color="#fff" />
            <Text style={styles.header_title}>
                {title}
            </Text>
            <Icons name={"angle-right"} size={20} color="#fff" style={{ position: "absolute", right: 0, }} />
        </TouchableOpacity>
    )
}
const DrawerMenu = ({ navigation }) => {
    const [theme, setTheme] = useState("dark");

    function getTitle(title) {
        if (title.length > 20)
            return title.slice(0, 20) + "..."
        else
            return title;
    }

    function changeTheme() {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    const renderItems = ({ item }) => <CategoryLine iconBackground={item.iconBackground} iconName={item.iconName} title={getTitle(item.title)} subTitle={getTitle(item.subTitle)} isMenu={true} />

    return (
        <View style={{ flex: 1, backgroundColor: theme === "dark" ? 'black' : 'white' }}>

            <FlatList
                ListHeaderComponent={
                    <View style={styles.header}>
                        <CustomButton title={"Anasayfa"} iconName={"home"} whichPage={"CategoryList"} />
                        <CustomButton title={"Bana Özel"} iconName={"person"} />
                        <CustomButton title={"İlan Ver"} iconName={"add"} />
                    </View>
                }
                ListFooterComponent={
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.mode_button} onPress={changeTheme}>
                            <Icons2 name={theme === "dark" ? 'sunny' : 'moon'} size={28} color={theme === "dark" ? 'white' : 'black'} />
                            <Text style={{ paddingLeft: 10, color: theme === "dark" ? 'white' : 'black' }}>
                                {
                                    theme === "dark" ? "Gündüz modu" : "Gece Modu"
                                }
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ color: theme === "dark" ? 'white' : 'black' }}>
                            Batuhan ÖZALP - github.com/bozalp
                        </Text>
                    </View>
                }
                data={categories}
                renderItem={renderItems} />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        footer:
        {
            height: 100,
            padding: 10,
        },
        mode_button:
        {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
        },
        header:
        {
            paddingTop: 60,
            padding: 18,
            backgroundColor: '#195e90',
            height: 200,
            width: '100%',
        },
        header_button:
        {
            height: 50,
            flexDirection: 'row',
        },
        header_title:
        {
            color: 'white',
            paddingLeft: 20,
            fontSize: 16,
        }
    }
)

export default DrawerMenu;