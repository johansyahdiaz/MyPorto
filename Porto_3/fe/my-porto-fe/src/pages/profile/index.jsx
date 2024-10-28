import Layout from "../../components/layout";
import { FaReact, FaNodeJs, FaLaravel, FaFigma, FaWordpressSimple, FaCss3, FaGit, FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { FaPhp, FaLinkedin } from "react-icons/fa6";
import { SiCoreldraw } from "react-icons/si";
import { RiFlowChart } from "react-icons/ri";
import BadgeSkill from "../../components/badge";

export default function Profile() {
  return (
    <Layout>
      {" "}
      <div>
        <div className="hero min-h-64 z-0 my-36">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-[#E2E2B6]">Halo, I&lsquo;M Johansyah Diaz</h1>
              <p className="py-6 text-white">
                I am a fresh graduate student majoring in Information Systems, with a focus on front-end development. Proficient in HTML, CSS, and JavaScript to create attractive and responsive user interfaces. I am always keen to keep up
                with the latest technology to continue developing my skills in building innovative web applications.
              </p>
              <button className="btn bg-[#03346E] text-[#E2E2B6] m-2">
                My CV <IoDocumentAttachOutline />
              </button>
              <button className="btn bg-[#03346E] text-[#E2E2B6] m-2">
                Github <FaGithub />
              </button>
              <button className="btn bg-[#03346E] text-[#E2E2B6] m-2">
                linkedin <FaLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className=" text-center font-extrabold text-3xl text-[#E2E2B6]">Skills</h1>
        <div className="m-4 border-t-2 md:m-8 sm:mt-1 ">
          <div className="pt-10 justify-center gap-6 min-h-60 flex flex-wrap 2xl:mx-72">
            <BadgeSkill label="HTML" Icon={IoLogoHtml5} />
            <BadgeSkill label="CSS" Icon={FaCss3} />
            <BadgeSkill label="JavaScript" Icon={IoLogoJavascript} />
            <BadgeSkill label="PHP" Icon={FaPhp} />
            <BadgeSkill label="Wordpress" Icon={FaWordpressSimple} />
            <BadgeSkill label="Node Js" Icon={FaNodeJs} />
            <BadgeSkill label="ReactJs" Icon={FaReact} />
            <BadgeSkill label="Laravel" Icon={FaLaravel} />
            <BadgeSkill label="Git" Icon={FaGit} />
            <BadgeSkill label="Github" Icon={FaGithub} />
            <BadgeSkill label="Figma" Icon={FaFigma} />
            <BadgeSkill label="CorelDraw" Icon={SiCoreldraw} />
            <BadgeSkill label="Draw.io" Icon={RiFlowChart} />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className=" text-center font-extrabold text-3xl text-[#E2E2B6]">Project</h1>
        <div className="m-4 border-t-2 md:m-8 sm:mt-1 "></div>
      </div>
    </Layout>
  );
}
