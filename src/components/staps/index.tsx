import { View, Text } from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons"; 

import { style } from "./styles";
import { Step } from "../stap";

export function Steps() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Veja como funciona:</Text>

      <Step
        icon={(props) => <MaterialIcons {...props} name="place" />} 
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step
        icon={(props) => <FontAwesome {...props} name="qrcode" />} 
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={(props) => <Ionicons {...props} name="ticket" />} 
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  );
}
