import React, { useState, useEffect } from "react";
import {StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Location} from "@utils";

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });



const MapComponent = (props) => {
   let [data, setData] = useState([]);

    useEffect(() => {
        console.log("props...", props)
        setData(props.code)
    }, [props.code])
    return(
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={Location.mainApp}
      >
    <MapView.Marker.Animated
         coordinate={Location.source}
       />
       <MapView.Marker.Animated
         coordinate={Location.destination}
       />
        <MapView.Polyline 
            coordinates={data && data}
            strokeWidth={3}
            strokeColor="black"/>
       
      </MapView>
    )
}

export default MapComponent