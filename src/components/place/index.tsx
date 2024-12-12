import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { style } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export type PlaceProps = {
    id: string;
    name: string;
    description: string;
    cupons:number;
    cover:string;
    address: string;
}

type Props = TouchableOpacityProps & {
    data:PlaceProps
}

export  function Place({data, ...rest}:Props) {
  return (
    <TouchableOpacity style={style.container} {...rest}>
      <Image style={style.image} source={{uri:data.cover}} />
      <View style={style.content}>
        <Text style={style.name}> {data.name}</Text>
        <Text style={style.description}>{data.description}</Text>
        <View style={style.footer}>
          <Ionicons name="ticket-outline" size={16} color={colors.red.base} />
          <Text style={style.tickets}>{data.cupons} cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
