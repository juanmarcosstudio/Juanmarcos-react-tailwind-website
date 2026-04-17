import { useState, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import bgImage from "../bg.png";
import CV from "../cv.pdf";
import { Link } from "react-scroll";

const roles = ["Web Developer & Designer", "WordPress Developer", "SEO Specialist"];

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
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1600);
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") { setIsDeleting(false); setWordIndex((prev) => (prev + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, isPaused]);

  return displayText;
};

const stats = [
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Projects Delivered" },
  { number: "3", label: "Services Offered" },
];

const socialLinks = [
  { href: "https://github.com/juanmarcosstudio", icon: FiGithub, label: "GitHub" },
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "#", icon: FaFacebook, label: "Facebook" },
];

const Hero = () => {
  const displayText = useTypingAnimation();

  return (
    <div
      className="relative text-[#F5F5F5] min-h-[520px] md:min-h-[580px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay 1 */}
      <div className="absolute inset-0" style={{ background: "rgba(20, 26, 26, 0.78)" }} />
      {/* Dark green overlay 2 */}
      <div className="absolute inset-0" style={{ background: "rgba(20, 42, 36, 0.50)" }} />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(245,166,35,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5A623] to-transparent opacity-60" />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto px-6 sm:px-10 py-14 md:py-20 text-center"
        data-aos="fade-up"
      >
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(245,166,35,0.10)] border border-[rgba(245,166,35,0.3)] rounded-full px-4 py-1.5 mb-5 mx-auto">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-[#F5A623] font-medium tracking-wide">
            Available for Freelance
          </span>
        </div>

        {/* Greeting */}
        <p className="text-sm md:text-base font-semibold uppercase tracking-widest text-[#F5A623] mb-1">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-2">
          <span className="text-[#F5F5F5]">Jhon </span>
          <span className="text-[#F5A623]">Mark</span>
        </h1>

        {/* Typing animation */}
        <p className="text-lg md:text-xl font-semibold text-[#4a9e96] mb-5 h-7">
          {displayText}
          <span className="inline-block w-0.5 h-5 bg-[#4a9e96] ml-0.5 align-middle animate-pulse" />
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-[#b8c8c4] max-w-xl mx-auto leading-relaxed mb-7">
          I build fast, clean, and user-friendly websites — from custom React
          apps to WordPress sites. Currently leveling up my JavaScript, React,
          and Node.js skills to deliver even better work for my clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-5">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#F5A623] text-[#1a1a1a] font-bold px-8 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,166,35,0.40)] hover:scale-105 transition-all duration-200 cursor-pointer text-sm"
          >
            Get In Touch
          </Link>
          <a
            href={CV}
            download="jhonmarkresume.pdf"
            className="flex items-center gap-2 border-2 border-[#4a9e96] text-[#4a9e96] font-semibold px-6 py-2 rounded-full hover:bg-[#4a9e96] hover:text-[#F5F5F5] hover:shadow-[0_0_15px_rgba(74,158,150,0.35)] transition-all duration-200 text-sm"
          >
            Download CV <BsDownload />
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mb-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-[#7a9490] hover:border-[#F5A623] hover:text-[#F5A623] hover:shadow-[0_0_10px_rgba(245,166,35,0.35)] transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-8 border-t border-white/10 pt-6 mt-6">
          {stats.map(({ number, label }, i) => (
            <div key={label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#F5A623] leading-none">{number}</p>
                <p className="text-xs text-[#7a9490] mt-0.5">{label}</p>
              </div>
              {i < stats.length - 1 && <div className="w-px h-8 bg-white/15" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
