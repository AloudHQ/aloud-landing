import React, { useState } from 'react';
import {
  UilApps,
  UilNewspaper,
  UilMobileAndroid,
  UilQuestionCircle,
  UilAngleDown
} from '@iconscout/react-unicons';

const NavList = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features", icon: UilApps },
    { href: "/blog", label: "Blog", icon: UilNewspaper },
    { href: "#mobile", label: "Mobile", icon: UilMobileAndroid },
    { href: "/support", label: "Support", icon: UilQuestionCircle },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative font-inter">
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center space-x-2 p-2 rounded-lg hover:bg-[#8289FC]/10"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="text-sm font-medium">Menu</span>
        <UilAngleDown 
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          size="20"
        />
      </button>

      {/* Navigation List */}
      <ul 
        className={`
          flex flex-col md:flex-row
          gap-2 md:gap-8
          p-4 md:p-0
          mt-2 md:mt-0
          bg-white md:bg-transparent
          rounded-lg shadow-lg md:shadow-none
          absolute md:relative
          w-full md:w-auto
          z-20
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto'}
        `}
        role="menu"
      >
        {navItems.map((item, index) => (
          <li 
            key={index} 
            className="group relative"
            role="none"
          >
            <a
              href={item.href}
              className={`
                flex items-center gap-3
                py-2 px-4
                rounded-lg
                transition-all duration-200
                hover:bg-[#8289FC]/10
                ${activeItem === index ? 'bg-[#8289FC]/5 text-[#8289FC]' : 'text-gray-700'}
                group-hover:-translate-y-0.5
                group-hover:text-[#8289FC]
                focus:outline-none focus:ring-2 focus:ring-[#8289FC]/20
              `}
              onClick={() => setActiveItem(index)}
              role="menuitem"
              aria-current={activeItem === index ? 'page' : undefined}
            >
              <item.icon
                size="18"
                className={`
                  transform transition-all duration-200
                  ${activeItem === index ? 'text-[#8289FC]' : 'text-gray-400'}
                  group-hover:text-[#8289FC]
                  group-hover:scale-110
                `}
              />
              <span className="font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 md:hidden z-10"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default NavList;