import Header from "./Header";

function Home() {
  return (
    <div className="home bg-[#fcfcfc] w-full h-screen [font-family:'Lalezar',system-ui] font-normal not-italic select-none max-[1100px]:h-[100dvh] max-[1100px]:flex max-[1100px]:flex-col" id="home">
      <Header />
      <div className="content flex flex-row items-center justify-center m-0 h-[calc(100vh-90px)] max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:h-auto max-[1100px]:m-5 max-[1100px]:grow max-[1100px]:items-center">
        <div className="title flex flex-col items-center">
          <p id="heading" className="text-[#29193e] text-[128px] mb-[-24px] mt-0 [text-shadow:0px_0px_250px_rgb(0,0,0)] max-[1100px]:text-[85px] max-[712px]:text-[50px] max-[437px]:text-[36px]">DECaF Winter 2026</p>
          <p id="subheading" className="text-[#c8a9f1] text-[24px] my-5 [text-shadow:0px_0px_250px_rgb(0,0,0)] max-[1100px]:text-[18px] max-[1100px]:my-[10px]">Disciplines of Engineering Career Fair</p>
          <p id="venue" className="text-[#8c74b7] text-[24px] m-auto [text-shadow:0px_0px_250px_rgb(0,0,0)] select-text max-[1100px]:text-[18px] max-[1100px]:my-[10px] max-[1100px]:mx-0">Price Center Ballroom West A, UC San Diego</p>
          <p id="venue" className="text-[#8c74b7] text-[24px] m-auto [text-shadow:0px_0px_250px_rgb(0,0,0)] select-text max-[1100px]:text-[18px] max-[1100px]:my-[10px] max-[1100px]:mx-0">January 20th, 2026</p>
          <div className="buttons flex flex-row text-[28px] max-[1100px]:flex-col">
            <div className="button-group flex flex-col items-center text-[18px] text-black max-[1100px]:my-[10px] max-[1100px]:mx-0 max-[712px]:m-[10px]">
              <div className="button w-[320px] h-20 mt-12 mx-24 mb-[10px] rounded-[100px] shadow-[0px_0px_250px_hsl(0,0%,25%)] text-center content-center z-[1] text-white text-[28px] bg-[#8c74b7] opacity-50 hover:bg-[hsl(261,32%,62%)] max-[1100px]:w-[90%] max-[1100px]:h-[60px] max-[1100px]:my-5 max-[1100px]:mx-0 max-[1100px]:text-[20px] max-[712px]:w-[200px] max-[712px]:h-[60px] max-[712px]:m-5 max-[712px]:text-[20px]" id="student">
                {/* Student Registration */}
                {/* <a href="https://forms.gle/dPk6P3kuiP9Lwut46" target="_blank" rel="noreferrer">
                  Student Registration
                </a> */}
                Student Registration
              </div>
              <p className="deadline m-0 max-[1100px]:text-[16px]">Registration Closed</p>
            </div>
            <div className="button-group flex flex-col items-center text-[18px] text-black max-[1100px]:my-[10px] max-[1100px]:mx-0 max-[712px]:m-[10px]">
              <div className="button w-[320px] h-20 mt-12 mx-24 mb-[10px] rounded-[100px] shadow-[0px_0px_250px_hsl(0,0%,25%)] text-center content-center z-[1] text-white text-[28px] bg-[#8c74b7] opacity-100 max-[1100px]:w-[90%] max-[1100px]:h-[60px] max-[1100px]:my-5 max-[1100px]:mx-0 max-[1100px]:text-[20px] max-[712px]:w-[200px] max-[712px]:h-[60px] max-[712px]:m-5 max-[712px]:text-[20px]" id="company">
             
                <a className="no-underline text-inherit" href="https://forms.gle/yxdVtcHmMG8gGMJh8" target="_blank" rel="noreferrer">
                Company Registration</a>
              </div>
              <p className="deadline m-0 max-[1100px]:text-[16px]">Registration Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
