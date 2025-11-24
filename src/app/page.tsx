import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import QuickStats from "@/components/home/QuickStats";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects />
      <QuickStats />
    </div>
  );
}

