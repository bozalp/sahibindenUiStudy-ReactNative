import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
//import Slideshow from 'react-native-image-slider-show';

import Details from '../JsonFiles/Details.json';
const AdvertPage = () => {
    // const [images, setImages] = useState(Details.map((img) => img.images));
    const [data, setData] = useState([{}]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        const datas = Details.find(d => d.id === 0);
        setData(datas);
        // Alert.alert(d.title)
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>
                    {data.title}
                </Text>
            </View>
            {
                Details.map((img, key) => <Image key={key} source={{
                    uri: img.images.toString(),
                }} style={styles.images} />)

            }
            <View style={styles.title}>
                <Text style={{ color: 'white', fontWeight: "700" }}>
                    {data.owner}
                </Text>
            </View>
            <View style={styles.sub_title}>
                <Text style={{ color: '#37c1ff' }}>
                    {data.subTitle}
                </Text>
                <Text style={{ color: '#999' }}>
                    {data.location}
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={[styles.altButtons, { backgroundColor: '#fec818' }]} activeOpacity={0.7}>
                    <Text style={{ color: 'black' }}>
                        İlan Bilgileri
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.altButtons} activeOpacity={0.7}>
                    <Text style={{ color: 'white' }}>
                        Açıklama
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.altButtons} activeOpacity={0.7}>
                    <Text style={{ color: 'white' }}>
                        Konumu
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#000',
            //height: '100%'
        },
        images:
        {
            width: '100%',
            height: 250
        },
        title:
        {
            width: '100%',
            height: 48,
            backgroundColor: '#111',
            justifyContent: 'center',
            alignItems: 'center'
        },
        sub_title:
        {
            width: '100%',
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
        },
        button:
        {
            padding: 7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: '#ccc'
        },
        altButtons:
        {
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 3
        }
    }
)

export default AdvertPage;