import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/TESCLogo.svg";

function Footer() {
  const contactIcons = (
    <ul className="contact-items flex gap-[2.5vw] m-0 p-0">
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="mailto:contact@tesc.ucsd.edu" className="contact-icon no-underline text-black">
          <MdEmail />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://instagram.com/tesc.at.ucsd/" className="contact-icon no-underline text-black">
          <FaInstagram />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://www.linkedin.com/company/tescatucsd/" className="contact-icon no-underline text-black">
          <FaLinkedin />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://x.com/UCSDTESC/" className="contact-icon no-underline text-black">
          <FaXTwitter />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://discord.gg/C9w2cShb4B" className="contact-icon no-underline text-black">
          <FaDiscord />
        </a>
      </li>
    </ul>
  );

  return (
    <div className="footer bg-[#FCFCFC] w-full [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col select-none">
      <div className="contact flex flex-col bg-[#D8C1F7] w-full h-[200px] text-[48px] items-center justify-center [text-shadow:0px_0px_150px_rgb(0,0,0)] mt-[-20px] pt-5 z-[1] select-text max-[768px]:text-[32px] max-[768px]:h-auto max-[768px]:py-5 max-[768px]:pt-10" id="contact">
        <p className="m-0 text-center">Contact us</p>
        {contactIcons}
      </div>
      <div className="tesc bg-black h-[485px] flex flex-col items-center justify-center text-white px-5 text-center max-[768px]:h-auto max-[768px]:p-[5dvw]">
        <p id="organized" className="[font-family:'League_Spartan',sans-serif] [font-optical-sizing:auto] not-italic text-[32px] max-[768px]:text-[24px]">organized by</p>
        <img id="logo" className="my-5 max-[768px]:w-4/5 max-[768px]:h-auto" src={Logo} alt="TESC"></img>
        <p id="desc" className="text-[24px] max-w-[1080px] text-center mt-5 max-[768px]:text-[18px]">
          The Triton Engineering Student Council empowers UC San Diego engineering students by
          connecting them with impactful communities, projects, and career building opportunities.
        </p>
      </div>
    </div>
  );
}

export default Footer;
