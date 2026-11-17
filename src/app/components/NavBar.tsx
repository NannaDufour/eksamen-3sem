import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <Image src="" alt="Logo" width={100} height={100} />
      <ul>
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
  );
};

export default NavBar;
