import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Details from '../JsonFiles/Details.json';

const Location = ({ coordinates }) => {
    const [data, setData] = useState([{}]);
    /*const [coordinateList, setcoordinates] = useState({
        key: 0,
        latitude: 37,
        longitude: 28,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });*/

    useEffect(() => {
        //Alert.alert(coordinates.toString());
    }
        , []);

    /*useEffect(() => {
        //const datas = Details.find(d => d.id === id);
       // setData(datas);
        setcoordinates({
            key: datas.id,
            latitude: datas.location_points.lat,
            longitude: datas.location_points.long,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        })
    }, []);*/

    return (
        <View>
            <MapView style={styles.map} region={{
                key: 0,
                latitude: coordinates?.lat,
                longitude: coordinates?.long,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
                mapType="standard">
                <Marker
                    coordinate={{
                        key: 0,
                        latitude: coordinates?.lat,
                        longitude: coordinates?.long,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    title="Konum"
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        map:
        {
            width: '100%',
            height: 300
        }
    }
)

export default Location;