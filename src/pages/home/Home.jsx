import { FoodExperience } from "../../components/food-experience/FoodExperience";
import { Hero } from "../../components/hero/Hero";
import { PopularFoodItems } from "../../components/popular-food-items/PopularFoodItems";

export const Home = () => {
  return (
    <div>
      <Hero />
      <FoodExperience />
      <PopularFoodItems />
    </div>
  );
};
