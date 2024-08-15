import { GiAutoRepair } from "react-icons/gi";

import tpmajalogo from "../assets/images/tpmajalogo.svg";
function Portfolio() {
  return (
    <section className="p-5" id="portfolio">
      <div className="mb-12 text-center">
        <h3 className="text-xl text-gray-600">Browse my recent</h3>
        <h2 className="mt-2 text-2xl font-semibold"> Projects</h2>
      </div>

      <div className="flex flex-col items-center gap-10 md:flex-row">
        <div className="flex w-2/3 flex-col items-center gap-5 rounded-2xl bg-white p-5 py-10 text-center ring-1 ring-gray-300 md:w-1/3">
          <img
            src={tpmajalogo}
            alt="Logo TP Maja Micic"
            className="h-auto w-full max-w-[150px] rounded-xl border-2 p-6 md:max-w-[200px]"
          />
          <a
            className="text-xl font-semibold text-blue-800 hover:text-blue-600"
            href="https://tpmajamicic.com "
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tpmajamicic.com
          </a>
          <button className="mt-4 rounded-full border-2 bg-gray-600 px-6 py-5 text-white duration-500 hover:bg-gray-800">
            <a
              href="https://tpmajamicic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              Live demo
            </a>
          </button>
        </div>
        <div className="flex w-2/3 flex-col items-center gap-5 rounded-2xl bg-white p-5 py-10 text-center ring-1 ring-gray-300 md:w-1/3">
          <GiAutoRepair className="h-auto w-full max-w-[150px] rounded-xl border-2 p-6 md:max-w-[200px]" />
          <a className="text-xl font-semibold" href="#">
            Comming soon...
          </a>
          <button className="mt-4 rounded-full border-2 bg-gray-600 px-6 py-5 text-white duration-500 hover:bg-gray-800">
            <a className="font-semibold">Live demo</a>
          </button>
        </div>
        <div className="flex w-2/3 flex-col items-center gap-5 rounded-2xl bg-white p-5 py-10 text-center ring-1 ring-gray-300 md:w-1/3">
          <GiAutoRepair className="h-auto w-full max-w-[150px] rounded-xl border-2 p-6 md:max-w-[200px]" />
          <a className="text-xl font-semibold" href="#">
            Comming soon...
          </a>
          <button className="mt-4 rounded-full border-2 bg-gray-600 px-6 py-5 text-white duration-500 hover:bg-gray-800">
            <a className="font-semibold">Live demo</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
