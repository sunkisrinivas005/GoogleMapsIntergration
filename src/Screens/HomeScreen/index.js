import React , {useState, useEffect, useRef} from "react"
import {
    StyleSheet,
    View
  } from 'react-native';
  import { Modalize } from 'react-native-modalize';
import MapComponent from "./MapView";
import polyline from '@mapbox/polyline';
import {Location, APIKEY} from "@utils";
import ModalViewComponent from "./ModalViewComponent";

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });



   const HomeScreen = () => {
    let [code, decode] = useState([]);
    const modalizeRef = useRef(null);
   
    const getDirections = async() => {
        console.log("testing,,,")
      const mode = 'driving';
      const origin = Location.sourceString;
      const destination = Location.destinationString;
      try {
          let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`)
          let respJson = await resp.json();
          let points = polyline.decode(respJson.routes[0].overview_polyline.points);
          let coords = points.map((point, index) => {
              return  {
                  latitude : point[0],
                  longitude : point[1]
              }
          })
          decode(coords)
          return coords
      } catch(error) {
          return error
      }
  }
  
    useEffect(() => {
      getDirections()
      setTimeout(() => modalizeRef.current.open(), 5000)
    }, [])
  
    
    return(
      <View style={styles.container}>
       <MapComponent code = {code} />
      <Modalize 
      ref={modalizeRef}
      snapPoint={300}
      >
       <ModalViewComponent />
      </Modalize>
    </View>
    )
   }

   export default HomeScreen