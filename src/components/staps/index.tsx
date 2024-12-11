import { View, Text } from "react-native";
import { styles } from "./style";
import { IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

interface StapsProps {
    title: string;
    description: string;
    icon: React.ComponentType<IconProps>;
}

export default function Staps({ title, description, icon:Icon }: StapsProps) {
    return (
        <View style={styles.container}>
            {Icon && <Icon size={32} color={colors.red.base}/>}
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}
