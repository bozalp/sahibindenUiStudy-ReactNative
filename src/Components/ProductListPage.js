import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Dimensions, FlatList } from "react-native";

import Icons from '@expo/vector-icons/MaterialIcons';
import Details from '../JsonFiles/Details.json';

const ProductListPage = ({ image, title, location, price }) => {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        const datas = Details.filter(d => d.categori === "vasita");
        setData(datas);
        //Alert.alert(datas.toString())
    }, []);

    const renderItems = ({ item }) =>
        <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.container}>
                <Image key={item.id} source={{
                    uri: item?.images[0].toString(),
                }} style={styles.image} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={[styles.title, { color: "#fff" }]}>
                        {item?.title}
                    </Text>
                    <View style={styles.location_area}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="location-on" size={20} color={'#666'} />
                            <Text style={{ color: '#666', paddingLeft: 5 }}>
                                {item?.location}
                            </Text>
                        </View>
                        <Text style={{ color: '#1f66a6', fontWeight: '700', fontSize: 15 }}>
                            {item?.price}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.seperate_line} />
        </View>
    return (
        <FlatList style={{ flex: 1, backgroundColor: '#000' }}
            data={Details.filter(d => d.categori === "vasita")}
            renderItem={renderItems}
        //ItemSeparatorComponent={ }
        />
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection: 'row',
            width: '100%',
            padding: 10,
            //backgroundColor: 'lightblue',
            height: Dimensions.get('window').width / 3.5,
            alignItems: 'center'
        },
        image:
        {
            width: Dimensions.get('window').width / 3,
            height: Dimensions.get('window').width / 4,
            marginRight: 10,
            //resizeMode: "repeat",
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
            //backgroundColor: 'red',
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