import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/service/apit";
import { Categories, CategoryProps } from "@/components/categories";

export default function Home() {

  const [categories, setCategotries] = useState<CategoryProps>([]);

  async function fetchCategory() {
    try {
      const { data } = await api.get('/categories');
      setCategotries(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return <View style={{ flex: 1 }}>
    <Categories data={categories}/>
  </View>;
}
