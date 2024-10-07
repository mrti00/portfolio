import { GiAutoRepair } from "react-icons/gi";
import tpmajalogo from "../assets/images/tpmajalogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="p-5 px-20 pb-16" id="portfolio">
      <div className="mb-12 text-center" data-aos="fade-up">
        <h3 className="text-xl text-gray-600">Browse my recent</h3>
        <h2 className="mt-2 text-2xl font-semibold">Projects</h2>
      </div>

      <div
        className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-44"
        data-aos="fade-up"
      >
        <div className="w-3/3 flex flex-col items-center gap-5 rounded-2xl bg-white p-5 py-10 text-center ring-1 ring-gray-300 md:w-1/3">
          <img
            src={tpmajalogo}
            alt="Logo TP Maja Micic"
            className="h-auto w-full max-w-[250px] rounded-xl border-2 p-6"
          />
          <a
            className="text-sm font-semibold text-blue-800 hover:text-blue-600 lg:text-xl"
            href="https://tpmajamicic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tpmajamicic.com
          </a>
          <a
            className="mt-4 inline-block rounded-full border-2 bg-gray-600 px-6 py-5 text-white duration-500 hover:bg-gray-800"
            href="https://tpmajamicic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-semibold">Live demo</p>
          </a>
        </div>
        <div className="mt-10" data-aos="fade-up">
          <GiAutoRepair className="m-auto text-4xl text-gray-500" />

          <hr className="mt-5 h-1 border-t-2 border-transparent bg-gradient-to-r from-[#d0d0d0] via-white to-[#d0d0d0]" />
          <h2 className="p-5 text-center text-xl font-medium">
            Other projects coming soon...
          </h2>

          <hr className="h-1 border-t-2 border-transparent bg-gradient-to-r from-[#d0d0d0] via-white to-[#d0d0d0]" />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
