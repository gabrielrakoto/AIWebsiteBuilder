import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { CircleDot, Wrench, AlignHorizontalJustifyCenter, Zap } from "lucide-react";
import tireImage from "@assets/generated_images/Tire_installation_close-up_1591fef3.png";
import alignmentImage from "@assets/generated_images/Wheel_alignment_service_cb1ef237.png";
import alternatorImage from "@assets/generated_images/Alternator_testing_service_615c12ce.png";
import mechanicImage from "@assets/generated_images/Mechanic_working_on_engine_29cc22ba.png";

export default function Services() {
  const services = [
    {
      title: "Pose de pneus",
      icon: CircleDot,
      image: tireImage,
      description:
        "Installation professionnelle de pneus neufs ou saisonniers avec équilibrage de précision. Nous assurons un montage sécuritaire et conforme aux normes pour optimiser la tenue de route et prolonger la durée de vie de vos pneus.",
      features: [
        "Montage et démontage",
        "Équilibrage de roues",
        "Vérification de la pression",
        "Entreposage saisonnier disponible",
      ],
      testId: "card-service-tires",
    },
    {
      title: "Mécanique générale",
      icon: Wrench,
      image: mechanicImage,
      description:
        "Service complet d'entretien et de réparation pour tous types de véhicules. Nos mécaniciens certifiés diagnostiquent et résolvent efficacement tous problèmes mécaniques, des plus simples aux plus complexes.",
      features: [
        "Changement d'huile et filtres",
        "Inspection complète",
        "Réparation de freins",
        "Système de refroidissement",
      ],
      testId: "card-service-general",
    },
    {
      title: "Alignement",
      icon: AlignHorizontalJustifyCenter,
      image: alignmentImage,
      description:
        "Alignement de précision des roues avec équipement informatisé de pointe. Un bon alignement améliore la maniabilité, réduit l'usure des pneus et assure une conduite sécuritaire et confortable.",
      features: [
        "Diagnostic informatisé",
        "Ajustement précis",
        "Vérification de la suspension",
        "Rapport détaillé",
      ],
      testId: "card-service-alignment",
    },
    {
      title: "Test de l'alternateur en hiver",
      icon: Zap,
      image: alternatorImage,
      description:
        "Service saisonnier essentiel pour prévenir les pannes hivernales. Vérification complète de votre système électrique et de charge pour garantir un démarrage fiable même par grand froid.",
      features: [
        "Test de l'alternateur",
        "Vérification de la batterie",
        "Inspection du système de charge",
        "Diagnostic électrique",
      ],
      testId: "card-service-alternator",
    },
  ];

  return (
    <div>
      <SEO
        title="Nos Services"
        description="Services automobiles complets à Québec : pose de pneus, mécanique générale, alignement des roues, test d'alternateur hivernal. Équipe qualifiée et équipement moderne."
        ogTitle="Services - Delage Mécanique Inc."
        ogDescription="Pose de pneus, mécanique générale, alignement et test d'alternateur. Des solutions complètes pour votre véhicule."
      />
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour l'entretien et la réparation de votre
            véhicule
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl group"
                  data-testid={service.testId}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl sr-only">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-card-foreground mb-6">
            Besoin d'un service ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous dès aujourd'hui pour prendre rendez-vous ou pour
            toute question sur nos services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" asChild>
              <Button size="lg" className="text-lg px-8" data-testid="button-cta-contact">
                Nous contacter
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              asChild
              data-testid="button-cta-call"
            >
              <a href="tel:4188458551">
                (418) 845-8551
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
