import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  arrowLeft,
  arrowRight,
  leftSideImg,
  product1,
  product2,
  product3,
  product4,
} from "../../assets/assets";
import { Container } from "../Container";

export const PopularFoodItems = () => {
  return (
    <div className="relative bg-[#FBF7F2] px-4 py-[120px] overflow-hidden flex items-center">
      <Container className="w-full">
        {/* Decorative Shape */}
        <div className="absolute left-0 top-0 h-full w-32">
          <div className="absolute left-0 top-1/4 h-64 w-32 bg-gradient-to-r from-orange-200/20 to-transparent rounded-r-full transform -rotate-45" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto relative">
          {/* Header */}

          <div className="mb-12 flex justify-between items-center">
            <div className="">
              <p className="text-xl font-semibold text-color-red mb-2 flex items-center">
                <span className="size-2 bg-color-red mr-2" />
                Crispy, Every Bite Taste
              </p>
              <h2 className="text-[62px] font-medium font-bebas">
                POPULAR FOOD ITEMS
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md">
                <img src={arrowLeft} className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md">
                <img src={arrowRight} className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Food Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FoodCard
              image={product1}
              title="VEGETABLES BURGER"
              description="Barbecue Italian cuisine pizza"
            />
            <FoodCard
              image={product2}
              title="SPACIAL PIZZA"
              description="Barbecue Italian cuisine pizza"
            />
            <FoodCard
              image={product3}
              title="SPACIAL FRENCH FRIES"
              description="Barbecue Italian cuisine"
            />
            <FoodCard
              image={product4}
              title="CUISINE CHICKEN"
              description="Japanese Cuisine Chicken"
            />
          </div>
        </div>
      </Container>
      <img
        className="absolute bottom-0 -left-[400px] h-[492px] -rotate-[90deg]"
        src={leftSideImg}
        alt=""
      />
    </div>
  );
};

function FoodCard({ image, title, description }) {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-center text-center text-[#0A1425]">
        <div className="h-[124px]">
          <img src={image} alt={title} className="w-40 h-full object-contain" />
        </div>
        <hr className="border-2 border-color-red w-[20%] my-6" />
        <h3 className="text-2xl font-medium font-bebas">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
