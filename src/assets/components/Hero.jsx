import { useState, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import avatarImg from "../hero.png";
import CV from "../cv.pdf";
import { Link } from "react-scroll";

const roles = ["Web Developer", "Web Designer", "WordPress Developer"];

const useTypingAnimation = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = roles[wordIndex];
    const speed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 1600);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, isPaused]);

  return displayText;
};

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10+", label: "Projects" },
  { number: "5+", label: "Happy Clients" },
];

const socialLinks = [
  {
    href: "https://github.com/juanmarcosstudio",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "#",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: FaFacebook,
    label: "Facebook",
  },
];

const Hero = () => {
  const displayText = useTypingAnimation();

  return (
    <div className="relative text-white flex flex-col-reverse md:flex-row justify-center items-center py-20 md:py-28 px-5 sm:px-10 lg:px-40 overflow-hidden">
      {/* Gradient base — dark / light */}
      <div className="absolute inset-0 bg-gradient-to-br dark:from-[#2a2e2e] dark:via-[#353A3A] dark:to-[#1e2222] from-[#f0ede8] via-[#f5f5f0] to-[#eaeae6]" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(234,185,73,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#eab949] to-transparent opacity-60" />

      {/* ── Left: Text content ── */}
      <div
        className="relative z-10 w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
        data-aos="fade-right"
      >
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 dark:bg-[#2a2e2e] bg-white border dark:border-[#eab949]/30 border-[#eab949]/40 rounded-full px-4 py-1.5 mb-5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs dark:text-gray-300 text-gray-600 font-medium tracking-wide">
            Available for freelance
          </span>
        </div>

        {/* Greeting */}
        <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#eab949] mb-1">
          Hello, I am
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
          <span className="dark:text-white text-[#1a1a1a]">Jhon </span>
          <span className="text-[#eab949]">Mark</span>
        </h1>

        {/* Typing animation */}
        <p className="text-lg md:text-xl font-semibold text-[#4370d8] mb-4 h-7">
          {displayText}
          <span className="inline-block w-0.5 h-5 bg-[#4370d8] ml-0.5 align-middle animate-pulse" />
        </p>

        {/* Description */}
        <p className="text-sm md:text-base dark:text-gray-300 text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          I am learning advanced JavaScript, improving my React.js skills for
          building interactive user interfaces, and working on backend
          development with Node.js and Express to create efficient and scalable
          applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-7">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#eab949] text-[#353A3A] font-bold px-8 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(234,185,73,0.55)] hover:scale-105 transition-all duration-200 cursor-pointer text-sm"
          >
            Contact Me
          </Link>
          <a
            href={CV}
            download="jhonmarkresume.pdf"
            className="flex items-center gap-2 border-2 border-[#4370d8] text-[#4370d8] font-semibold px-6 py-2 rounded-full hover:bg-[#4370d8] hover:text-white hover:shadow-[0_0_15px_rgba(67,112,216,0.45)] transition-all duration-200 text-sm"
          >
            Download CV <BsDownload />
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center md:justify-start gap-3 mt-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border dark:border-white/20 border-gray-300 dark:text-gray-400 text-gray-500 hover:border-[#eab949] hover:text-[#eab949] hover:shadow-[0_0_10px_rgba(234,185,73,0.35)] transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center md:justify-start gap-6 mt-8 pt-6 dark:border-t dark:border-white/10 border-t border-gray-200">
          {stats.map(({ number, label }, i) => (
            <div key={label} className="flex items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-2xl font-extrabold text-[#eab949] leading-none">
                  {number}
                </p>
                <p className="text-xs dark:text-gray-400 text-gray-500 mt-0.5">{label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 dark:bg-white/15 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: Avatar with glow halo ── */}
      <div
        className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end"
        data-aos="fade-left"
      >
        <div className="relative">
          {/* Glow halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#eab949] opacity-20 blur-3xl pointer-events-none" />
          <img
            className="relative max-w-full h-auto drop-shadow-2xl"
            src={avatarImg}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
