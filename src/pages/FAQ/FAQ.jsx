import FAQBox from "./FAQBox";
import Border from "../../assets/Border.svg";
function FAQ() {
  const generalFaqs = [
    {
      question: "What is DECaF?",
      answer:
        "DECaF, or the Disciplines of Engineering Career Fair, is an annual, student-run career fair organized by the Triton Engineering Student Council at UC San Diego. It connects engineering students with recruiters from various industries."
    },
    {
      question: "When and where does DECaF Winter 2026 take place?",
      answer:
        "DECaF Winter 2026 will be held on January 20th, 2026, from 10 AM to 2 PM at the Price Center West Ballroom A, UC San Diego."
    },
    {
      question: "How can I get more information?",
      answer:
        "For more information, please contact us at contact@tesc.ucsd.edu or visit our website for the latest updates."
    }
  ];

  const recruiterFaqs = [
    {
      question: "How can my company participate?",
      answer:
        "Companies interested in participating can find the registration link on the home page. The deadline for registration is January 2nd, 2026."
    },
    {
      question: "Are there any costs associated with participating?",
      answer:
        "Yes, there are various sponsorship packages available. Details can be found on the registration form or by contacting us directly at sponsorship@tesc.ucsd.edu."
    },
    {
      question: "What benefits will our company receive by participating?",
      answer:
        "Participating companies gain direct access to a diverse pool of motivated and skilled engineering students, engage in recruiting sessions, and receive a comprehensive resume database."
    }
  ];

  const studentFaqs = [
    {
      question: "How can I participate in DECaF?",
      answer:
        "Students can register for DECaF through our website. Details on registration will be available closer to the event date."
    },
    {
      question: "What can I expect at DECaF?",
      answer:
        "Students can attend recruiting and information sessions, receive feedback on their resumes, and network with potential employers."
    },
    {
      question: "How can I prepare for DECaF?",
      answer:
        "Prepare by updating your resume, researching participating companies, and practicing your networking and interview skills."
    }
  ];

  return (
    <div className="faq bg-[#FCFCFC] w-full [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col" id="faq">
      <img className="z-[2]" src={Border} alt=""></img>
      <div className="title flex bg-[#D8C1F7] w-full h-[131px] text-[64px] items-center justify-center [text-shadow:0px_0px_150px_rgb(0,0,0)] mt-[-20px] pt-[30px] z-[1] max-[768px]:text-[40px] max-[768px]:w-auto max-[768px]:text-center">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="content bg-[#D8C1F7] flex flex-col items-center justify-center px-[234px] mb-[-20px] pb-16 max-[768px]:px-4">
        <div className="content-g flex flex-col items-center justify-center pb-9 [&_div]:bg-[#9A8FBC] max-[768px]:pb-5">
          <span className="text-[36px] max-[768px]:text-[28px]">General</span>
          {generalFaqs.map((faq, index) => (
            <FAQBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="content-r flex flex-col items-center justify-center pb-9 [&_div]:bg-[#8C74B7] max-[768px]:pb-5">
          <span className="text-[36px] max-[768px]:text-[28px]">Recruiters</span>
          {recruiterFaqs.map((faq, index) => (
            <FAQBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="content-s flex flex-col items-center justify-center pb-9 [&_div]:bg-[#7B639B] max-[768px]:pb-5">
          <span className="text-[36px] max-[768px]:text-[28px]">Students</span>
          {studentFaqs.map((faq, index) => (
            <FAQBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      <img className="z-[2]" src={Border} alt=""></img>
    </div>
  );
}

export default FAQ;
