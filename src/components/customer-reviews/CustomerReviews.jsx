import { Play } from "lucide-react";
import {
  arrowLeft,
  arrowRight,
  leftSideImg2,
  leftSideImg3,
  quat,
  reviewImg,
  rightSideImg2,
  userImg,
} from "../../assets/assets";
import { Container } from "../Container";

export const CustomerReviews = () => {
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
              What Some of my Customers Say
            </h2>
          </div>
          <div className="hidden lg:flex gap-4">
            <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md">
              <img src={arrowLeft} className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full bg-white size-[60px] flex justify-center items-center shadow-md">
              <img src={arrowRight} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="flex flex-col-reverse md:flex-row overflow-hidden">
          {/* Left Side - Testimonial */}
          <div className="bg-yellow-400 p-10 lg:p-24 relative">
            <img
              src={leftSideImg2}
              alt=""
              className="absolute -bottom-3.5 md:bottom-10 left-0"
            />
            <div className="relative flex flex-col h-full text-[#0A1425]">
              <img src={quat} alt="" className="-ml-4 md:-ml-6 w-max" />
              <p className="text-xl leading-[34px] flex-grow">
                You can't go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
              <footer className="flex items-center gap-4 border-b border-[#0A1425] justify-between pb-4 mt-10">
                <div>
                  <p className="text-lg font-medium font-bebas">
                    KHALID AL HAWSHY
                  </p>
                  <p className="text-sm">Jeddah, Saudi</p>
                </div>
                <img
                  src={userImg}
                  alt="Khalid Al Hawshy"
                  className="size-10 object-cover rounded-full"
                />
              </footer>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative w-full h-[224px] md:h-[555px] md:min-w-[763px]">
            <div className="absolute inset-0 bg-black/30"></div>
            <img
              src={reviewImg}
              alt="Location map"
              className="w-full h-full object-cover"
            />
            {/* Play Button */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full p-4 hover:bg-yellow-500 transition-colors">
              <Play className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
        <div className="lg:hidden flex gap-4 justify-center items-center mt-6">
          <button className="p-2 rounded-full bg-white size-[40px] flex justify-center items-center shadow-md">
            <img src={arrowLeft} className="size-4" />
          </button>
          <button className="p-2 rounded-full bg-white size-[40px] flex justify-center items-center shadow-md">
            <img src={arrowRight} className="size-4" />
          </button>
        </div>
      </Container>

      <div
        className={`h-[303px] hidden lg:flex w-[307px] absolute top-[160px] rotate-[-87deg] left-[-160px] bg-contain`}
        style={{
          backgroundImage: `url(${leftSideImg3})`,
        }}
      ></div>
      <div
        className={`h-[303px] hidden lg:flex w-[566px] absolute bottom-[141px] right-[-231px] rotate-[34deg] bg-contain`}
        style={{
          backgroundImage: `url(${rightSideImg2})`,
        }}
      ></div>
    </div>
  );
};
