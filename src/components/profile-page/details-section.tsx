import { Projects } from "./projects";
import { Skills } from "./skills";

export function DetailsSection() {
  return (
    <div className="container space-y-24 py-10 md:space-y-32 md:py-16">
      <Skills />
      <Projects />
    </div>
  );
}
