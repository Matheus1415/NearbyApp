import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/service/apit";
import { Categories, CategoryProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import Places from "@/components/places";

type MarketsProps = PlaceProps

export default function Home() {

  const [categories, setCategotries] = useState<CategoryProps>([]);
  const [category, setCategory] = useState<string>("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  async function fetchCategory() {
    try {
      const { data } = await api.get('/categories');
      setCategotries(data);
      setCategory(data[0].id);
    } catch (error) {
      console.error(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  async function fetcMarkets(){
    try {
      if(!category){
        return 
      }
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);

    } catch (error) {
      console.error(error);
      Alert.alert("Locais", "Não foi possível carregar os Locais.")
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    fetcMarkets();
  }, [category]);

  return <View style={{ flex: 1,backgroundColor: "#CECECE" }}>
    <Categories data={categories} onSelect={setCategory} selected={category}/>
    <Places data={markets}/>
  </View>;
}
