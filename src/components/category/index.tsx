import { Text, Pressable, PressableProps } from "react-native";
import { style } from "./styles";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

const categoriesIcons: Record<string, React.ComponentType<any>> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": MaterialIcons, // Utensílios de cozinha
  "52e81585-f71a-44cd-8bd0-49771e45da44": FontAwesome, // Sacola de compras
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": MaterialIcons, // Cama
  "826910d4-187d-4c15-88f4-382b7e056739": Ionicons, // Filme
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": FontAwesome, // Café
};

const categoriesIconNames: Record<string, string> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": "kitchen", // MaterialIcons
  "52e81585-f71a-44cd-8bd0-49771e45da44": "shopping-bag", // FontAwesome
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": "bed", // MaterialIcons
  "826910d4-187d-4c15-88f4-382b7e056739": "film", // Ionicons
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": "coffee", // FontAwesome
};

type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export default function Category({
  iconId,
  isSelected = false,
  name,
  ...rest
}: Props) {
  const Icon = categoriesIcons[iconId];
  const iconName = categoriesIconNames[iconId];

  return (
    <Pressable style={[style.container, isSelected && style.containerSelected]} {...rest}>
      <Icon name={iconName} size={24} color={colors.gray[isSelected? 100:400]}/>
      <Text style={[style.name, isSelected && style.nameSelected]}>{name}</Text>
    </Pressable>
  );
}
