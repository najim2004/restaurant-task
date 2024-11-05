import { calendar, formBg, sort } from "../../assets/assets";
import { Container } from "../Container";

export const BookTable = () => {
  return (
    <div className="relative text-white p-[30px] md:p-0 md:py-[120px] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 -z-10">
        <img
          src={formBg}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="">
        <div className="max-w-xl">
          {/* Header */}
          <div className="mb-10">
            <p className="text-base md:text-xl font-semibold text-color-red mb-2 flex items-center">
              <span className="size-2 bg-color-red mr-2" />
              Book Now
            </p>
            <h2 className="text-[48px] md:text-[62px] font-medium font-bebas">
              BOOK YOUR TABLE
            </h2>
            <p className="text-[#F7F8F9] leading-6">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>

              {/* Reservation Date */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Reservation Date"
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
                <img
                  src={calendar}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
              </div>

              {/* Total People */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Total People"
                  className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors"
                />
                <img
                  src={sort}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border border-gray-700 rounded px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-sm md:text-lg text-black px-6 py-3 font-bold hover:bg-yellow-500 transition-colors"
            >
              BOOK NOW
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};
