import Image from "next/image";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Echo Grain - Wooden Tables",
    description: "This mirror collection frames silver clarity within engraved wood—each pattern etched with a tactile story.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_34663c72.jpg",
    dataAiHint: "abstract design",
  },
  {
    title: "Whispered Reflections - Engraved Wooden Mirrors",
    description: "A data visualization dashboard for a tech startup.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_401d2621.jpg",
    dataAiHint: "dashboard analytics",
  },
  {
    title: "Lorelight - Fantasy Wooden Lamp Lighting",
    description: "A fusion of myth and material. This lighting series suspends delicately carved wooden forms that glow from within—like relics pulled from a forgotten realm.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.51_6ebe8804.jpg",
    dataAiHint: "mobile app",
  },
  {
    title: "Threshold - The Portal Mirror",
    description: "This statement piece bends perception with its infinity-edge silhouette and seamless contour.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.50_c55cfee6.jpg",
    dataAiHint: "online store",
  },
  {
    title: "Stilroot - The Live-Edge Coffee Table",
    description: "Carved from a single slab of reclaimed hardwood, this coffee table rests low and grounded, embracing its organic imperfections as signature.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.13.51_9a8311c4.jpg",
    dataAiHint: "mobile app",
  },
  {
    title: "Strata Beam - Luminous Timber",
    description: "This lighting piece functions as both sculpture and atmosphere—channeling light downward in clean lines and washing surfaces in a silver glow.",
    image: "https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.20.55_65c8c264.jpg",
    dataAiHint: "online store",
  },
];

export function Projects() {
  return (
    <section id="projects" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Recent Work
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        A Selection of my Projects.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full"
              data-ai-hint={project.dataAiHint}
            />
            <CardContent className="p-6 text-left flex-grow flex flex-col">
              <CardTitle className="text-2xl font-semibold">
                {project.title}
              </CardTitle>
              <CardDescription className="mt-2 text-muted-foreground flex-grow">
                {project.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
