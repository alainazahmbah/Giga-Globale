import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  href?: string;
  subItems?: { name: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { name: 'About', href: '/about' },
  {
    name: 'Our Work',
    subItems: [
      { name: 'Map', href: '/our-work/map' },
      { name: 'Finance', href: '/our-work/finance' },
      { name: 'Connect', href: '/our-work/connect' },
    ],
  },
  {
    name: 'Our Center',
    subItems: [
      {
        name: 'Giga Connectivity Center',
        href: '/our-center/giga-connectivity-center',
      },
    ],
  },
  {
    name: 'Where We Work',
    subItems: [
      { name: 'Asia', href: '/where-we-work/asia' },
      {
        name: 'Latin America and the Caribbean',
        href: '/where-we-work/latin-america-caribbean',
      },
      { name: 'Sub-Saharan Africa', href: '/where-we-work/sub-saharan-africa' },
    ],
  },
  {
    name: 'Press & Resources',
    subItems: [
      { name: 'Press', href: '/press-resources/press' },
      { name: 'Reports', href: '/press-resources/reports' },
      { name: 'Stories', href: '/press-resources/stories' },
    ],
  },
  {
    name: 'Get Involved',
    subItems: [
      { name: 'Procurement', href: '/get-involved/procurement' },
      { name: 'Jobs', href: '/get-involved/jobs' },
      { name: 'Contact Us', href: '/get-involved/contact-us' },
    ],
  },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-[#277aff] text-white shadow-sm border-b border-white sticky top-0 z-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img
              src="https://s41713.pcdn.co/wp-content/uploads/2022/02/GIGA_lockup_white_horizontal-300x63.png"
              alt="Giga Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden lg:flex items-center space-x-8"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-white hover:text-white font-medium transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <button className="flex items-center space-x-1 text-white hover:text-white font-medium transition-colors duration-200">
                    <span>{item.name}</span>
                    {item.subItems && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-blue-600 rounded-lg shadow-lg border border-white py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-white hover:text-white hover:bg-blue-700 transition-colors duration-200 border-b border-white last:border-b-0"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-white hover:bg-blue-700 transition-colors duration-200"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white bg-blue-600">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      {item.subItems && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Mobile Dropdown */}
                  {item.subItems && activeDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:text-white hover:bg-blue-700 rounded-md transition-colors duration-200 border-b border-white last:border-b-0"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
