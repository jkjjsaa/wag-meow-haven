import { pets } from "@/data/pets";
import PetCard from "@/components/shop/PetCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedPets = () => {
  const featuredPets = pets.slice(0, 6);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Pets</h2>
          <p className="text-xl text-muted-foreground">Meet some of our adorable friends waiting for a home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPets.map((pet) => (
            <div key={pet.id} className="animate-fade-in">
              <PetCard pet={pet} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="hero" asChild>
            <Link to="/shop">View All Pets</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
