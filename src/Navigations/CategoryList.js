import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import CategoryLine from "../Components/CategoryLine";
import categories from '../JsonFiles/Categories.json';

const SearchBar = () => {
    const [text, setText] = useState('');
    return (
        <View style={styles.searchBar_area}>
            <TextInput placeholder="Kelime veya ilan No. ile ara"
                onChangeText={newText => setText(newText)} style={styles.searchBar} />
        </View>
    )
}

const CategoryList = ({ navigation }) => {

    const renderItems = ({ item }) => <CategoryLine iconBackground={item.iconBackground} iconName={item.iconName} category={item.category} title={item.title} subTitle={item.subTitle} />

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <FlatList
                ListHeaderComponent={
                    <SearchBar />
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
        searchBar:
        {
            height: 50,
            width: '100%',
            backgroundColor: '#999',
            borderWidth: 1,
            borderColor: '#dedede',
            padding: 10,
            margin: 10,
        },
        searchBar_area:
        {
            height: 72,
            width: '100%',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#111',
        },
        footer:
        {
            height: 50,
            color: 'white',
            padding: 10
        }
    }
)

export default CategoryList;