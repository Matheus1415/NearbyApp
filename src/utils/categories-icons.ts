import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

export const categoriesIcons: Record<string, React.ComponentType<any>> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": MaterialIcons, // Ícone de utensílios de cozinha
  "52e81585-f71a-44cd-8bd0-49771e45da44": FontAwesome, // Ícone de sacola de compras
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": MaterialIcons, // Ícone de cama
  "826910d4-187d-4c15-88f4-382b7e056739": Ionicons, // Ícone de filme
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": FontAwesome, // Ícone de café
};

export const categoriesIconNames: Record<string, string> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": "kitchen",
  "52e81585-f71a-44cd-8bd0-49771e45da44": "shopping-bag",
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": "bed",
  "826910d4-187d-4c15-88f4-382b7e056739": "film",
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": "coffee",
};
