"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  dataAiHint: string;
  type: string; // Added project type
}
const projects = [
  {
    title: "Echo Grain - Wooden Tables",
    description: "This mirror collection frames silver clarity within engraved wood—each pattern etched with a tactile story.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_34663c72.jpg",
    dataAiHint: "tables",
    type: "Tables" 
  },

  {
    title: "Whispered Reflections - Engraved Wooden Mirrors",
    description: "A data visualization dashboard for a tech startup.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_401d2621.jpg",
    dataAiHint: "mirrors",
    type: "Mirrors"
  },
  {

    title: "Lorelight - Fantasy Wooden Lamp Lighting",
    description: "A fusion of myth and material. This lighting series suspends delicately carved wooden forms that glow from within—like relics pulled from a forgotten realm.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.51_6ebe8804.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Threshold - The Portal Mirror",
    description: "This statement piece bends perception with its infinity-edge silhouette and seamless contour.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_c55cfee6.jpg",
    dataAiHint: "mirrors",
    type: "Mirrors"
  },
  {
    title: "Stilroot - The Live-Edge Coffee Table",
    description: "Carved from a single slab of reclaimed hardwood, this coffee table rests low and grounded, embracing its organic imperfections as signature.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.51_9a8311c4.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Strata Beam - Luminous Timber",
    description: "This lighting piece functions as both sculpture and atmosphere—channeling light downward in clean lines and washing surfaces in a silver glow.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.20.55_65c8c264.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Floodlight - Luminous Timber",
    description: "This lighting piece unctions as both a lamp and a sculpture as if it was pieced by Leonardo himself.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-04%20at%2015.20.55_65c8c264.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Amazon - Forest Wall",
    description: "This statement piece gives colour to your room",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.18.10_5cbf4a89.jpg",
    dataAiHint: "ornaments",
    type: "Ornaments"
  },
  {
    title: "Safe Haven - Raft Mirror",
    description: "They say if you look deep into this one you might see shades of your ancestors.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.01_3d98cbac.jpg",
    dataAiHint: "mirrors",
    type: "Mirrors"
  },
  {
    title: "Wall's Limb - Luminous Timber",
    description: "This lighting piece looks like a tree was growing in your walls and suddenly it came out to light up your life.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.01_54611b1b.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "The Gift of Sight - Simple Mirror",
    description: "This piece allows you to look good no matter where you are",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.01_accccbee.jpg",
    dataAiHint: "mirror",
    type: "Mirrors"
  },
  {
    title: "The Engulfed Lamp - Luminous Timber",
    description: "This lighting piece functions as both a statement and a functional lamp you can read next to to feel like you're spending your days in the forests of Africa.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.02_ad12921a.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "The Guardian - Bedside Table",
    description: "This table sits at your side, watching over you day and night as your home's personal guard.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.02_b7d45a72.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Floating Platelettes - Coffee Tables",
    description: "These coffee tables will have you constantly having an appetite for coffee.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.02_c693e3ed.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Snail's Tail - Porch Table",
    description: "This table was designed to have your mind slow down as you rest at the end of the day.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.02_cb44fd7f.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Chained Lights - Luminous Timber",
    description: "This lighting piece functions as both a bedside ligt and a statement piece with historic elements.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.03_1c1c92fa.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "The Spider - Coffee Table",
    description: "This statement piece will have every guest marvelling at how beautiful and lifelike it is.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.03_93951b87.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Shielded Seats - Porchside Bench",
    description: "This bench, with its mix of simplicity and cultural relevance is both functional and a statement piece.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.03_aa33d854.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Ringed Walls - Timbered Ornaments",
    description: "This wooden art, simple yet rare to see, functions as an incredible decoration.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.03_eef9f3a1.jpg",
    dataAiHint: "ornaments",
    type: "Ornaments"
  },
  {
    title: "Chained Sabers - Luminous Timber",
    description: "These look like they came from a Scene in Star Wars, or like they were meant to be in your home.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.04_0b9a1954.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Giant Jenga - Coffee Table",
    description: "They say two giants were playing Jenga and were caught in the act, disappearing into mist and leaving this in their midst.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.04_cabf8a2b.jpg",
    dataAiHint: "tables",
    type: "Tables"
  },
  {
    title: "Labour's Fruit - Luminous Timber",
    description: "This lighting piece looks so good your guests might eat it.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.04_e09fd8f0.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
  {
    title: "Rolling Wood - Coffee Table",
    description: "This table goes anywhere you go, ironically, it can never be rooted to one place!",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/zed/WhatsApp%20Image%202025-07-06%20at%2009.20.04_f19d3a2e.jpg",
    dataAiHint: "lights",
    type: "Lights"
  },
];

export function Projects() {
  const rowRefs = useRef<HTMLDivElement[]>([]);
  const doubledProjects = [...projects, ...projects];
  // Group projects by type
  const groupedProjects = doubledProjects.reduce((acc, project) => {
    (acc[project.type] = acc[project.type] || []).push(project);
    return acc;
  }, {} as Record<string, Project[]>);
  let rowRef: typeof useRef<HTMLDivElement>;

  useEffect(() => {
    const intervals: NodeJS.Timer[] = [];
  
    rowRefs.current.forEach((el, i) => {
      if (!el) return;
  
      const interval = setInterval(() => {
        if (el.scrollWidth <= el.clientWidth) return;
  
        const speed = 1;
        el.scrollLeft = (el.scrollLeft + speed) % (el.scrollWidth - el.clientWidth + 1);
      }, 20);
  
      intervals.push(interval);
    });
  
    return () => intervals.forEach(clearInterval);
  }, []);
  
  
  return (
    <section id="projects" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Recent Work
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        A Selection of my Projects.
      </p>
      <div className="mt-12 flex flex-col gap-8">
        {Object.entries(groupedProjects).map(([type, projects], index) => (
          <div key={type}>
            <h3 className="text-2xl font-bold mb-4 text-left">{type}</h3>
            <div ref={el => (rowRefs.current[index] = el!)} className={`scrollbar-hide flex overflow-x-auto ${index % 2 === 0 ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="min-w-[300px] mr-4 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col relative"
                >
                  {/* Blur effect */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint={project.dataAiHint}
                  />
                  <CardContent className="p-4 text-left flex-grow flex flex-col">
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <CardDescription className="mt-1 text-sm text-muted-foreground flex-grow">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
