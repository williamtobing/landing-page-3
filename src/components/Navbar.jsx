import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleNav);
  });

  const handleNav = () => {
    if (window.scrollY > 150) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="container">
        <h1 className="logo">
          <a href="/index.html">My Website</a>
        </h1>
        <ul>
          <li>
            <a href="/" className="current">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
