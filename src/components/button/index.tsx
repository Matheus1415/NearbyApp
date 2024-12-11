import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { style as stylePrimary } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[stylePrimary.container, style]}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={stylePrimary.title}>{children}</Text>;
}

type IconProps = {
    icon?: React.ComponentType<any>; 
}

function Icon({icon:Icon}: IconProps) {
    return <Icon size={30} color={colors.red.base} />;
}

Button.title = Title;
Button.icon = Icon;

export { Button };
