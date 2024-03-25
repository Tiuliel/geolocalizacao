import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [localizacao, setLocalizacao] = useState(
    {
      latitude: -33.867886,
      longitude: -63.987,
      latitudeDelta: 10,
      longitudeDelta: 10,
    }
  )
  /* coordenadas para MapView */
  const regiaoInicialMapa = {
    // Brasil
    //latitude: -10,
    //longitude: -55,

    // São Paulo
    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 40,
    longitudeDelta: 40,
  };

  /* Coordenadas para o Marker que sera aplicado ao Marker */

const marcarLocal = (event) => {
  console.log(event.nativeEvent);
  setLocalizacao({
    ...localizacao,
    latitude: event.nativeEvent.coordinate.latitude,
    longitude: event.nativeEvent.coordinate.longitude,
  });
}
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
        onPress={marcarLocal}
          mapType="standard"
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          userInterfaceStyle="dark"
          
        >
          <Marker coordinate={localizacao} />
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
