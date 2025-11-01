import { useState, useEffect, useRef } from "react";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import teamImage from "@assets/generated_images/Automotive_team_portrait_7615a1eb.png";

export default function About() {
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Clock, value: 15, suffix: "+", label: "Années d'expérience", testId: "stat-years" },
    { icon: Users, value: 5000, suffix: "+", label: "Clients satisfaits", testId: "stat-clients" },
    { icon: Award, value: 100, suffix: "%", label: "Qualité garantie", testId: "stat-quality" },
    { icon: ThumbsUp, value: 98, suffix: "%", label: "Taux de satisfaction", testId: "stat-satisfaction" },
  ];

  const AnimatedCounter = ({ end, suffix, isVisible }: { end: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div>
      <SEO
        title="À Propos"
        description="Découvrez Delage Mécanique Inc., votre garage de confiance à Québec depuis plus de 15 ans. Une équipe d'experts passionnés pour l'entretien et la réparation de votre véhicule."
        ogTitle="À Propos - Delage Mécanique Inc."
        ogDescription="Plus de 15 ans d'expérience, 5000+ clients satisfaits. Votre confiance nous tient à cœur."
      />
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            À Propos
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-8">
            Votre confiance nous tient à cœur
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Depuis plus de 15 ans, <strong className="text-foreground">Delage Mécanique Inc.</strong> est
              votre partenaire de confiance pour l'entretien et la réparation
              automobile à Québec. Notre équipe d'experts passionnés met son
              savoir-faire et son expérience au service de votre véhicule,
              garantissant des interventions de qualité supérieure à chaque
              visite.
            </p>
            <p>
              Nous comprenons que votre véhicule est bien plus qu'un simple
              moyen de transport — c'est un investissement important qui mérite
              les meilleurs soins. C'est pourquoi nous nous engageons à offrir
              un service personnalisé, transparent et professionnel, où chaque
              client est traité avec respect et considération.
            </p>
            <p>
              Notre atelier moderne et entièrement équipé nous permet de gérer
              tous vos besoins automobiles, de l'entretien préventif aux
              réparations complexes. Nous utilisons des pièces de qualité et des
              techniques éprouvées pour assurer la longévité et la performance
              optimale de votre véhicule. Chez Delage Mécanique Inc., votre
              satisfaction et votre sécurité sont notre priorité absolue.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-card" ref={statsRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-card-foreground mb-16">
            Notre Excellence en Chiffres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4"
                  style={{
                    animation: visibleStats
                      ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                  data-testid={stat.testId}
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary animate-pulse" style={{ animationDuration: '2s' }} />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      isVisible={visibleStats}
                    />
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={teamImage}
              alt="Équipe Delage Mécanique"
              className="w-full h-auto object-cover"
              data-testid="img-team"
            />
          </div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Notre Équipe Dévouée
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels qualifiés et passionnés, dédiés à offrir le
              meilleur service à chaque client.
            </p>
          </div>
        </div>
      </section>

      {/* Add CSS animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
