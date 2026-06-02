import CoffeeMug from "../../assets/CoffeeMug.svg";
import sponsors from "./Sponsors.json";
function Sponsor() {
  return (
    <div className="sponsor bg-[#fcfcfc] w-full min-h-[911px] [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col select-none" id="sponsor">
      <div className="title flex bg-[#d8c1f7] w-full h-[111px] text-[64px] items-center justify-center [text-shadow:0px_0px_150px_rgb(0,0,0)] max-[768px]:text-[40px] max-[768px]:w-auto">
        <p className="my-[25px]">Sponsors</p>
      </div>
      <div className="content bg-[#fcfcfc] max-w-full min-h-[750px] flex flex-col items-center justify-center px-[234px] [font-family:'League_Spartan',sans-serif] text-[#79747e] text-[36px] max-[768px]:p-[25px] max-[768px]:text-[28px]">
        <p className="my-[25px]">Annual</p>
        <div className="annual flex flex-row justify-center flex-wrap w-full pb-[25px] border-b border-[#79747e] items-center">
          {sponsors.Annual.map((sponsor, idx) => {
            return (
              <a
                key={`annual-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item h-[188px] w-[282px] rounded-[30px] m-[10px] text-center text-[25px] flex flex-col justify-center items-center text-[hsl(270,4%,66%)] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] bg-[hsl(218,69%,90%)] p-[15px] border border-[#ddd] transition-transform duration-300 ease-in-out hover:scale-105 max-[768px]:h-[150px] max-[768px]:w-[200px] max-[768px]:text-[20px] max-[768px]:m-[15px]">
                  <img className="max-w-full h-full object-contain" src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        <p className="my-[25px]">Platinum</p>
        <div className="plat flex flex-row justify-center flex-wrap w-full pb-[25px] border-b border-[#79747e] items-center">
          {sponsors.Platinum.map((sponsor, idx) => {
            return (
              <a
                key={`plat-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item h-[188px] w-[282px] rounded-[30px] m-[10px] text-center text-[25px] flex flex-col justify-center items-center text-[hsl(270,4%,66%)] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] bg-[hsl(270,70%,90%)] p-[15px] border border-[#ddd] transition-transform duration-300 ease-in-out hover:scale-105 max-[768px]:h-[150px] max-[768px]:w-[200px] max-[768px]:text-[20px] max-[768px]:m-[15px]">
                  <img className="max-w-full h-full object-contain" src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        <p className="my-[25px]">Gold</p>
        <div className="gold flex flex-row justify-center flex-wrap w-full pb-[25px] border-b border-[#79747e] items-center">
          {sponsors.Gold.map((sponsor, idx) => {
            return (
              <a
                key={`gold-` + idx}
                href={sponsor.Website || "#"}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="sponsor-item h-[188px] w-[282px] rounded-[30px] m-[10px] text-center text-[25px] flex flex-col justify-center items-center text-[hsl(270,4%,66%)] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] bg-[hsl(48,89%,85%)] p-[15px] border border-[#ddd] transition-transform duration-300 ease-in-out hover:scale-105 max-[768px]:h-[150px] max-[768px]:w-[200px] max-[768px]:text-[20px] max-[768px]:m-[15px]">
                  <img className="max-w-full h-full object-contain" src={sponsor.Logo} alt={sponsor.name}></img>
                </div>
              </a>
            );
          })}
        </div>
        {/* <p>Silver</p>
        <div className="silver">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
        </div>
        <p>Bronze</p>
        <div className="bronze">
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
          <div>
            <img src={CoffeeMug} alt="coffee_mug" id="mug"></img>
            Future Sponsor
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sponsor;
