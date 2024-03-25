import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, {Marker} from "react-native-maps";

export default function App() {
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

  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  }
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
          mapType="standard"
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          userInterfaceStyle="dark"
          //maxZoomLevel={15}
          //minZoomLevel={5}
        >
          <Marker coordinate={localizacao}> 
          <Image source={require("./assets/ghost.png")} />
          </Marker>
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
