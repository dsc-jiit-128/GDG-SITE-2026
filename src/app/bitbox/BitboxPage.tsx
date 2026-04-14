"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TimeLineDetails } from "./Timeline";
import { RoadmapStep } from "@/src/components/ui/RoadmapStep";
import "./bitbox-timeline.css";
import { RoadmapOverlay } from "@/src/components/ui/RoadmapOverlay";
import { AuroraText } from "@/src/components/ui/aurora-text";
import BentoComponent from "@/src/components/BentoGrid";
import MiniGamesCard from "@/src/components/MiniGamesCard";
import { mockGames } from "./MiniGameCardDetails";
import SpeakerGrid from "@/src/components/SpeakerCard";
import Sponsors from "@/src/components/Sponsors";
import { BeveledBorderButton } from "@/src/components/BeveledButton";

export default function BitBoxPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["#000000", "#121212", "#0a0a0a", "#000000"],
  );

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  return (
    <div ref={containerRef} className="roadmap-page-root">
      <RoadmapOverlay activeRange={activeId >= 0 && activeId <= 9} />

      <header className="roadmap-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="roadmap-eyebrow"
        >
          Flagship Hackathon
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="roadmap-title"
        >
          BitBox{" "}
          <AuroraText>
            <span className="roadmap-title-muted">6.0</span>
          </AuroraText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="roadmap-tagline"
        >
          Simplicity is the ultimate sophistication.
        </motion.p>

        <div className="mt-14 mb-10 flex items-center justify-center w-full relative z-60 pointer-events-auto">
          <div className="relative group rounded-full p-[1px] overflow-hidden flex items-center justify-center shadow-[0_0_50px_-15px_rgba(168,85,247,0.4)] transition-all hover:shadow-[0_0_80px_-15px_rgba(236,72,153,0.6)] hover:scale-105 active:scale-95 duration-300 cursor-pointer">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#c084fc_10%,#e879f9_30%,transparent_50%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <BeveledBorderButton
              title="Register Now"
              className="text-sm sm:text-lg md:text-xl font-bold px-8 py-2.5 md:px-12 md:py-4 bg-neutral-950/90 backdrop-blur-3xl hover:bg-neutral-900 shadow-none border-0"
              onClick={() => window.open('https://bitbox6-0.devfolio.co/overview', '_blank')}
            />
          </div>
        </div>
      </header>

      <div className="roadmap-timeline-spine">
        <div className="roadmap-spine-line static" />
        <motion.div
          className="roadmap-spine-line active"
          style={{ scaleY, originY: 0 }}
        />

        {TimeLineDetails.filter((item) => item.id !== 1).map((item, index) => (
          <RoadmapStep
            key={item.id}
            item={item}
            index={index}
            onVisible={(id) => setActiveId(id)}
          />
        ))}
      </div>

      <div className="w-[80%] flex flex-col items-center justify-center mt-[200px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Exciting <AuroraText>Prizes</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full md:w-[80%] lg:w-[70%]">
          <BentoComponent />
        </div>
      </div>
      <div className="w-[80%] flex flex-col items-center justify-center mt-[100px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Mini <AuroraText> Games</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full md:w-[80%] lg:w-[70%]">
          <MiniGamesCard games={mockGames} />
        </div>
      </div>

      <div className="w-[95%] md:w-[90%] xl:w-[80%] max-w-[1400px] flex flex-col items-center justify-center mt-[200px] mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Our <AuroraText> Judges</AuroraText>
          </h2>
          <div className="h-1 w-20 bg-white/20 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="w-full px-4 md:px-0 ">
          <SpeakerGrid />
        </div>
      </div>
      <Sponsors />
    </div>
  );
}
