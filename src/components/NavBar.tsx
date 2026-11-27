"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import RollingText from "./RollingText";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", navLabel: "HOME" },
    { href: "/events", navLabel: "EVENTS" },
    { href: "/book-table", navLabel: "BOOK TABLE" },
    { href: "/contact", navLabel: "CONTACT US" },
  ];

  const linkClass = (href: string) => {
    if (href === "/") {
      return href === pathname ? "text-active-nav" : "text-secondary-text";
    } else {
      return pathname.startsWith(href) ? "text-active-nav" : "text-secondary-text";
    }
  };

  const activePage = (href: string) => {
    if (href === "/") {
      return href === pathname ? "page" : undefined;
    } else {
      return pathname.startsWith(href) ? "page" : undefined;
    }
  };

  return (
    <header className="bg-background h-20 border-y-2 border-active-nav sticky top-0 z-50">
      <figure className="relative before:content-[''] before:absolute before:bg-active-nav before:w-7 before:h-7 before:top-0 before:left-0"></figure>
      <nav className="flex items-center justify-between p-4">
        <Image src="/Logo.png" alt="Logo" width={150} height={150} />

        <button type="button" popoverTarget="burgerMenuPopover" className="max-md:block md:hidden">
          <IoMenu className="text-secondary-text w-10 h-10" />
        </button>

        <div id="burgerMenuPopover" popover="manual" className="bg-background/90 h-full w-full">
          <button popoverTarget="burgerMenuPopover" popoverTargetAction="hide" className="block ml-auto">
            <IoCloseSharp className="text-secondary-text w-15 h-15 p-2" />
          </button>
          <ul className="text-secondary-text font-semibold place-items-center mt-50">
            {navItems.map((navItem) => (
              <li key={navItem.navLabel} className="mb-15">
                <Link href={navItem.href} className={` ${linkClass(navItem.href)} text-size-l`}>
                  {navItem.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="max-md:hidden md:flex text-secondary-text gap-7 font-semibold before:content-[''] relative before:absolute before:bg-linear-to-r before:from-background before:via-active-nav before:to-background before:h-0.5 desktop-nav">
          {navItems.map((navItem) => (
            <li key={navItem.navLabel}>
              <Link href={navItem.href} aria-current={activePage(navItem.href)} className={` ${linkClass(navItem.href)} group`}>
                <RollingText navLabel={navItem.navLabel} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <figure className="relative after:content-[''] after:absolute after:bg-active-nav after:w-7 after:h-7 after:bottom-0 after:right-0"></figure>
    </header>
  );
};

export default NavBar;
