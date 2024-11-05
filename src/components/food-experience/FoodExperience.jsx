import foodExperienceImg from "../../assets/food-experience-img.png";
import sideImg from "../../assets/side-img.png";
import { Container } from "../Container";
import { bag, call, medal, packageIcon } from "../../assets/assets";

export const FoodExperience = () => {
  return (
    <div className="p-[30px] md:py-[120px] bg-white flex items-center relative overflow-hidden">
      {/* Main Content */}
      <Container className="z-10">
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-12">
          {/* Left Column - Image */}
          <div className="relative w-full md:min-w-[617px] max-w-[617px] h-[246px] md:min-h-[460px]">
            <div className="absolute top-4 left-4 bg-white rounded-lg md:rounded-xl p-3 md:p-[22px] shadow-lg z-10">
              <div className="flex items-center">
                <div className="size-[50px] md:size-[94px] border-2 md:border-4 border-primary rounded-full flex items-center justify-center">
                  <span className="text-sm md:text-[26px] font-bold">50+</span>
                </div>
                <div className="ml-1 md:ml-3 text-xs md:text-[16px] font-medium md:font-semibold">
                  <p>Market</p>
                  <p>Experiences</p>
                </div>
              </div>
            </div>
            <img
              src={foodExperienceImg}
              alt="Delicious burger with fries and beer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="">
            {/* Navigation */}
            <nav className="md:border-0 border-b border-color-red pb-1 md:pb-0">
              <ul className="flex space-x-8 text-sm font-medium text-[#333333]">
                <li>
                  <a href="#" className="bg-color-red px-4 py-[6px] text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <h1 className="text-[40px] md:text-[62px] font-medium leading-[48px] md:leading-[62px] font-bebas mt-6 md:mt-8 mb-[18px]">
              EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
            </h1>
            <p className="mb-8 leading-[26px] text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              non sed est cursus. Vel hac convallis ipsum facilisi odio
              pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
              consectetur adipiscing elit do eiusmod tempor incididunt ut labore
              et dolore magna minim veniam nostrud exercitation.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary text-sm md:text-lg text-black px-6 py-3 font-bold hover:bg-yellow-500 transition-colors">
                ABOUT MORE
              </button>
              <a
                href="tel:+883426739485"
                className="flex items-center gap-2 text-[#0A1425] text-sm md:text-lg font-bold"
              >
                <img src={call} alt="" className="h-5 w-5" />
                <span>+88 3426 739 485</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-[50px] m:mt-[80px]">
          <Feature
            description="Within 30 minutes"
            icon={packageIcon}
            title="FAST DELIVERY"
          />
          <Feature
            description="Best buffet restaurant"
            icon={medal}
            title="ABSOLUTE DINING"
          />
          <Feature
            description="Grab your food order"
            icon={bag}
            title="PICKUP DELIVERY"
          />
        </div>
      </Container>

      {/* Decorative Image */}
      <div className="absolute hidden lg:block top-1/2 -right-[210px] -rotate-45 transform -translate-y-1/2 z-0">
        <img
          src={sideImg}
          alt="Decorative salad"
          className="w-[350px] object-cover"
        />
      </div>
    </div>
  );
};

function Feature({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4 text-[#0A1425]">
      <div className="size-[70px] md:size-[90px] bg-white rounded-full flex items-center justify-center shadow-md">
        <img src={icon} className="size-5 md:size-auto" />
      </div>
      <div>
        <h3 className="font-medium text-2xl md:text-3xl font-bebas">{title}</h3>
        <p className="text-sm md:text-xl">{description}</p>
      </div>
    </div>
  );
}
