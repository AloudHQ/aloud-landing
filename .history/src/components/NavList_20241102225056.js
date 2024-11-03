import React, { useState } from 'react';
import {
  UilApps,
  UilNewspaper,
  UilMobileAndroid,
  UilQuestionCircle
} from '@iconscout/react-unicons';

const NavList = () => {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { href: "#features", label: "Features", icon: UilApps },
    { href: "/blog", label: "Blog", icon: UilNewspaper },
    { href: "#mobile", label: "Mobile", icon: UilMobileAndroid },
    { href: "/support", label: "Support", icon: UilQuestionCircle },
  ];

  return (
    <nav className="relative font-inter pt-4">
      <ul 
        className="flex flex-col md:flex-row gap-2 md:gap-8"
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
                group-hover:text-[#8289FC]
                focus:outline-none focus:ring-2 focus:ring-[#8289FC]/20
              `}
              onClick={() => setActiveItem(index)}
              role="menuitem"
              aria-current={activeItem === index ? 'page' : undefined}
            >
              <span className="absolute left-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <item.icon
                  size="18"
                  className={`
                    transform transition-all duration-200
                    ${activeItem === index ? 'text-[#8289FC]' : 'text-gray-400'}
                    group-hover:text-[#8289FC]
                  `}
                />
              </span>
              <span className="font-medium pl-6">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;