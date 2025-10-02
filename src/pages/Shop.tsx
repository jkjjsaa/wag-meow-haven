import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PetCard from "@/components/shop/PetCard";
import { pets } from "@/data/pets";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialSpecies = searchParams.get("species") as "dog" | "cat" | "all" || "all";
  
  const [selectedSpecies, setSelectedSpecies] = useState<"all" | "dog" | "cat">(initialSpecies);
  const [selectedGender, setSelectedGender] = useState<"all" | "Male" | "Female">("all");
  const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">("newest");

  const filteredAndSortedPets = useMemo(() => {
    let filtered = pets.filter((pet) => {
      if (selectedSpecies !== "all" && pet.species !== selectedSpecies) return false;
      if (selectedGender !== "all" && pet.gender !== selectedGender) return false;
      return true;
    });

    filtered.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0; // newest - maintain original order
    });

    return filtered;
  }, [selectedSpecies, selectedGender, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Find Your Perfect Companion</h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="p-6 shadow-card sticky top-24">
                <h2 className="text-xl font-bold mb-6">Filters</h2>

                {/* Species Filter */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-3 block">Species</Label>
                  <RadioGroup value={selectedSpecies} onValueChange={(value) => setSelectedSpecies(value as any)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all">All Pets</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dog" id="dog" />
                      <Label htmlFor="dog">Dogs 🐶</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cat" id="cat" />
                      <Label htmlFor="cat">Cats 🐱</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Gender Filter */}
                <div className="mb-6">
                  <Label className="text-base font-semibold mb-3 block">Gender</Label>
                  <RadioGroup value={selectedGender} onValueChange={(value) => setSelectedGender(value as any)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all-gender" />
                      <Label htmlFor="all-gender">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Sort */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">Sort By</Label>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>
            </aside>

            {/* Pet Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredAndSortedPets.length} {filteredAndSortedPets.length === 1 ? 'pet' : 'pets'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedPets.map((pet) => (
                  <div key={pet.id} className="animate-fade-in">
                    <PetCard pet={pet} />
                  </div>
                ))}
              </div>

              {filteredAndSortedPets.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-2xl text-muted-foreground">No pets found matching your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
