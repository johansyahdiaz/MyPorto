import Layout from "../../components/layout";
import { FaReact } from "react-icons/fa";

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
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className=" text-center font-extrabold text-3xl text-[#E2E2B6]">Skills</h1>
        <div className="m-4 border-t-2 md:m-8 sm:mt-1">
          <div className="pt-10 justify-center gap-6 min-h-60 flex flex-wrap">
            <div className="h-fit w-fit flex items-center ">
              <p className="text">ReactJs</p>
              <FaReact />
            </div>
            <div></div>
            <div className="h-fit w-fit flex items-center ">
              <p className="text">ReactJs</p>
              <FaReact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
