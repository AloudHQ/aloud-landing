
import { 
  UilApps, 
  UilNewspaper, 
  UilMobileAndroid, 
  UilQuestionCircle 
} from '@iconscout/react-unicons';

const NavList = () => {
    const navItems = [
      { href: "#features", label: "Features", icon: UilApps },
      { href: "/blog", label: "Blog", icon: UilNewspaper },
      { href: "#mobile", label: "Mobile", icon: UilMobileAndroid },
      { href: "/support", label: "Support", icon: UilQuestionCircle },
    ];
  
    return (
      <ul className="font-inter flex flex-col gap-8 z-10 text-[16px] p-8 md:p-0 mt-4 font-medium md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {navItems.map((item, index) => (
          <li key={index} className="group relative">
            <a
              href={item.href}
              className="nav-item flex items-center py-2 px-6 text-black text-base rounded-lg md:bg-transparent transition-all duration-300 group-hover:-translate-y-1 hover:bg-[#8289FC]/10"
              aria-current={item.ariaCurrent || undefined}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                {<item.icon size="18" />}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavList;
  