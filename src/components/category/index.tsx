import { Text, Pressable, PressableProps } from "react-native";
import { style } from "./styles";

type Props = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export default function Category({iconId, isSelected = false, name, ...rest}: Props) {
  return (
    <Pressable
      style={[style.container]}
      {...rest}
    >
      <Text>{name}</Text>
    </Pressable>
  );
}
