
const NavList = () => {
    const navItems = [
      { href: "#features", label: "Features", icon: "🎯" },
      { href: "/blog", label: "Blog", icon: "📝" },
      { href: "#mobile", label: "Mobile", icon: "📱" },
      { href: "/support", label: "Support", icon: "💡" },
      { href: "#features", label: "Features" },
      { href: "/blog", label: "Blog" },
      { href: "#mobile", label: "Mobile" },
      { href: "/support", label: "Support" },
    ];
  
    return (
      <ul className="font-inter flex flex-col gap-8 z-10 text-[16px] p-4 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {navItems.map((item, index) => (
          <li key={index} className="group relative">
            <a
              href={item.href}
              className="nav-item block py-2 px-3 text-black rounded md:bg-transparent transition-transform duration-300 group-hover:-translate-y-1"
              aria-current={item.ariaCurrent || undefined}
            >
              <span className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.icon}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavList;
  