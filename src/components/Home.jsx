import profilepic from "../assets/images/profile-pic.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  // Function to handle CV download or view
  const viewCV = () => {
    window.open("../files/Marko_Micic_CV.png", "_blank");
  };

  // Function to scroll to the specified section
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="p-24 md:p-24">
      <div className="md:mt-42 mt-36 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-24">
        <img
          src={profilepic}
          alt="Profile picture"
          className="h-auto w-60 justify-center md:w-96"
        />

        <div className="flex flex-col items-center gap-4">
          <h3 className="text-l font-bold text-gray-600 md:text-xl">
            Hello, I&apos;m
          </h3>
          <h1 className="text-3xl font-black text-gray-800 md:text-4xl">
            Marko Micic
          </h1>
          <h2 className="text-xl font-extrabold text-gray-600 md:text-2xl">
            Frontend Developer
          </h2>
          <div className="flex gap-2 md:gap-5">
            <button
              onClick={viewCV}
              className="rounded-full border-2 p-3 duration-500 hover:bg-gray-600 hover:text-white md:px-6 md:py-5"
            >
              <span className="font-semibold">View my CV</span>
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="rounded-full border-2 bg-gray-600 p-3 text-white duration-500 hover:bg-gray-800 md:px-6 md:py-5"
            >
              <span className="font-semibold">Contact Info</span>
            </button>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/markomicic031/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl duration-500 hover:text-gray-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mrti00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl duration-500 hover:text-gray-600"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
