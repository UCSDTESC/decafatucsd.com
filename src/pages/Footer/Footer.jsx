import Logo from "../../assets/TESCLogo.svg";

const iconClass = "w-[1em] h-[1em] fill-current";

function IconEmail() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5M17.5 6.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 9H4V20h2.5zm.25-3.75A1.75 1.75 0 1 1 5 3.5a1.75 1.75 0 0 1 1.75 1.75M20 13.38c0-3.08-1.64-4.51-3.83-4.51A3.7 3.7 0 0 0 13.1 10.5V9H10.6v11H13.1v-6.1c0-1.61.3-3.17 2.3-3.17 2 0 2.1 1.86 2.1 3.27V20H20z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.1 10.2 21.6 2h-1.8l-6.5 7.1L8.1 2H2.4l7.9 11.1L2.4 22h1.8l6.9-7.6L15.9 22h5.7zM4.9 3.3h2.8l11.4 17.4h-2.8z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.3 5.2A18 18 0 0 0 14.8 4l-.2.4a16.6 16.6 0 0 1 4 1.9 16.3 16.3 0 0 0-12.2 0 15 15 0 0 1 3.8-1.8L10 4a18 18 0 0 0-4.5 1.2C2.7 9.1 2 13 2.2 16.8A18.2 18.2 0 0 0 8 19.4l.8-1.1a12 12 0 0 1-1.9-.9l.5-.4a13.3 13.3 0 0 0 10.2 0l.5.4a12 12 0 0 1-1.9.9l.8 1.1a18.2 18.2 0 0 0 5.8-2.6c.4-4.3-.7-8.2-2.5-11.6M8.6 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2m6.8 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2" />
    </svg>
  );
}

function Footer() {
  const contactIcons = (
    <ul className="contact-items flex gap-[2.5vw] m-0 p-0">
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="mailto:contact@tesc.ucsd.edu" className="contact-icon no-underline text-black" aria-label="Email">
          <IconEmail />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://instagram.com/tesc.at.ucsd/" className="contact-icon no-underline text-black" aria-label="Instagram">
          <IconInstagram />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://www.linkedin.com/company/tescatucsd/" className="contact-icon no-underline text-black" aria-label="LinkedIn">
          <IconLinkedin />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://x.com/UCSDTESC/" className="contact-icon no-underline text-black" aria-label="X">
          <IconX />
        </a>
      </li>
      <li className="contact-item text-[2.5vw] font-medium list-none">
        <a href="https://discord.gg/C9w2cShb4B" className="contact-icon no-underline text-black" aria-label="Discord">
          <IconDiscord />
        </a>
      </li>
    </ul>
  );

  return (
    <div className="footer bg-[#FCFCFC] w-full [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col select-none">
      <div className="contact flex flex-col bg-[#D8C1F7] w-full h-[200px] text-[48px] items-center justify-center mt-[-20px] pt-5 z-[1] select-text max-[768px]:text-[32px] max-[768px]:h-auto max-[768px]:py-5 max-[768px]:pt-10" id="contact">
        <p className="m-0 text-center">Contact us</p>
        {contactIcons}
      </div>
      <div className="tesc bg-black h-[485px] flex flex-col items-center justify-center text-white px-5 text-center max-[768px]:h-auto max-[768px]:p-[5dvw]">
        <p id="organized" className="[font-family:'League_Spartan',sans-serif] [font-optical-sizing:auto] not-italic text-[32px] max-[768px]:text-[24px]">organized by</p>
        <img id="logo" className="my-5 max-[768px]:w-4/5 max-[768px]:h-auto" src={Logo} alt="TESC" width="522" height="59" loading="lazy" decoding="async"></img>
        <p id="desc" className="text-[24px] max-w-[1080px] text-center mt-5 max-[768px]:text-[18px]">
          The Triton Engineering Student Council empowers UC San Diego engineering students by
          connecting them with impactful communities, projects, and career building opportunities.
        </p>
      </div>
    </div>
  );
}

export default Footer;
