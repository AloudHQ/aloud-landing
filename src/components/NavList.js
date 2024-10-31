
const NavList = () => {
    const navItems = [
      { href: "#features", label: "Features" },
      { href: "/blog", label: "Blog" },
      { href: "#mobile", label: "Mobile" },
      { href: "/support", label: "Support" },
    ];
  
    return (
      <ul className="font-inter flex flex-col gap-8 z-10 text-[16px] p-4 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block py-2 px-3 text-black rounded md:bg-transparent"
              aria-current={item.ariaCurrent || undefined }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavList;
  