import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';

import InfoTableRow from "./InfoTableRow";
import Location from "./Location";
import Details from '../JsonFiles/Details.json';
const AdvertPage = () => {
    // const [images, setImages] = useState(Details.map((img) => img.images));
    const [data, setData] = useState([{}]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const datas = Details.find(d => d.id === 123456789);
        setData(datas);
        // Alert.alert(d.title)
    }, []);

    function changeTab(tabNo) {
        //0- İlan bilgileri  
        //1- Açıklama
        //2- Konum
        setActiveTab(tabNo);
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ color: 'white' }}>
                    {data.title}
                </Text>
            </View>
            {
                Details.map((img, key) => <Image key={key} source={{
                    uri: img.images[0].toString(),
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
                <TouchableOpacity style={[styles.altButtons, { backgroundColor: activeTab === 0 ? '#fec818' : '#000' }]} activeOpacity={0.7}
                    onPress={() => changeTab(0)}>
                    <Text style={{ color: 'white' }}>
                        İlan Bilgileri
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.altButtons, { backgroundColor: activeTab === 1 ? '#fec818' : '#000' }]} activeOpacity={0.7}
                    onPress={() => changeTab(1)}>
                    <Text style={{ color: 'white' }}>
                        Açıklama
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.altButtons, { backgroundColor: activeTab === 2 ? '#fec818' : '#000' }]} activeOpacity={0.7}
                    onPress={() => changeTab(2)}>
                    <Text style={{ color: 'white' }}>
                        Konumu
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
                {
                    activeTab === 0 ?
                        <View>
                            <InfoTableRow title={"Fiyat"} value={data.price} textColor='#37c1ff' />
                            <InfoTableRow title={"İlan Tarihi"} value={data.publishDate} textColor='#ccc' />
                            <InfoTableRow title={"İlan No"} value={data.id} textColor='#ff6600' />
                            <Text style={{ color: 'white' }}>
                                İlan tipine göre değişen bilgiler...
                            </Text>
                        </View>
                        :
                        activeTab === 1 ?
                            <View>
                                <Text style={{ color: 'white' }}>
                                    {data.description}
                                </Text>
                            </View> :
                            <View>
                                <Location />
                            </View>
                }
            </View>
        </View >
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
        },
    }
)

export default AdvertPage;