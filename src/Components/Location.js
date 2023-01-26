import React, { useState, useEffect, } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = ({ coordinates }) => {
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