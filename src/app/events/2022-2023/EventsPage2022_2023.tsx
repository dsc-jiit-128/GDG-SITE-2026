"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventCard from "@/src/components/EventsCard";
import EventsCategoryBar from "@/src/components/EventsCategoryBar";
import styles from "./EventsPage.module.css";

export default function EventsPageClient2022_2023() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("type") || "sessions";

  const [fade, setFade] = useState(false);

  const eventData: Record<string, any[]> = {
    sessions: [
      {
        title: "Orientation",
        description:
          "A session where we told the freshers about the structure of GDSC and about how to begin your journey.",
        imageSrc: "/orientation.webp",
      },
      {
        title: "Roadmap",
        description:
          "Introduction to Web development,\n Competitive programming,\n DSA and internship opportunities.",
        imageSrc: "/techworldabc.webp",
      },
      {
        title: "Git & Github",
        description:
          "Hands-on session of git and GitHub\n and introduction to HacktoberFest.",
        imageSrc: "/githubabc.webp",
      },
      {
        title: "Compose-Camp",
        description:
          "Hands-on session on Android development using Jetpack Compose",
        imageSrc: "/composeabc.webp",
      },
      {
        title: "Decrypt the Crypto",
        description:
          "GDG JIIT-128 hosted a session to keep the\n crypto world to enter the new threshold.",
        imageSrc: "/decrypt.webp",
      },
      {
        title: "Intro to Hackathon",
        description:
          "Come, explore and Code. BITBOX 3.0 the annual hackathon of GDG JIIT-128.",
        imageSrc: "/hackathon.webp",
      },
      {
        title: "Bootcamp",
        description:
          "Three day bootcamp covering HTML, CSS and JavaScript through app building.",
        imageSrc: "/bootcamp.webp",
      },
    ],
    hackathons: [],
    upcoming: [],
    meetups: [],
  };

  const filteredEvents = eventData[activeCategory] || [];

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
    <main className={styles.eventpage_container}>
      <EventsCategoryBar />
      <div className={styles.eventpage_grid}>
        {filteredEvents.length ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={`${activeCategory}-${index}`}
              title={event.title}
              description={event.description}
              imageSrc={event.imageSrc}
            />
          ))
        ) : (
          <p className={styles.noEvents}>
            No events found for this category.
          </p>
        )}
      </div>
    </main>
  );
}
