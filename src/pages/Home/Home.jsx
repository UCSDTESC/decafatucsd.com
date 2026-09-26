import Header from "./Header";

const STUDENT_REGISTRATION_URL =
  "https://portal.tescatucsd.org/bulletin/412?from=qr&token=daaae331-493c-47f4-b428-270b24755d68";

const COMPANY_REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfuXbzwsxynAxVVITGtdC6QqURwwRZ_k_Xp68a8RF2IX1akrw/viewform?usp=dialog";

// Company registration stays open through the end of October 1, 2026 (Pacific Time).
const COMPANY_REGISTRATION_CLOSES_AT = new Date("2026-10-02T00:00:00-07:00");

const buttonClass =
  "button w-[320px] h-20 mt-12 mx-24 mb-[10px] rounded-[100px] text-center content-center z-[1] text-paper text-[28px] bg-brand max-[1100px]:w-[90%] max-[1100px]:h-[60px] max-[1100px]:my-5 max-[1100px]:mx-0 max-[1100px]:text-[20px] max-[712px]:w-[200px] max-[712px]:h-[60px] max-[712px]:m-5 max-[712px]:text-[20px]";

function RegistrationButton({ id, label, href, isOpen }) {
  return (
    <div className="button-group flex flex-col items-center text-[18px] text-heading max-[1100px]:my-[10px] max-[1100px]:mx-0 max-[712px]:m-[10px]">
      <div
        className={`${buttonClass} ${isOpen ? "opacity-100 hover:opacity-80" : "opacity-50"}`}
        id={id}
      >
        {isOpen ? (
          <a className="no-underline text-inherit" href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        ) : (
          label
        )}
      </div>
      <p className="deadline m-0 max-[1100px]:text-[16px]">
        {isOpen ? "Registration Open" : "Registration Closed"}
      </p>
    </div>
  );
}

function Home() {
  const isCompanyRegistrationOpen = Date.now() < COMPANY_REGISTRATION_CLOSES_AT.getTime();

  return (
    <div className="home bg-page w-full h-screen font-display font-normal not-italic select-none max-[1100px]:h-dvh max-[1100px]:flex max-[1100px]:flex-col" id="home">
      <Header />
      <div className="content flex flex-row items-center justify-center m-0 h-[calc(100vh-90px)] max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:h-auto max-[1100px]:m-5 max-[1100px]:grow max-[1100px]:items-center">
        <div className="title section-content flex flex-col items-center">
          <p id="heading" className="text-heading text-[128px] mb-[-24px] mt-0 max-[1100px]:text-[85px] max-[712px]:text-[50px] max-[437px]:text-[36px]">DECaF Fall 2026</p>
          <p id="subheading" className="text-subtitle text-[24px] my-5 max-[1100px]:text-[18px] max-[1100px]:my-[10px]">Disciplines of Engineering Career Fair</p>
          <p id="venue" className="text-ink text-[24px] m-auto select-text max-[1100px]:text-[18px] max-[1100px]:my-2.5 max-[1100px]:mx-0">Price Center Ballroom West A, UC San Diego</p>
          <p id="venue" className="text-ink text-[24px] m-auto select-text max-[1100px]:text-[18px] max-[1100px]:my-2.5 max-[1100px]:mx-0">October 13th, 2026</p>
          <div className="buttons flex flex-row text-[28px] max-[1100px]:flex-col">
            <RegistrationButton
              id="student"
              label="Student Registration"
              href={STUDENT_REGISTRATION_URL}
              isOpen
            />
            <RegistrationButton
              id="company"
              label="Company Registration"
              href={COMPANY_REGISTRATION_URL}
              isOpen={isCompanyRegistrationOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
