import { View, Text, FlatList, StyleSheet } from "react-native";
import CategoryLine from "../Components/CategoryLine";
import categories from '../JsonFiles/Categories.json';


const CategoryList = () => {
    const renderItems = ({ item }) => <CategoryLine iconBackground={item.iconBackground} iconName={item.iconName} title={item.title} subTitle={item.subTitle} />

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>

            <FlatList
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
        searchBar:
        {
            height: 64,
            width: '100%'
        },
        footer:
        {
            height: 50,
            color: 'white',
            padding:10
        }
    }
)

export default CategoryList;