import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center gradient-hero">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Happy pets"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Purr-fect Friend or Loyal Companion Today!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your trusted online pet store to find healthy, loving cats and dogs. Safe, verified, and joyful adoption made easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="adopt" asChild>
              <Link to="/shop">Adopt Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
