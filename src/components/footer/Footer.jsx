import { Clock, MapPin, Mail, Phone } from "lucide-react";
import { Container } from "../Container";
import { footerImg } from "../../assets/assets";

export const Footer = () => {
  return (
    <footer className="relative py-[120px] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerImg}
          alt="Restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <Container>
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-3xl mx-auto">
            WE READY TO HAVE YOU THE BEST DINING EXPERIENCES
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Opening Hours */}
            <div className="text-center">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">OPENING HOURS</h3>
              <p className="text-sm text-gray-300">Monday - Sunday</p>
              <p className="text-sm text-gray-300">9:00 AM to 11:30 PM</p>
            </div>

            {/* Let's Talk */}
            <div className="text-center">
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">LET'S TALK</h3>
              <p className="text-sm text-gray-300">Phone: 1-800-222-4545</p>
              <p className="text-sm text-gray-300">Fax: 1-800-222-4545</p>
            </div>

            {/* Book a Table */}
            <div className="text-center">
              <Mail className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">BOOK A TABLE</h3>
              <p className="text-sm text-gray-300">Email: demo@website.com</p>
              <p className="text-sm text-gray-300">
                Support: support@website.com
              </p>
            </div>

            {/* Our Address */}
            <div className="text-center">
              <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">OUR ADDRESS</h3>
              <p className="text-sm text-gray-300">
                123 Street New York City, United
              </p>
              <p className="text-sm text-gray-300">States Of America</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="sr-only">{social}</span>
                <div className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400">
            © 2023 <span className="text-yellow-400">Niomax</span> All Rights
            Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};
