import Category from "../category";
import { FlatList } from "react-native";
import { style } from "./styles";

export type CategoryProps = {
  id: string;
  name: string;
}[];

type CategoriesProps = {
  data: CategoryProps;
  selected: string;
  onSelect: (id: string) => void;
};

export function Categories({ data, selected, onSelect }: CategoriesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={style.content}
      style={style.container}
    />
  )
}
