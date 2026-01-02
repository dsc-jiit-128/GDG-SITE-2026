"use client";
import "./homePage.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  CheckCircle,
  CalendarRange,
  ShoppingBag,
  Sparkles,
  XCircle,
  Car,
  Zap,
  Coffee,
  FolderHeart,
  Users,
  Code2,
  Globe
} from "lucide-react";
import Navbar from "@/src/component/Navbar";

export default function HomePage() {
  const [fade, setFade] = useState(false);
  const [currTitle, setCurTitle] = useState("");
  const [currSubTitle, setSubCurTitle] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const heroTitleMessages = [
    {
      heroTitle: "Create. Conquer. Collaborate.",
      heroSubTitle:
        "The ultimate hub for student builders. Build your squad, win the hackathons, and own the campus tech scene."
    },
    {
      heroTitle: "Build for mobile. Scale with cloud.\nThrive together.",
      heroSubTitle:
        "Stop just building apps—start building infrastructure. Join the community pushing mobile and cloud to the limit."
    },
    {
      heroTitle: "Shape the future of\nWeb and AI.",
      heroSubTitle:
        "Moving beyond the basics. From React to LLMs, we’re tinkering with the tech that will define our careers."
    },
    {
      heroTitle: "Innovate with data.\nLead with AI.",
      heroSubTitle:
        "Deep dive into data science and neural networks. Turn your academic projects into real-world AI applications."
    },
    {
      heroTitle: "Innovate. Learn. Grow.",
      heroSubTitle:
        "The campus sandbox for big ideas. A place to experiment with new tech, share knowledge, and level up together."
    },
    {
      heroTitle: "Design. Develop. Deploy.",
      heroSubTitle:
        "Go beyond the syllabus. Master the full product lifecycle and ship live code before you even graduate."
    }
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroTitleMessages.length);
    setCurTitle(heroTitleMessages[randomIndex].heroTitle);
    setSubCurTitle(heroTitleMessages[randomIndex].heroSubTitle);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(true), 50);
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section>
      <Navbar />

      <div ref={containerRef}>
        <div className="grid-background" />
        <div className="cursor-spotlight" />

        <div className="shape shape-decoration shape-1" />
        <div className="shape shape-decoration shape-2" />
        <div className="shape shape-decoration shape-3" />
        <div className="shape shape-decoration shape-4" />

        <section className="hero">
          <img
            src="/gdg-outlined-logo.png"
            alt="GDG Logo"
            className={`hero-background-logo${fade ? " visible" : ""}`}
          />

          <div className={`hero-title fade-up${fade ? " visible" : ""}`}>
            {currTitle}
          </div>

          <p className={`hero-subtext fade-up${fade ? " visible" : ""}`}>
            {currSubTitle}
          </p>

          <div className={`hero-actions fade-up${fade ? " visible" : ""}`}>
            <a href="#" className="btn-primary">
              Study Jams
            </a>
            <a
              href="#"
              className="btn-secondary-demo-dashboard"
              style={{
                border: "1px solid var(--border)",
                padding: "0.8rem 2rem",
                borderRadius: "999px",
                color: "var(--text-primary)",
                textDecoration: "none"
              }}
            >
              View Events
            </a>
          </div>

          <div className={`hero-stats fade-up${fade ? " visible" : ""}`}>
            <div className="stat-item">
              <span className="stat-value">500+</span>
              <span className="stat-label">Members</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">20+</span>
              <span className="stat-label">Events / Year</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">15+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
