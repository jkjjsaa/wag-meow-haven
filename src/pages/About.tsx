import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">About Pet Haven</h1>
              <p className="text-xl text-muted-foreground">
                We connect families with loving, healthy cats and dogs through safe and joyful adoption.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl text-muted-foreground">
                  Making pet adoption safe, transparent, and accessible for everyone
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center shadow-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Love & Care</h3>
                    <p className="text-muted-foreground">
                      Every pet deserves a loving home and proper care
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">
                      Verified breeders and complete health checks
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-card">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Building a community of responsible pet parents
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pet Haven was founded with a simple mission: to make pet adoption a safe, transparent, 
                  and joyful experience for families across India. We understand that bringing a pet into 
                  your home is a big decision, and we're here to make that process as smooth as possible.
                </p>
                <p>
                  We work exclusively with verified breeders and adoption centers who share our commitment 
                  to animal welfare. Every pet on our platform undergoes thorough health checks and comes 
                  with complete vaccination records and health certificates.
                </p>
                <p>
                  Our team is passionate about connecting loving families with their perfect furry companions. 
                  Whether you're looking for a playful puppy or a cuddly kitten, we're here to help you find 
                  your ideal pet and guide you through every step of the adoption process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Happy Families</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                <p className="text-muted-foreground">Verified Partners</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Health Checked</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
