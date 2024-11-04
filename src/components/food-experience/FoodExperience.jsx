import foodExperienceImg from "../../assets/food-experience-img.png";
import sideImg from "../../assets/side-img.png";
import { Container } from "../Container";
import { bag, call, medal, packageIcon } from "../../assets/assets";

export const FoodExperience = () => {
  return (
    <div className="min-h-screen md:h-[864px] bg-white flex items-center relative overflow-hidden">
      {/* Main Content */}
      <Container className="z-10">
        <div className="px-4 py-12">
          <div className="flex gap-12">
            {/* Left Column - Image */}
            <div className="relative min-w-[617px] max-w-[617px] min-h-[460px]">
              <div className="absolute top-4 left-4 bg-white rounded-2xl p-[22px] shadow-lg z-10">
                <div className="flex items-center">
                  <div className="size-[94px] border-4 border-primary rounded-full flex items-center justify-center">
                    <span className="text-[26px] font-bold">50+</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-[16px] font-semibold">Market</p>
                    <p className="text-[16px] font-semibold">Experiences</p>
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
              <nav className="px-4">
                <ul className="flex space-x-8 text-sm font-medium text-[#333333]">
                  <li>
                    <a
                      href="#"
                      className="bg-color-red px-4 py-[6px] text-white"
                    >
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
              <h1 className="text-4xl md:text-[62px] font-medium leading-[62px] font-bebas mt-8 mb-[18px]">
                EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
              </h1>
              <p className="mb-8 leading-[26px] text-[#333333]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                non sed est cursus. Vel hac convallis ipsum facilisi odio
                pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet
                consectetur adipiscing elit do eiusmod tempor incididunt ut
                labore et dolore magna minim veniam nostrud exercitation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-lg text-black px-6 py-3 font-bold hover:bg-yellow-500 transition-colors">
                  ABOUT MORE
                </button>
                <a
                  href="tel:+883426739485"
                  className="flex items-center gap-2 text-[#0A1425] text-lg font-bold"
                >
                  <img src={call} alt="" className="h-5 w-5" />
                  <span>+88 3426 739 485</span>
                </a>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex justify-between mt-[80px]">
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
        </div>
      </Container>

      {/* Decorative Image */}
      <div className="absolute top-1/2 -right-[210px] -rotate-45 transform -translate-y-1/2 z-0">
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
      <div className="size-[90px] bg-white rounded-full flex items-center justify-center shadow-md">
        <img src={icon} />
      </div>
      <div>
        <h3 className="font-medium text-3xl font-bebas">{title}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}
