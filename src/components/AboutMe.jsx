import { SlBadge } from "react-icons/sl";
import { FaUniversity, FaTools } from "react-icons/fa";

function AboutMe() {
  return (
    <section className="mt-20 bg-gray-100 p-5 md:mt-52" id="aboutme">
      <div className="text-center">
        <h3 className="text-xl text-gray-600">Get to know more</h3>
        <h2 className="mt-2 text-2xl font-semibold"> About me</h2>
      </div>

      <div className="md:space mt-12 flex flex-col items-center md:mx-auto md:w-full md:flex-row md:justify-evenly">
        <div className="flex flex-col items-center gap-5 md:w-2/5">
          <div className="flex w-2/3 flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center ring-1 ring-gray-300">
            <SlBadge className="text-2xl" />
            <p className="font-bold">Experience</p>
            <p>4+ Years in IT Field</p>
          </div>
          <div className="flex w-2/3 flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center ring-1 ring-gray-300">
            <FaUniversity className="text-2xl" />
            <p className="font-bold">Education</p>
            <p>
              B.Sc. Bachelor&apos;s Degree at University of Singidunum, Belgrade
            </p>
            <p>Computer Science</p>
            <p>2019-2023</p>
          </div>
          <div className="flex w-2/3 flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center ring-1 ring-gray-300">
            <FaTools className="text-2xl" />
            <p className="font-bold">Skills</p>
            <p>HTML5</p>
            <p>CSS3 (SASS, Tailwind)</p>
            <p>Javascript (React)</p>
            <p>Git</p>
          </div>
        </div>
        <div className="mt-12 w-2/3 pb-5 md:mt-0 md:w-3/5 md:pb-0">
          <p className="leading-relaxed">
            Hey there! I&apos;m Marko Micic, a passionate frontend developer. My
            journey into the world of IT began during my college years, where I
            pursued a degree in Informatics and Computer Science.
          </p>
          <br />
          <p className="leading-relaxed">
            Throughout my studies, I immersed myself in various projects, honing
            my skills in HTML, CSS (including SCSS/SASS, Tailwind, and
            Bootstrap), and JavaScript (with experience in React, Angular,
            Node.js, and Express.js). Additionally, I&apos;ve dabbled in other
            languages and technologies like PHP, Python, and Java.
          </p>
          <br />
          <p className="leading-relaxed">
            Beyond coding, I have a solid grasp of essential IT concepts,
            including Linux, Git, object-oriented programming, computer
            networks, ethical hacking, software testing, databases,
            cryptography, and artificial intelligence.
          </p>
          <br />
          <p className="leading-relaxed">
            Looking ahead, I&apos;m eager to transition into a full-stack
            developer role, leveraging my frontend expertise while expanding my
            backend capabilities. Currently, I&apos;m on the lookout for junior
            positions or internship opportunities in the frontend realm.
          </p>
          <br />
          <p>
            Let&apos;s connect and collaborate to build exciting digital
            experiences!
          </p>
          <br />
          <p>
            Feel free to reach out to me via email at:&nbsp;
            <a className="underline" href="mailto:micicmaarko@gmail.com">
              micicmaarko@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
