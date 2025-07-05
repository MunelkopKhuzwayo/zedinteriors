import { Mail, Image, PhoneCall, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 text-center bg-accent md:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          I'm currently available for work. If you want to turn you property into a beautiful functional space, let's talk.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
          >
            <a href="mailto:alex.doe@example.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
          >
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <UserCircle className="h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
          >
            <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Image className="h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
          >
            <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <PhoneCall className="h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
