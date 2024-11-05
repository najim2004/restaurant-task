import { ChevronLeft, ChevronRight, Play } from "lucide-react";
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
    <div className="relative bg-white px-4 py-[120px] overflow-hidden">
      {/* Decorative Elements */}
      <Container>
        {/* Content Container */}
        <div className="relative">
          {/* Header */}
          <div className="mb-12 flex justify-between items-center">
            <div className="">
              <p className="text-xl font-semibold text-color-red mb-2 flex items-center">
                <span className="size-2 bg-color-red mr-2" />
                Crispy, Every Bite Taste
              </p>
              <h2 className="text-[62px] font-medium font-bebas">
                What Some of my Customers Say
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

          {/* Testimonial Section */}
          <div className="flex overflow-hidden">
            {/* Left Side - Testimonial */}
            <div className="bg-yellow-400 p-24 relative">
              <img
                src={leftSideImg2}
                alt=""
                className="absolute bottom-10 left-0"
              />
              <div className="relative flex flex-col h-full text-[#0A1425]">
                <img src={quat} alt="" className="-ml-6 w-max" />
                <p className="text-xl leading-[34px] flex-grow">
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it."
                </p>
                <footer className="flex items-center gap-4 border-b border-[#0A1425] justify-between pb-4">
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
            <div className="relative h-[555px] min-w-[763px]">
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
        </div>
      </Container>
      <div
        className={`h-[303px] w-[307px] absolute top-[160px] rotate-[-87deg] left-[-160px] bg-contain`}
        style={{
          backgroundImage: `url(${leftSideImg3})`,
        }}
      ></div>
      <div
        className={`h-[303px] w-[566px] absolute bottom-[141px] right-[-231px] rotate-[34deg] bg-contain`}
        style={{
          backgroundImage: `url(${rightSideImg2})`,
        }}
      ></div>
    </div>
  );
};
