import saxGuy from '../../assets/SaxGuy.svg?raw'
import InlineSvg from '../../components/InlineSvg'

function About() {
    return(
        <div className="about bg-page w-full h-dvh font-display font-normal not-italic flex flex-col" id='about'>
            <div className="title flex bg-page text-ink w-full h-27.75 text-[64px] items-center justify-center max-[768px]:text-[40px] max-[768px]:w-auto"><p>What is DECaF?</p></div>
            <div className='content bg-banner max-w-full h-auto flex flex-row grow items-center justify-center max-[768px]:flex-col max-[768px]:p-5 max-[768px]:h-auto'>
                <div className="section-content flex flex-row items-center justify-center max-[768px]:flex-col">
                <div>
                    <InlineSvg markup={saxGuy} title="SaxGuy" className="w-113 max-[768px]:hidden" />
                </div>
                <div className='desc max-[768px]:ml-0 max-[768px]:text-center'>
                    <p className="text-[24px] text-paper my-10 max-[768px]:text-[18px] max-[768px]:my-5">The Disciplines of Engineering Career Fair (DECaF) is an annual, student-run event hosted by the Triton Engineering Student Council at UC San Diego. </p>
                    <p className="text-[24px] text-paper my-10 max-[768px]:text-[18px] max-[768px]:my-5">It connects top engineering students with leading recruiters through networking opportunities, recruiting sessions, and resume feedback. </p>
                    <p className="text-[24px] text-paper my-10 max-[768px]:text-[18px] max-[768px]:my-5">With over 1,000 students from various engineering majors attending each year, DECaF provides a unique platform for companies to engage with and recruit talented future professionals.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
