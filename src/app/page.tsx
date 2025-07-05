import { Header } from "@/components/profile-page/header";
import { ProfileBlock } from "@/components/profile-page/profile-block";
import { DetailsSection } from "@/components/profile-page/details-section";
import { Quote } from "@/components/profile-page/quote";
import { ContactSection } from "@/components/profile-page/contact-section";
import { Footer } from "@/components/profile-page/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ProfileBlock />
        <DetailsSection />
        <Quote />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
