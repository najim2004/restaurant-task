import heroBG from "../../assets/hero-bg.png";
import heroImg from "../../assets/hero-img.png";
import star from "../../assets/star.svg";
import { Container } from "../Container";
export const Hero = () => {
  return (
    <div className="md:min-h-screen bg-color-red relative flex items-center justify-center pt-[108px] p-[30px] md:pt-[76px] md:p-0">
      <div
        className="absolute inset-0 opacity-15 flex"
        style={{
          background: `url(${heroBG}) lightgray 0% 0% / 100px 100px repeat`,
        }}
      ></div>
      <Container>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center relative w-full">
          <div className="md:w-[calc(100%-699px)] md:z-50">
            <h1
              className="text-[120px] leading-[130px] w-[830px] font-medium text-white font-bebas hidden md:block"
              style={{
                background: `linear-gradient(90deg, rgba(189, 31, 23, 0.00) 32.88%, rgba(189, 31, 23, 0.70) 100%)`,
              }}
            >
              TASTE THE AUTHENTIC SAUDI CUISINE
            </h1>
            <h1 className="text-[48px] leading-[56px] font-medium text-white font-bebas">
              TASTE THE AUTHENTIC SAUDI CUISINE
            </h1>
            <p className="text-white text-xl md:text-2xl leading-7 md:leading-8 mt-4 mb-8 md:mb-[38px]">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="bg-primary text-sm md:text-lg text-black px-6 py-3 font-bold hover:bg-yellow-500 transition-colors">
              EXPLORE MENU
            </button>
          </div>

          <div className="relative mt-12 md:mt-0 md:z-0 md:min-w-[699px] md:max-w-[699px] h-[310px] md:h-[649px]">
            <div className="absolute -top-7 -right-6 z-40">
              <img src={star} alt="" className="size-[45px] text-white" />
            </div>
            <div className="relative size-full z-30">
              <img
                src={heroImg}
                alt="Delicious grilled meat with french fries"
                className="shadow-xl size-full scale-x-[-1] object-cover"
              />
              <div className="absolute bottom-0.5 right-2 md:-right-16 bg-yellow-400 rounded-full p-2 text-center size-[72px] md:size-[120px] shadow-lg">
                <div className="border border-dashed border-color-red flex flex-col items-center justify-center size-full rounded-full font-bebas p-1 text-xl md:text-4xl font-bold leading-4 md:leading-9">
                  <span className="">TODAY</span>
                  <span className="">OFFER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
