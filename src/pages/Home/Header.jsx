import coffeeMug from "../../assets/CoffeeMug.svg?raw";
import { useState } from "react";
import InlineSvg from "../../components/InlineSvg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close navbar after clicking on a link
  };

  return (
    <div className="flex flex-row items-center bg-banner w-full h-[90px] font-display font-normal not-italic relative max-[768px]:h-auto max-[768px]:px-5 max-[768px]:w-auto">
      <div className="flex flex-row items-center justify-center my-auto grow max-[768px]:grow-0">
        <InlineSvg
          markup={coffeeMug}
          title="coffee mug"
          className="mt-0 mr-[-32px] z-0 w-[97px] max-[768px]:w-16 max-[768px]:mr-[-20px]"
        />
        <p className="text-[67px] my-auto text-paper max-[768px]:text-[48px] max-[768px]:h-auto max-[768px]:pt-[10px]">DECAF</p>
      </div>
      <div className="flex grow"></div>

      {/* Hamburger Menu (visible only on mobile) */}
      <div className="max-[768px]:flex max-[768px]:flex-col max-[768px]:justify-between max-[768px]:w-[30px] max-[768px]:h-[21px] max-[768px]:cursor-pointer" onClick={toggleNavbar}>
        <div className={`max-[768px]:w-full max-[768px]:h-[3px] max-[768px]:bg-bar max-[768px]:transition-[transform,opacity] max-[768px]:duration-300 max-[768px]:ease-in-out ${isOpen ? "max-[768px]:translate-y-[9px] max-[768px]:rotate-45" : ""}`}></div>
        <div className={`max-[768px]:w-full max-[768px]:h-[3px] max-[768px]:bg-bar max-[768px]:transition-[transform,opacity] max-[768px]:duration-300 max-[768px]:ease-in-out ${isOpen ? "max-[768px]:opacity-0" : ""}`}></div>
        <div className={`max-[768px]:w-full max-[768px]:h-[3px] max-[768px]:bg-bar max-[768px]:transition-[transform,opacity] max-[768px]:duration-300 max-[768px]:ease-in-out ${isOpen ? "max-[768px]:-translate-y-[9px] max-[768px]:-rotate-45" : ""}`}></div>
      </div>

      {/* Navbar (responsive behavior) */}
      <div className={`flex flex-row items-center justify-evenly my-auto text-paper text-[min(3.3vw,50px)] grow-[3] max-[768px]:flex-col max-[768px]:text-[24px] max-[768px]:absolute max-[768px]:top-[85px] max-[768px]:right-0 max-[768px]:bg-banner max-[768px]:w-full max-[768px]:border-t max-[768px]:border-ink ${isOpen ? "max-[768px]:flex max-[768px]:transition-[height] max-[768px]:duration-300 max-[768px]:ease-out" : "max-[768px]:hidden"}`}>
        <div onClick={() => scrollToSection("about")} className="cursor-pointer max-[768px]:my-[10px] max-[768px]:text-center max-[768px]:text-[20px]">
          ABOUT
        </div>
        <div onClick={() => scrollToSection("sponsor")} className="cursor-pointer max-[768px]:my-[10px] max-[768px]:text-center max-[768px]:text-[20px]">
          SPONSORS
        </div>
        <div onClick={() => scrollToSection("faq")} className="cursor-pointer max-[768px]:my-[10px] max-[768px]:text-center max-[768px]:text-[20px]">
          FAQ
        </div>
        <div className="cursor-pointer max-[768px]:my-[10px] max-[768px]:text-center max-[768px]:text-[20px]">
          <a href="https://www.tescatucsd.org/">TESC</a>
        </div>
        <div onClick={() => scrollToSection("contact")} className="cursor-pointer max-[768px]:my-[10px] max-[768px]:text-center max-[768px]:text-[20px]">
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Header;
