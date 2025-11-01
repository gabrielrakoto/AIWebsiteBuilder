import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Info, Wrench, Camera, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import workshopImage1 from "@assets/generated_images/Modern_automotive_workshop_interior_6432b6f8.png";
import workshopImage2 from "@assets/generated_images/Mechanic_working_on_engine_29cc22ba.png";
import workshopImage3 from "@assets/generated_images/Car_on_lift_in_shop_dc69b54f.png";

const carouselImages = [workshopImage1, workshopImage2, workshopImage3];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const sections = [
    {
      title: "À Propos",
      description:
        "Découvrez notre équipe d'experts et notre engagement envers la qualité et la fiabilité.",
      icon: Info,
      path: "/a-propos",
      testId: "card-about",
    },
    {
      title: "Services",
      description:
        "Pose de pneus, mécanique générale, alignement et test d'alternateur en hiver.",
      icon: Wrench,
      path: "/services",
      testId: "card-services",
    },
    {
      title: "Réalisations",
      description:
        "Consultez notre galerie de véhicules réparés et entretenus avec soin.",
      icon: Camera,
      path: "/realisations",
      testId: "card-gallery",
    },
    {
      title: "Contact",
      description:
        "Prenez rendez-vous ou contactez-nous pour toute question sur nos services.",
      icon: Phone,
      path: "/contact",
      testId: "card-contact",
    },
  ];

  return (
    <div>
      <SEO
        title="Accueil"
        description="Delage Mécanique Inc. - Service automobile professionnel à Québec. Pose de pneus, mécanique générale, alignement et plus. Votre confiance nous tient à cœur."
        ogTitle="Delage Mécanique Inc. - Garage automobile à Québec"
        ogDescription="Service automobile de qualité supérieure à Québec. Plus de 15 ans d'expérience. Contactez-nous au (418) 845-8551."
      />
      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Delage Mécanique - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Carousel Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20"
          onClick={prevImage}
          data-testid="button-carousel-prev"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20"
          onClick={nextImage}
          data-testid="button-carousel-next"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setCurrentImageIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              data-testid={`button-carousel-indicator-${index}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center shadow-2xl">
              <span className="text-5xl font-bold text-primary-foreground">
                DM
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Delage Mécanique Inc.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Votre confiance nous tient à cœur. Service automobile professionnel
            à Québec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" asChild>
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-xl"
                data-testid="button-cta-appointment"
              >
                Prendre rendez-vous
              </Button>
            </Link>
            <Link href="/contact" asChild>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                data-testid="button-cta-contact"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Preview Cards */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nos Services et Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez comment nous pouvons vous aider avec votre véhicule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={section.path} href={section.path} asChild>
                  <Card
                    className="hover-elevate active-elevate-2 cursor-pointer h-full transition-all duration-300 hover:shadow-xl group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                    data-testid={section.testId}
                  >
                    <CardHeader className="space-y-0 pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {section.description}
                      </p>
                      <div className="mt-4 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        En savoir plus
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
