import Category from "../category";
import { FlatList } from "react-native";

export type CategoryProps = {
    id:string;
    name: string;
}[]

type CategoriesProps = {
    data:CategoryProps
}

export function Categories({ data }:CategoriesProps) {
  return <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Category name={item.name} iconId={item.id} />}
   />
}
