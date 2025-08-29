import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#277aff] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://s41713.pcdn.co/wp-content/uploads/2022/02/GIGA_lockup_white_horizontal-300x63.png"
                alt="Giga Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white mb-6 max-w-md">
              Connecting communities worldwide through innovative solutions and 
              sustainable development initiatives that create lasting impact.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-white/90">
                <Mail className="w-4 h-4" />
                <span>info@organization.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-white/90 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/our-work" className="text-white/90 hover:text-white transition-colors duration-200">Our Work</a></li>
              <li><a href="/our-center" className="text-white/90 hover:text-white transition-colors duration-200">Our Center</a></li>
              <li><a href="/where-we-work" className="text-white/90 hover:text-white transition-colors duration-200">Where We Work</a></li>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Us</h3>
            <ul className="space-y-2">
              <li><a href="/get-involved/contact-us" className="text-white/90 hover:text-white transition-colors duration-200">Contact Us</a></li>
              <li><a href="/get-involved/jobs" className="text-white/90 hover:text-white transition-colors duration-200">Jobs</a></li>
            </ul>
          </div>

          {/* GIGA Sites */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GIGA Sites</h3>
            <ul className="space-y-2">
              <li><a href="/giga-accelerator" className="text-white/90 hover:text-white transition-colors duration-200">Giga Accelerator</a></li>
              <li><a href="/giga-maps" className="text-white/90 hover:text-white transition-colors duration-200">Giga Maps</a></li>
              <li><a href="/giga-staking" className="text-white/90 hover:text-white transition-colors duration-200">Giga Staking</a></li>
              <li><a href="/patchwork-kingdoms" className="text-white/90 hover:text-white transition-colors duration-200">Patchwork Kingdoms</a></li>
            </ul>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-white mt-12" />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
          {/* Left: Copyright */}
          <p className="text-white text-sm">
            © 2025 Giga . All rights reserved.
          </p>

          {/* Center: Privacy + Terms */}
          <div className="flex space-x-5 text-sm">
            <a href="/privacy" className="text-white hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="text-white hover:text-white transition">Terms of Service</a>
          </div>

          {/* Right: Socials */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
