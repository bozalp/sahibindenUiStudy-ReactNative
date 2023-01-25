import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, FlatList } from "react-native";

import Icons from '@expo/vector-icons/MaterialIcons';
import Details from '../JsonFiles/Details.json';

import { useSelector } from 'react-redux';

const ProductListPage = ({ route, navigation, image, title, location, price }) => {
    const theme = useSelector((state) => state.theme.theme)

    const [data, setData] = useState([{}]);
    const { category } = route.params;

    useEffect(() => {
        const datas = Details.filter(d => d.category === category);
        setData(datas);
    }, []);

    function GoProductPage(id) {
        navigation.navigate("AdvertPage", { id })
    }

    const renderItems = ({ item }) =>
        <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => GoProductPage(item.id)}>
                <Image key={item.id} source={{
                    uri: item?.images[0].toString(),
                }} style={styles.image} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={[styles.title, { color: theme.color }]}>
                        {item?.title}
                    </Text>
                    <View style={styles.location_area}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="location-on" size={20} color={'#666'} />
                            <Text style={{ color: '#666', paddingLeft: 5 }}>
                                {item?.location}
                            </Text>
                        </View>
                        <Text style={{ color: theme.priceColor, fontWeight: '700', fontSize: 15 }}>
                            {item?.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.seperate_line} />
        </View>
    return (
        data.length > 0 ?
            <FlatList style={{ flex: 1, backgroundColor: theme.backgroundColor }}
                data={Details.filter(d => d.category === category)}
                renderItem={renderItems}
            /> :
            <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
                <Text style={{ color: theme.color, padding:10 }}>
                    Burada hiç ilan yok...
                </Text>
            </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection: 'row',
            width: '100%',
            padding: 10,
            height: Dimensions.get('window').width / 3.5,
            alignItems: 'center'
        },
        image:
        {
            width: Dimensions.get('window').width / 3,
            height: Dimensions.get('window').width / 4,
            marginRight: 10,
        },
        title:
        {
            fontWeight: '700',
            fontSize: 16,
            paddingTop: 15,
        },
        location_area:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'flex-end',
            paddingBottom: 10,
        },
        seperate_line:
        {
            width: '100%',
            height: 1,
            backgroundColor: '#666'
        }
    }
)
export default ProductListPage;