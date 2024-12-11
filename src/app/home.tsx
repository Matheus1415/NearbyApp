import { Alert, Text, View } from "react-native";
import { useEffect } from "react";
import { api } from "@/service/apit";

export default function Home() {
  async function fetchCategory() {
    try {
      const { data } = await api.get('/categories');
      console.log(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return <View style={{ flex: 1 }}></View>;
}
