import Layout from "../../components/layout";
import Card from "../../components/card";

export default function Index() {
  return (
    <Layout>
      <div>
        <div className="hero min-h-screen z-0 ">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl font-bold text-[#E2E2B6]">Halo, I&lsquo;M Johansyah Diaz</h1>
              <p className="py-6 text-white">
                I am a fresh graduate student majoring in Information Systems, with a focus on front-end development. Proficient in HTML, CSS, and JavaScript to create attractive and responsive user interfaces. I am always keen to keep up
                with the latest technology to continue developing my skills in building innovative web applications.
              </p>
              <button className="btn bg-[#03346E] text-[#E2E2B6]">More Information</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-center font-extrabold text-3xl text-[#E2E2B6]">Project</h1>
        <div className="m-4 border-t-2 md:m-8 sm:mt-1">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mt-8 gap-8 lg:auto-rows-min lg:p-36 2xl:px-96 lg:px-20">
            <Card
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Buy Now"
              onButtonClick={() => console.log("Button clicked!")}
            />
            <Card
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Buy Now"
              onButtonClick={() => console.log("Button clicked!")}
            />
            <Card
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Buy Now"
              onButtonClick={() => console.log("Button clicked!")}
            />
            <Card
              image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              title="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              buttonText="Buy Now"
              onButtonClick={() => console.log("Button clicked!")}
            />
          </div>
        </div>
        <div className="mt-24">
          <h1 className=" text-center font-extrabold text-3xl text-[#E2E2B6]">Recent Posts</h1>
          <div className="m-4 border-t-2 md:m-8 sm:mt-1">
            <div className="min-h-60 grid grid-cols-1 items-center">
              <div>
                <p className="text-center">Comming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
