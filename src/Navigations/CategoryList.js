import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from "react-native";
import CategoryLine from "../Components/CategoryLine";
import categories from '../JsonFiles/Categories.json';

import { useSelector } from 'react-redux';

const SearchBar = () => {
    const theme = useSelector((state) => state.theme.theme)
    const [text, setText] = useState('');

    return (
        <View style={[styles.searchBar_area, { backgroundColor: theme.backgroundColor }]}>
            <TextInput placeholder="Kelime veya ilan No. ile ara"
            placeholderTextColor={'#969696'}
                onChangeText={newText => setText(newText)} style={[styles.searchBar, { color: theme.color }]} />
        </View>
    )
}

const CategoryList = ({ navigation }) => {
    const theme = useSelector((state) => state.theme.theme)

    const renderItems = ({ item }) => <CategoryLine theme={theme} iconBackground={item.iconBackground} iconName={item.iconName} category={item.category} title={item.title} subTitle={item.subTitle} />

    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            <FlatList
                ListHeaderComponent={
                    <SearchBar />
                }
                ListFooterComponent={
                    <Text style={[styles.footer, { color: theme.color }]}>
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
            borderWidth: 1,
            borderColor: '#969696',
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
        },
        footer:
        {
            height: 50,
            padding: 10
        }
    }
)

export default CategoryList;