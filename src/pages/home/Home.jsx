import { BookTable } from "../../components/book-table/BookTable";
import { CustomerReviews } from "../../components/customer-reviews/CustomerReviews";
import { FoodExperience } from "../../components/food-experience/FoodExperience";
import { Hero } from "../../components/hero/Hero";
import { PopularFoodItems } from "../../components/popular-food-items/PopularFoodItems";

export const Home = () => {
  return (
    <div>
      <Hero />
      <FoodExperience />
      <PopularFoodItems />
      <BookTable />
      <CustomerReviews />
    </div>
  );
};
