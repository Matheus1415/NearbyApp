import { ImageBackground, View } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router"

import { s } from "./styles"
import { Button } from "@/components/button"
import { colors } from "@/styles/colors";

type Props = {
  uri: string
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={s.container}>
      <View style={s.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.icon icon={(props) => <FontAwesome {...props} name="arrow-left" color={colors.gray[100]} size={18}/>} />
        </Button>
      </View>
    </ImageBackground>
  )
}
