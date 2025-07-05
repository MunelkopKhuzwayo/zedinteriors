import { PenTool, LayoutGrid, Palette, Move, Lightbulb } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const skills = [
  {
    icon: <LayoutGrid className="h-8 w-8" />,
    name: "Spatial Planning",
    description: "Intuitively arranging furnishings, textures, and negative space to create balance and movement",
  },
  {
    icon: <Palette className="h-8 w-8" />,
    name: "Color Theory",
    description: "Expert use of tone, shade, and contrast—particularly in black, white, and silver palettes",
  },
  {
    icon: <Move className="h-8 w-8" />,
    name: "Material and Texture Curation",
    description: "Deep knowledge of natural materials (like marble, steel, linen) and how they interplay visually and tactically",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    name: "Lighting Design",
    description: "Knowing how to manipulate natural and artificial light to shape a space’s mood and dimensionality",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    name: "Wooden Sculpturing",
    description: "Creating Intricate Wooden Designs to Light Up Your Home in every way imaginable.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        My Skillset
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        The tools and technologies I use to build things.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="group flex flex-col items-center justify-start p-6 text-center border-transparent transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-2"
          >
            <div className="mb-4 text-primary transition-colors duration-300 group-hover:text-primary">
              {skill.icon}
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-semibold">
                {skill.name}
              </CardTitle>
              <CardDescription className="mt-2">
                {skill.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
