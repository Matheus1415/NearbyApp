import { View } from "react-native"

import { Welcome } from "@/components/welcome"
import Stap from "@/components/stap"

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Welcome />
      <Stap/>
    </View>
  )
}