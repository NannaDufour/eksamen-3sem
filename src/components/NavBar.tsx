import Image from "next/image";

const NavBar = () => {
  return (
    <header className="bg-background h-20 border-y-2 border-active-nav ">
      <figure className="relative before:content-[''] before:absolute before:bg-active-nav before:w-7 before:h-7 before:top-0 before:left-0"></figure>
      <nav className="flex items-center justify-between p-4">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <ul className="flex text-secondary-text gap-7 font-semibold">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/book-table">BOOK TABLE</a>
          </li>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <figure className="relative after:content-[''] after:absolute after:bg-active-nav after:w-7 after:h-7 after:bottom-0 after:right-0"></figure>
    </header>
  );
};

export default NavBar;
