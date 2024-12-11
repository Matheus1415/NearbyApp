import { View, Text } from "react-native";
import { styles } from "./style";
import Staps from "../staps";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";


export default function Stap() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona: </Text>
      <Staps
        description="Veja locais perto de você que são parceiros Nearby"
        title="Encontre estabelecimentos"
        icon={IconMapPin}
      />
      <Staps
        description="Escaneie o código no estabelecimento para usar o benefício"
        title="Ative o cupom com QR Code"
        icon={IconQrcode}
      />
      <Staps
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento F"
        title="Garanta vantagens perto de você"
        icon={IconTicket}
      /> 
    </View>
  );
}
