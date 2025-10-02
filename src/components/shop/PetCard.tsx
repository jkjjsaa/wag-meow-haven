import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Pet } from "@/data/pets";
import { Badge } from "@/components/ui/badge";

interface PetCardProps {
  pet: Pet;
}

const PetCard = ({ pet }: PetCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-smooth">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {pet.vaccinated && (
          <Badge className="absolute top-2 left-2 bg-secondary">
            ✓ Vaccinated
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-1">{pet.name}</h3>
          <p className="text-muted-foreground">
            {pet.breed} • {pet.age} • {pet.gender}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">
            ₹{pet.price.toLocaleString()}
          </span>
        </div>

        <div className="flex gap-2">
          <Button variant="adopt" className="flex-1" asChild>
            <Link to={`/pet/${pet.id}`}>View Details</Link>
          </Button>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCard;
