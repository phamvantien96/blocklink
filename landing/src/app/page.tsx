import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { BusinessModel } from "@/components/sections/business-model";
import { Creators } from "@/components/sections/creators";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problem } from "@/components/sections/problem";
import { Raise } from "@/components/sections/raise";
import { Roadmap } from "@/components/sections/roadmap";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Creators />
        <Trust />
        <Roadmap />
        <BusinessModel />
        <Raise />
      </main>
      <Footer />
    </>
  );
}
