import heroBG from "../../assets/hero-bg.png";
import heroImg from "../../assets/hero-img.png";
import star from "../../assets/star.svg";
import { Container } from "../Container";
export const Hero = () => {
  return (
    <div className="min-h-screen bg-red-700 relative flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-15 flex"
        style={{
          background: `url(${heroBG}) lightgray 0% 0% / 50px 50px repeat`,
        }}
      ></div>
      <Container>
        {/* Hero Section */}
        <div className="px-4 py-12 md:py-24 flex flex-col md:flex-row items-center relative">
          <div className="md:w-1/2 md:z-50">
            <h1
              className="text-4xl md:text-[120px] md:leading-[130px] md:w-[830px] font-medium text-white leading-tight font-bebas"
              style={{
                background: `linear-gradient(90deg, rgba(189, 31, 23, 0.00) 32.88%, rgba(189, 31, 23, 0.70) 100%)`,
              }}
            >
              TASTE THE AUTHENTIC SAUDI CUISINE
            </h1>
            <p className="text-white/90 text-2xl leading-8 mt-4 mb-[38px]">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="bg-primary text-lg text-black px-6 py-4 font-bold hover:bg-yellow-500 transition-colors">
              EXPLORE MENU
            </button>
          </div>

          <div className="relative mt-8 md:mt-0 md:z-0  min-w-[700px] h-[700px]">
            <div className="absolute -top-7 -right-6 z-40">
              <img src={star} alt="" className="size-[45px] text-white" />
            </div>
            <div className="relative size-full z-30">
              <img
                src={heroImg}
                alt="Delicious grilled meat with french fries"
                className="shadow-xl size-full scale-x-[-1] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full p-2 text-center size-[120px]">
                <div className="border border-dashed border-color-red flex flex-col items-center justify-center size-full rounded-full font-bebas p-1">
                  <span className="text-4xl font-bold leading-9">TODAY</span>
                  <span className="text-4xl font-bold leading-9">OFFER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
