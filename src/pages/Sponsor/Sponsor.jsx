import sponsors from "./Sponsors.json";
import coffeeMug from "../../assets/CoffeeMug.svg?raw";
import InlineSvg from "../../components/InlineSvg";

const cardClass =
  "sponsor-item h-[188px] w-[282px] rounded-[30px] m-[10px] text-center text-[25px] flex flex-col justify-center items-center text-sponsor-label p-[15px] border border-line transition-transform duration-300 ease-in-out hover:scale-105 max-[768px]:h-[150px] max-[768px]:w-[200px] max-[768px]:text-[20px] max-[768px]:m-[15px]";

const tierClass = {
  // Annual: `${cardClass} bg-sponsor-annual`,
  Platinum: `${cardClass} bg-sponsor-platinum`,
  Gold: `${cardClass} bg-sponsor-gold`,
  Silver: `${cardClass} bg-sponsor-silver`,
};

function SponsorCard({ sponsor, tier }) {
  return (
    <div className={tierClass[tier]}>
      {sponsor.Logo ? (
        <img
          className="max-w-full h-full object-contain"
          src={sponsor.Logo}
          alt={sponsor.name}
          width="252"
          height="158"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <InlineSvg
            markup={coffeeMug}
            decorative
            className="mb-[10px] h-[78px] w-[78px] opacity-50 max-[768px]:h-[60px] max-[768px]:w-[60px]"
          />
          {sponsor.name}
        </>
      )}
    </div>
  );
}

function SponsorTier({ title, tier }) {
  return (
    <>
      <p className="my-[25px]">{title}</p>
      <div className="flex flex-row justify-center flex-wrap w-full pb-[25px] border-b border-muted items-center">
        {sponsors[tier].map((sponsor, idx) =>
          sponsor.Website ? (
            <a
              key={`${tier}-${idx}`}
              href={sponsor.Website}
              target="_blank"
              rel="noreferrer noopener"
            >
              <SponsorCard sponsor={sponsor} tier={tier} />
            </a>
          ) : (
            <SponsorCard key={`${tier}-${idx}`} sponsor={sponsor} tier={tier} />
          )
        )}
      </div>
    </>
  );
}

function Sponsor() {
  return (
    <div
      className="sponsor bg-page w-full min-h-[911px] font-display font-normal not-italic flex flex-col select-none"
      id="sponsor"
    >
      <div className="title flex bg-banner text-paper w-full h-[111px] text-[64px] items-center justify-center max-[768px]:text-[40px] max-[768px]:w-auto">
        <p className="my-[25px]">Our Partners</p>
      </div>
      <div className="content bg-page max-w-full min-h-[750px] flex flex-col items-center justify-center px-6 font-body text-ink text-[36px] max-[768px]:p-[25px] max-[768px]:text-[28px]">
        <div className="section-content flex flex-col items-center">
          {/* <SponsorTier title="Annual" tier="Annual" /> */}
          <SponsorTier title="Platinum" tier="Platinum" />
          <SponsorTier title="Gold" tier="Gold" />
          <SponsorTier title="Silver" tier="Silver" />
        </div>
      </div>
    </div>
  );
}

export default Sponsor;
