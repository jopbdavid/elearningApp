import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-primary text-primary-content">
      <aside className="items-center grid-flow-col">
        {/* <p>Copyright © 2024 - All right reserved</p> */}
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
        <a href="https://www.linkedin.com/in/jo%C3%A3o-david-888391144/">
          <img src="./img/linkedin.png" alt="" className="w-10 h-10" />
        </a>
        <a href="https://jpdavidev.netlify.app/">
          <img src="./img/www.png" alt="" className="w-10 h-10" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
