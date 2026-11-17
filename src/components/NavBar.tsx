"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) => {
    if (href === "/") {
      return href === pathname
        ? "text-active-nav before:content-[''] relative before:absolute before:bg-linear-to-r before:from-background before:via-active-nav before:to-background before:w-full before:h-0.5 before:bottom-[-1em] before:left-0"
        : "text-secondary-text";
    } else {
      return pathname.startsWith(href)
        ? "text-active-nav before:content-[''] relative before:absolute before:bg-linear-to-r before:from-background before:via-active-nav before:to-background before:w-full before:h-0.5 before:bottom-[-1em] before:left-0"
        : "text-secondary-text";
    }
  };

  return (
    <header className="bg-background h-20 border-y-2 border-active-nav sticky top-0 z-50">
      <figure className="relative before:content-[''] before:absolute before:bg-active-nav before:w-7 before:h-7 before:top-0 before:left-0"></figure>
      <nav className="flex items-center justify-between p-4">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <ul className="flex text-secondary-text gap-7 font-semibold">
          <li>
            <Link
              href="/"
              className={` ${linkClass("/")} hover:text-active-nav hover:before:content-[''] relative hover:before:absolute hover:before:bg-linear-to-r hover:before:from-background hover:before:via-active-nav hover:before:to-background hover:before:w-full hover:before:h-0.5 hover:before:bottom-[-1em] hover:before:left-0`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className={` ${linkClass("/events")} hover:text-active-nav over:before:content-[''] relative hover:before:absolute hover:before:bg-linear-to-r hover:before:from-background hover:before:via-active-nav hover:before:to-background hover:before:w-full hover:before:h-0.5 hover:before:bottom-[-1em] hover:before:left-0`}
            >
              EVENTS
            </Link>
          </li>
          <li>
            <Link
              href="/book-table"
              className={` ${linkClass("/book-table")} hover:text-active-nav over:before:content-[''] relative hover:before:absolute hover:before:bg-linear-to-r hover:before:from-background hover:before:via-active-nav hover:before:to-background hover:before:w-full hover:before:h-0.5 hover:before:bottom-[-1em] hover:before:left-0`}
            >
              BOOK TABLE
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={` ${linkClass("/contact")} hover:text-active-nav over:before:content-[''] relative hover:before:absolute hover:before:bg-linear-to-r hover:before:from-background hover:before:via-active-nav hover:before:to-background hover:before:w-full hover:before:h-0.5 hover:before:bottom-[-1em] hover:before:left-0`}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
      <figure className="relative after:content-[''] after:absolute after:bg-active-nav after:w-7 after:h-7 after:bottom-0 after:right-0"></figure>
    </header>
  );
};

export default NavBar;
