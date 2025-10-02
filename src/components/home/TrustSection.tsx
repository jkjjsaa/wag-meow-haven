import { Shield, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Breeders",
      description: "All our partners are verified and trusted breeders with proper certifications",
    },
    {
      icon: Heart,
      title: "Health Checked",
      description: "Every pet undergoes thorough health checks and comes with complete vaccination records",
    },
    {
      icon: CheckCircle,
      title: "Safe Adoption",
      description: "Secure payment process and safe delivery to ensure the best experience for you and your pet",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Trust Pet Haven?</h2>
          <p className="text-xl text-muted-foreground">We prioritize the health, safety, and happiness of every pet</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
