import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/shop?species=dog">
            <Card className="group cursor-pointer overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-light to-secondary-light p-8 flex flex-col items-center justify-center">
                <div className="text-8xl mb-4 group-hover:animate-float">🐶</div>
                <h3 className="text-3xl font-bold">Dogs</h3>
                <p className="text-muted-foreground mt-2">Loyal companions ready to join your family</p>
              </div>
            </Card>
          </Link>

          <Link to="/shop?species=cat">
            <Card className="group cursor-pointer overflow-hidden shadow-card hover:shadow-hover transition-smooth">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary-light to-accent-light p-8 flex flex-col items-center justify-center">
                <div className="text-8xl mb-4 group-hover:animate-float">🐱</div>
                <h3 className="text-3xl font-bold">Cats</h3>
                <p className="text-muted-foreground mt-2">Purr-fect friends for cozy cuddles</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
