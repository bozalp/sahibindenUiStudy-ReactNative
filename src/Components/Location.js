import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
    const [coordinateList, setcoordinates] = useState({
        key: 0,
        latitude: 37,
        longitude: 28,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    return (
        <View>
            <MapView style={styles.map} region={{
                key: 0,
                latitude: 40.146720,
                longitude: 26.408587,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} 
            mapType="standard">
                <Marker
                    // key={index}
                    coordinate={{
                        key: 0,
                        latitude: 40.146720,
                        longitude: 26.408587,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    title="Konum"
                //description={marker.description}
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