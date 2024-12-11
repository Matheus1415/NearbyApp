import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const style = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 10,
    backgroundColor: colors.green.light,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
  },
})
