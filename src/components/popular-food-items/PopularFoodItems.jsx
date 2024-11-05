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
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const PopularFoodItems = () => {
  return (
    <div className="relative bg-[#FBF7F2] p-[30px] md:p-0 md:py-[120px] overflow-hidden flex items-center">
      <Container className="w-full z-20">
        {/* Decorative Shape */}
        <div className="absolute left-0 top-0 h-full w-32">
          <div className="absolute left-0 top-1/4 h-64 w-32 bg-gradient-to-r from-orange-200/20 to-transparent rounded-r-full transform -rotate-45" />
        </div>

        {/* Header */}

        <div className="mb-[30px] md:mb-12 flex justify-between items-center">
          <div className="">
            <p className="text-base md:text-xl font-semibold text-color-red mb-2 flex items-center">
              <span className="size-2 bg-color-red mr-2" />
              Crispy, Every Bite Taste
            </p>
            <h2 className="text-[48px] md:text-[62px] font-medium font-bebas">
              POPULAR FOOD ITEMS
            </h2>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md prev-btn">
              <img src={arrowLeft} className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md next-btn">
              <img src={arrowRight} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4, // 4 slides on lg screens
              },
              768: {
                slidesPerView: 2, // 2 slides on md screens
              },
              0: {
                slidesPerView: 1, // 1 slide on smaller screens
              },
            }}
            spaceBetween={32}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <FoodCard
                image={product1}
                title="VEGETABLES BURGER"
                description="Barbecue Italian cuisine pizza"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={product2}
                title="SPACIAL PIZZA"
                description="Barbecue Italian cuisine pizza"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={product3}
                title="SPACIAL FRENCH FRIES"
                description="Barbecue Italian cuisine"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FoodCard
                image={product4}
                title="CUISINE CHICKEN"
                description="Japanese Cuisine Chicken"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="lg:hidden flex gap-4 justify-center items-center mt-3">
          <button className="p-2 rounded-full bg-white size-[40px] flex justify-center items-center shadow-md prev-btn">
            <img src={arrowLeft} className="size-4" />
          </button>
          <button className="p-2 rounded-full bg-white size-[40px] flex justify-center items-center shadow-md next-btn">
            <img src={arrowRight} className="size-4" />
          </button>
        </div>
      </Container>
      <img
        className="hidden lg:flex absolute bottom-0 -left-[400px] h-[492px] -rotate-[90deg] z-10"
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
        <h3 className="text-2xl font-medium font-bebas mb-1">{title}</h3>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
