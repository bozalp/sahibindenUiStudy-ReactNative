import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CategoryLine from "../Components/CategoryLine";
import categories from '../JsonFiles/Categories.json';

import Icons from '@expo/vector-icons/FontAwesome';

const CustomButton = ({ title, iconName }) => {
    return (
        <TouchableOpacity style={styles.header_button} activeOpacity={0.7}>
            <Icons name={iconName} size={20} color="#fff" />
            <Text style={styles.header_title}>
                {title}
            </Text>
            <Icons name={"angle-right"} size={20} color="#fff" style={{position:"absolute", right: 0,}}/>
        </TouchableOpacity>
    )
}
const DrawerMenu = () => {

    function getTitle(title) {
        if (title.length > 20)
            return title.slice(0, 20) + "..."
        else
            return title;
    }

    const renderItems = ({ item }) => <CategoryLine iconBackground={item.iconBackground} iconName={item.iconName} title={getTitle(item.title)} subTitle={getTitle(item.subTitle)} isMenu={true} />

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>

            <FlatList
                ListHeaderComponent={
                    <View style={styles.header}>
                        <CustomButton title={"Anasayfa"} iconName={"home"} />
                        <CustomButton title={"Bana Özel"} iconName={"user"} />
                        <CustomButton title={"İlan Ver"} iconName={"plus"} />
                    </View>
                }
                ListFooterComponent={
                    <Text style={styles.footer}>
                        Batuhan ÖZALP - github.com/bozalp
                    </Text>
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
            height: 72,
            color: 'white',
            padding: 10,
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
            paddingLeft: 24,
            fontSize: 16,
        }
    }
)

export default DrawerMenu;