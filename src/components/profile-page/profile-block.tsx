import Image from "next/image";

export function ProfileBlock() {
  return (
    <section
      id="home"
      className="container flex flex-col items-center py-20 text-center md:py-32"
    >
      <Image
        src="https://storage.googleapis.com/techfusion-alchemy-bucket/WhatsApp%20Image%202025-07-04%20at%2015.10.05_b99464d8.jpg"
        alt="Profile Photo"
        width={160}
        height={160}
        priority
        className="rounded-full object-cover border-4 border-background shadow-lg filter grayscale"
        data-ai-hint="monochrome portrait"
      />
      <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Zed Interiors
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
      A passionate interior designer and creative thinker with an eye for refined beauty, spatial harmony, and timeless minimalism. 
      I’m drawn to clean lines, balanced compositions, and the subtle details that transform a room into an experience.
       Whether styling interiors or crafting digital spaces, I strive to make every design intuitive, elegant, and effortlessly functional.
      </p>
    </section>
  );
}
