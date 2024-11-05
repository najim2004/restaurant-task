import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "../Container";
import {
  facebook,
  footerImg,
  instagram,
  linkedin,
  twitter,
} from "../../assets/assets";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative p-[30px] md:p-0 md:py-[120px] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerImg}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <Container>
        {/* Content */}
        <div className="relative z-10 container mx-auto">
          {/* Heading */}
          <h2 className="text-[40px] leading-[48px] md:text-[62px] font-medium text-center mb-12 font-bebas mx-auto">
            WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[60px] md:mb-[120px]">
            {/* Opening Hours */}
            <div className="text-center">
              <Clock className="size-[30px] text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-3 font-bebas text-2xl">
                OPENING HOURS
              </h3>
              <p className="text-base text-[#F7F8F9]">Monday - Sunday</p>
              <p className="text-base text-[#F7F8F9]">9:00 AM to 11:30 PM</p>
            </div>

            {/* Let's Talk */}
            <div className="text-center">
              <Phone className="size-[30px] text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-3 font-bebas text-2xl">
                LET'S TALK
              </h3>
              <p className="text-base text-[#F7F8F9]">Phone: 1-800-222-4545</p>
              <p className="text-base text-[#F7F8F9]">Fax: 1-800-222-4545</p>
            </div>

            {/* Book a Table */}
            <div className="text-center">
              <Mail className="size-[30px] text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-3 font-bebas text-2xl">
                BOOK A TABLE
              </h3>
              <p className="text-base text-[#F7F8F9]">
                Email: demo@website.com
              </p>
              <p className="text-base text-[#F7F8F9]">
                Support: support@website.com
              </p>
            </div>

            {/* Our Address */}
            <div className="text-center">
              <MapPin className="size-[30px] text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-3 font-bebas text-2xl">
                OUR ADDRESS
              </h3>
              <p className="text-base text-[#F7F8F9]">
                123 Street New York City, United
              </p>
              <p className="text-base text-[#F7F8F9]">States Of America</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            <Link
              to="#"
              className="size-9 md:size-[53px] border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={facebook} className="size-4 md:size-6" />
            </Link>
            <Link
              to="#"
              className="size-9 md:size-[53px] border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={twitter} className="size-4 md:size-6" />
            </Link>
            <Link
              to="#"
              className="size-9 md:size-[53px] border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={instagram} className="size-4 md:size-6" />
            </Link>
            <Link
              to="#"
              className="size-9 md:size-[53px] border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src={linkedin} className="size-4 md:size-6" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-base md:text-xl font-medium">
            © 2023 <span className="text-primary">Niomax</span> All Rights
            Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};
