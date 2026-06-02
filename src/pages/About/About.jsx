import SaxGuy from '../../assets/SaxGuy.svg'

function About() {
    return(
        <div className="about bg-[#FCFCFC] w-full h-[100dvh] [font-family:'Lalezar',system-ui] font-normal not-italic flex flex-col" id='about'>
            <div className="title flex bg-[#FCFCFC] w-full h-[111px] text-[64px] items-center justify-center [text-shadow:0px_0px_150px_rgb(0,0,0)] max-[768px]:text-[40px] max-[768px]:w-auto"><p>What is DECaF?</p></div>
            <div className='content bg-[#D8C1F7] max-w-full h-auto flex flex-row grow items-center justify-center max-[768px]:flex-col max-[768px]:p-5 max-[768px]:h-auto'>
                <div>
                    <img className="max-[768px]:w-4/5 max-[768px]:mb-5 max-[768px]:hidden" src={SaxGuy} alt='SaxGuy' id='sax'></img>
                </div>
                <div className='desc max-[768px]:ml-0 max-[768px]:text-center'>
                    <p className="text-[24px] text-[#65558F] [text-shadow:0px_0px_100px_rgb(0,0,0)] my-10 max-[768px]:text-[18px] max-[768px]:my-5">The Disciplines of Engineering Career Fair (DECaF) is an annual, student-run event hosted by the Triton Engineering Student Council at UC San Diego. </p>
                    <p className="text-[24px] text-[#65558F] [text-shadow:0px_0px_100px_rgb(0,0,0)] my-10 max-[768px]:text-[18px] max-[768px]:my-5">It connects top engineering students with leading recruiters through networking opportunities, recruiting sessions, and resume feedback. </p>
                    <p className="text-[24px] text-[#65558F] [text-shadow:0px_0px_100px_rgb(0,0,0)] my-10 max-[768px]:text-[18px] max-[768px]:my-5">With over 1,000 students from various engineering majors attending each year, DECaF provides a unique platform for companies to engage with and recruit talented future professionals.</p>
                </div>
            </div>
        </div>
    )
}

export default About
