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
        <div className="mt-8 flex flex-row justify-center gap-6">
          <div className="">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
            >
              <a href="mailto:sedadakun900@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
            <h3 className="">Email</h3>
          </div>
          <div>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
            >
              <a href="https://www.instagram.com/zed.adakun" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Image className="h-6 w-6" />
              </a>
            </Button>
            <h3 className="">Instagram</h3>
          </div>
          <div>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="h-14 w-14 rounded-full bg-background transition-transform hover:scale-110"
            >
              <a href="tel: +27630576959" aria-label="phone" target="_blank" rel="noopener noreferrer">
                <PhoneCall className="h-6 w-6" />
              </a>
            </Button>
            <h3 className="">WhatsApp</h3>
          </div>
        </div>
        
      </div>
    </section>
  );
}
