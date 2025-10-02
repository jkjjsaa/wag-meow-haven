import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      pet: "Golden Retriever - Max",
      rating: 5,
      text: "We adopted Max from Pet Haven 3 months ago and couldn't be happier! He's healthy, well-trained, and has brought so much joy to our family. The whole process was smooth and transparent.",
    },
    {
      name: "Rahul Verma",
      pet: "Persian Cat - Snow",
      rating: 5,
      text: "Snow is the perfect addition to our home! Pet Haven made sure she was fully vaccinated and healthy. The team was very helpful throughout the adoption process. Highly recommended!",
    },
    {
      name: "Anjali Patel",
      pet: "Beagle - Buddy",
      rating: 5,
      text: "Buddy has been an amazing companion! Thank you Pet Haven for connecting us with such a loving and healthy puppy. The verification process gave us complete peace of mind.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Happy Pet Parents</h2>
          <p className="text-xl text-muted-foreground">See what our customers say about their adoption experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Adopted: {testimonial.pet}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
