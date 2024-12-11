import { Text, View } from "react-native";
import { style } from "./styles";

import { colors } from "@/styles/theme";

type Props = {
  title: string;
  description: string;
  icon?: React.ComponentType<any>; 
};

export function Step({ title, description, icon:Icon }: Props) {
  return (
    <View style={style.container}>
        {Icon && <Icon size={30} color={colors.red.base} />}
      <View style={style.details}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </View>
  );
}
