import { StyleSheet } from "react-native"
import { colors } from "@/styles/theme"

export const style = StyleSheet.create({
  container: {
    maxHeight: 36,
    position: "absolute",
    zIndex: 1,
    gap:10,
    top: 64,
    paddingLeft:15,
    paddingRight:15,
  },
  content: {
    gap: 8,
    paddingHorizontal: 24,
  },
})
