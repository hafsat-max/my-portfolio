import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import AboutBg from "@/public/about-img.webp";
import AboutIllustrator from "@/public/about-illustrator.svg";
import { Mulish } from "next/font/google";
import Technology from "./components/technology";
import ProjectLink from "./components/project-link";
import { TbMapSearch } from "react-icons/tb";
import { MdInfoOutline, MdOutlineEmail } from "react-icons/md";
import { projects } from "./constants/project-list";
import { techStack } from "./constants/tech-stack";
import { socialLinks } from "./constants/social-links";
import { navItems } from "./constants/navlist";
import MobileSidebar from "./components/mobile-sidebar";
import { Tooltip } from "@mantine/core";

const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white">
      <nav className="flex fixed z-10 w-full top-0 items-center shadow-sm px-10 py-[25px] bg-white text-primary justify-between">
        <h3 className="font-bold text-[20px] text-tunes-heading cursor-pointer">
          <a href="#home">
            <Image
              src="/hafs.png"
              width={83}
              height={23}
              className="w-[96px] h-[23px]"
              alt="logo"
            />
          </a>
        </h3>
        <ul className="flex max-[520px]:hidden items-center gap-[2rem]">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="text-tunes-heading text-[17px] font-semibold transition-all duration-[.23s]"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <MobileSidebar />
      </nav>
      <section
        id="home"
        className="min-h-screen py-[80px] bg-tunes-hero flex items-center"
      >
        <section className="flex gap-[10rem] flex-col app-container">
          <div className="flex justify-between max-[835px]:pt-10 max-[835px]:flex-col-reverse items-center gap-4">
            <div className="flex gap-6 max-w-[55rem] flex-col">
              <h1 className="text-hero leading-[1.2] font-bold">
                Software Engineer 👋
              </h1>
              <h4 className="text-tunes-subheading font-medium text-primary leading-[1.6]">
                Hi, I&apos;m Abiodun Busari. A passionate Software Engineer
                based in Ibadan, Nigeria. 📍
              </h4>
              <div className="flex items-center gap-[1.3rem]">
                {socialLinks.map(({ Icon, link }, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    className="transition-all cursor-pointer hover:text-tunes-link duration-[0.2s] text-[3rem] text-tunes-heading"
                  >
                    <Icon size={32} />
                  </a>
                ))}
              </div>
            </div>
            <div className=" max-[500px]:w-full max-[500px]:h-auto max-[500px]:aspect-[1/1] hero-img"></div>
          </div>
          <div className="flex items-center gap-[3rem] flex-wrap text-primary text-tunes-paragraph">
            <p className="font-semibold whitespace-nowrap pr-[2rem] text-tunes-heading border-r-2 border-r-tunes-border">
              Tech Stack
            </p>
            {techStack.map((item, idx) => (
              <span key={idx}>
                <Image
                  width={90}
                  height={50}
                  className="h-[5rem] cursor-pointer hover:translate-y-[-1rem] w-[9rem] duration-[0.3s] ease-in-out transition-all"
                  src={item}
                  alt="skill-icon"
                  loading="lazy"
                />
              </span>
            ))}
          </div>
        </section>
      </section>
      <section id="about" className="py-[15rem] bg-white">
        <div className="app-container max-[800px]:flex-col max-[800px]:gap-6 flex items-center">
          <div className="flex-1 relative">
            <Image
              src={AboutBg}
              className="w-[80%] max-[800px]:w-full h-[35rem] rounded-[1.7rem] object-cover"
              alt="about section background"
            />
            <span className="w-[19rem] h-[19rem] bottom-[-33px] shadow-sm right-[30px] rounded-[50%] bg-white absolute">
              <Image
                src={AboutIllustrator}
                className="about-image"
                alt="about section illustration"
              />
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-[10px]">
              <h3 className="section-heading">ABOUT ME</h3>
              <h4 className="section-subheading">
                Passionate Software Engineer Maestro
                <br />
                <span>Thriving in Ibadan, Nigeria 🌐</span>
              </h4>
              <p
                className={`text-primary text-justify text-tunes-paragraph font-medium leading-[1.5] ${mulish.className}`}
              >
                With over 3 years of experience as a dedicated Sofware Engineer,
                I excel in crafting dynamic web applications using TypeScript,
                React, and NextJs. My comprehensive understanding of backend
                technologies like NodeJs, Express, and NestJS enables me to
                create more efficient and well-integrated frontend solutions. I
                leverage my full-stack knowledge to build seamless,
                high-performing applications that offer a robust user
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-[15rem] bg-tunes-hero">
        <div className="app-container flex gap-[6rem] flex-col">
          <div className="flex flex-col gap-[1rem]">
            <h3 className="section-heading">PORTFOLIO</h3>
            <h4 className="section-subheading">
              Each project is a unique piece of development 🧩
            </h4>
          </div>
          <section className="flex flex-col gap-[5rem]">
            {projects?.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg flex items-center max-[800px]:flex-col gap-[8rem] p-[2rem] rounded-[1.7rem]"
              >
                <div className="w-[50%] h-full max-[800px]:w-full rounded-[1.7rem] bg-tunes-project overflow-hidden shadow-lg">
                  <a href={item.liveLink} target="_blank">
                    <Image
                      src={item.image}
                      width={530}
                      height={3000}
                      alt="project"
                      className="h-auto w-full"
                      style={{
                        transition: "transform 10s ease-in-out 0s",
                      }}
                    />
                  </a>
                </div>
                <div className="flex  flex-col max-[800px]:w-full gap-[30px] h-full w-[50%] overflow-auto items-center">
                  <div className="flex w-full flex-col gap-5">
                    <h3 className="flex items-center gap-[0.2rem] font-bold text-tunes-heading text-primary">
                      {item.name}
                      {item.info && (
                        <Tooltip label={item.info}>
                          <span className="cursor-pointer hover:text-tunes-link">
                            <MdInfoOutline />
                          </span>
                        </Tooltip>
                      )}
                    </h3>
                    <p className="text-tunes-paragraph text-justify font-medium text-primary">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap w-full px-2 gap-[1rem]">
                      {item.technologies.map((el, id) => (
                        <Technology key={id} tech={el} />
                      ))}
                    </div>
                  </div>
                  <ProjectLink
                    sourceCode={item.codeLink}
                    live={item.liveLink}
                  />
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section id="contact" className="py-[11rem] bg-white">
        <div className="app-container flex gap-[6rem] flex-col">
          <div className="flex flex-col gap-[1rem]">
            <h3 className="section-heading">CONTACT</h3>
            <p className="section-subheading">Hit me up! 👇</p>
          </div>
          <div className="flex items-center gap-[8rem] flex-wrap">
            <div className="flex items-center gap-[1.5rem]">
              <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
                <TbMapSearch size={30} />
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-tunes-heading font-bold text-primary">
                  Location
                </h3>
                <p className="text-tunes-paragraph text-primary">
                  Ibadan, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[1.5rem]">
              <span className="w-[5rem] bg-white shadow-lg text-tunes-link rounded-full h-[5rem] flex items-center justify-center">
                <MdOutlineEmail size={30} />
              </span>
              <div className="flex flex-col gap-[0.5rem]">
                <h3 className="text-tunes-heading font-bold text-primary">
                  Mail
                </h3>
                <a
                  href="mailto:abiodunabusari@gmail.com"
                  target="_blank"
                  className="text-tunes-paragraph hover:text-tunes-link text-primary"
                  style={{ wordBreak: "break-word" }}
                >
                  abiodunabusari@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-tunes-heading py-[5rem]">
        <div className="app-container flex max-[405px]:flex-col max-[405px]:gap-8 items-center justify-between">
          <h3 className="text-primary text-white text-center font-bold">
            Copyright © 2024. All rights are reserved
          </h3>
          <span className="flex items-center gap-[2rem]">
            {socialLinks.map(({ Icon, link }, idx) => (
              <a
                key={idx}
                href={link}
                style={{ transition: "all .2s ease-in-out" }}
                className="cursor-pointer text-white hover:scale-[1.2] text-[2.3rem]"
              >
                <Icon size={36} />
              </a>
            ))}
          </span>
        </div>
      </footer>
    </main>
  );
}
