import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { pets } from "@/data/pets";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PetCard from "@/components/shop/PetCard";
import { toast } from "sonner";

const PetDetail = () => {
  const { id } = useParams();
  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Pet Not Found</h1>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPets = pets
    .filter((p) => p.species === pet.species && p.id !== pet.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    toast.success(`${pet.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${pet.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Pet Details */}
            <div>
              <div className="mb-4">
                <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
                <p className="text-xl text-muted-foreground">
                  {pet.breed} • {pet.age} • {pet.gender}
                </p>
              </div>

              {pet.vaccinated && (
                <Badge className="mb-4 bg-secondary">✓ Fully Vaccinated</Badge>
              )}

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">
                  ₹{pet.price.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-4 mb-8">
                <Button size="lg" variant="adopt" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" onClick={handleAddToWishlist}>
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="health">Health Info</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{pet.description}</p>
                </TabsContent>
                <TabsContent value="health" className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">{pet.healthInfo}</p>
                  <div className="mt-4 p-4 bg-secondary-light/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Vaccination Status</h3>
                    <p className="text-sm text-muted-foreground">
                      {pet.vaccinated
                        ? "✓ All vaccinations up to date"
                        : "Vaccination pending"}
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="pt-6">
                  <p className="text-muted-foreground">No reviews yet. Be the first to review {pet.name}!</p>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Related Pets */}
          {relatedPets.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Similar Pets You May Like</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPets.map((relatedPet) => (
                  <PetCard key={relatedPet.id} pet={relatedPet} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PetDetail;
