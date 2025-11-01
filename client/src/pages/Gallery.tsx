import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import vehicle1 from "@assets/generated_images/Serviced_vehicle_showcase_7808ce4b.png";
import brake from "@assets/generated_images/Brake_system_repair_94400954.png";
import oil from "@assets/generated_images/Oil_change_service_c988fe36.png";
import engine from "@assets/generated_images/Engine_service_result_421eb16a.png";
import suspension from "@assets/generated_images/Suspension_repair_work_9e97273f.png";
import tire from "@assets/generated_images/Tire_installation_close-up_1591fef3.png";
import alignment from "@assets/generated_images/Wheel_alignment_service_cb1ef237.png";
import alternator from "@assets/generated_images/Alternator_testing_service_615c12ce.png";
import workshop from "@assets/generated_images/Modern_automotive_workshop_interior_6432b6f8.png";
import mechanic from "@assets/generated_images/Mechanic_working_on_engine_29cc22ba.png";
import carLift from "@assets/generated_images/Car_on_lift_in_shop_dc69b54f.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: vehicle1, alt: "Véhicule fraîchement entretenu" },
    { src: brake, alt: "Réparation de système de freinage" },
    { src: oil, alt: "Service de changement d'huile" },
    { src: engine, alt: "Compartiment moteur après service" },
    { src: suspension, alt: "Réparation de suspension" },
    { src: tire, alt: "Installation professionnelle de pneus" },
    { src: alignment, alt: "Service d'alignement des roues" },
    { src: alternator, alt: "Test d'alternateur hivernal" },
    { src: workshop, alt: "Notre atelier moderne" },
    { src: mechanic, alt: "Mécanicien au travail" },
    { src: carLift, alt: "Véhicule sur pont élévateur" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + images.length) % images.length
      );
    }
  };

  return (
    <div>
      <SEO
        title="Nos Réalisations"
        description="Galerie photo des réalisations de Delage Mécanique Inc. Découvrez notre expertise à travers nos interventions sur véhicules et notre atelier moderne à Québec."
        ogTitle="Réalisations - Delage Mécanique Inc."
        ogDescription="Galerie de nos travaux : réparations, entretien et notre atelier professionnel."
      />
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre expertise à travers une sélection de nos
            interventions et de notre atelier
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-card"
                onClick={() => openLightbox(index)}
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.05}s both`,
                }}
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <span className="text-white font-medium">
                        Voir l'image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
            onClick={closeLightbox}
            data-testid="button-lightbox-close"
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              data-testid="img-lightbox-current"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white text-sm">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
