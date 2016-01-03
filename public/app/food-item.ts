export interface FoodItem {
  id: number;
  name: string;
  canEat: boolean;
  Suggestions: { name: string, id: number }[];
  createdAt?: string;
  updatedAt?: string;
}
