'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-16 lg:px-32 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Social + About */}
        <div>
          <div className="flex gap-4 text-xl mb-6 text-white">
            <a href="#" className="hover:text-purple-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-400 transition"><FaLinkedinIn /></a>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4 text-[14px]">
            The smart way to build brands, craft digital experiences, and scale your business online.
          </p>
          <p className="text-gray-500 text-[13px]">© 2025 throov. All rights reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[15px] mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-[13.5px]">
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>Design Systems</li>
            <li>Branding</li>
            <li>Digital Marketing</li>
            <li>SEO</li>
            <li>Game Development</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[15px] mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-[13.5px]">
            <li>CRM</li>
            <li>HRM</li>
            <li>Hospitality Solutions</li>
            <li>LMS</li>
            <li>CMS</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-purple-400 font-semibold text-[15px] mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300 text-[13.5px]">
            <li>📍 Karachi, Pakistan</li>
            <li>📧 hello@throov.com</li>
            <li>📞 +92 300 1234567</li>
          </ul>
        </div>
      </div>

      {/* Logo at Bottom */}
      <div className="text-center mt-20 text-white text-[48px] font-bold tracking-widest uppercase">
        throov
      </div>
    </footer>
  );
};

export default Footer;
