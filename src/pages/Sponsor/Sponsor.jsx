import sponsors from "./Sponsors.json";

const cardClass =
  "sponsor-item h-[188px] w-[282px] rounded-[30px] m-[10px] text-center text-[25px] flex flex-col justify-center items-center text-[hsl(270,4%,66%)] p-[15px] border border-[#ddd] transition-transform duration-300 ease-in-out hover:scale-105 max-[768px]:h-[150px] max-[768px]:w-[200px] max-[768px]:text-[20px] max-[768px]:m-[15px]";

const tierClass = {
  Annual: `${cardClass} bg-[hsl(218,69%,90%)]`,
  Platinum: `${cardClass} bg-[hsl(270,70%,90%)]`,
  Gold: `${cardClass} bg-[hsl(48,89%,85%)]`,
};

function SponsorTier({ title, tier }) {
  return (
    <>
      <p className="my-[25px]">{title}</p>
      <div className="flex flex-row justify-center flex-wrap w-full pb-[25px] border-b border-[#79747e] items-center">
        {sponsors[tier].map((sponsor, idx) => (
          <a
            key={`${tier}-${idx}`}
            href={sponsor.Website || "#"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={tierClass[tier]}>
              <img
                className="max-w-full h-full object-contain"
                src={sponsor.Logo}
                alt={sponsor.name}
                width="252"
                height="158"
                loading="lazy"
                decoding="async"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

function Sponsor() {
  return (
    <div className="sponsor bg-[#fcfcfc] w-full min-h-[911px] [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col select-none" id="sponsor">
      <div className="title flex bg-[#d8c1f7] w-full h-[111px] text-[64px] items-center justify-center max-[768px]:text-[40px] max-[768px]:w-auto">
        <p className="my-[25px]">Sponsors</p>
      </div>
      <div className="content bg-[#fcfcfc] max-w-full min-h-[750px] flex flex-col items-center justify-center px-[234px] [font-family:'League_Spartan',sans-serif] text-[#79747e] text-[36px] max-[768px]:p-[25px] max-[768px]:text-[28px]">
        <SponsorTier title="Annual" tier="Annual" />
        <SponsorTier title="Platinum" tier="Platinum" />
        <SponsorTier title="Gold" tier="Gold" />
      </div>
    </div>
  );
}

export default Sponsor;
