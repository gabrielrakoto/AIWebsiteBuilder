import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SEO } from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description:
          "Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erreur",
        description:
          "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "(418) 845-8551",
      href: "tel:4188458551",
      testId: "link-contact-phone",
    },
    {
      icon: Mail,
      label: "Courriel",
      value: "info@delagemecanique.com",
      href: "mailto:info@delagemecanique.com",
      testId: "link-contact-email",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "2660 Bd Bastien, Québec, QC G2B 1A5",
      href: "https://maps.google.com/?q=2660+Bd+Bastien+Quebec+QC+G2B+1A5",
      testId: "link-contact-address",
    },
  ];

  const hours = [
    { day: "Lundi - Vendredi", hours: "8h00 - 17h00" },
    { day: "Samedi", hours: "9h00 - 13h00" },
    { day: "Dimanche", hours: "Fermé" },
  ];

  return (
    <div>
      <SEO
        title="Contact"
        description="Contactez Delage Mécanique Inc. à Québec. Téléphone : (418) 845-8551. Adresse : 2660 Bd Bastien, Québec, QC G2B 1A5. Prenez rendez-vous pour vos besoins automobiles."
        ogTitle="Contact - Delage Mécanique Inc."
        ogDescription="Appelez-nous au (418) 845-8551 ou visitez-nous au 2660 Bd Bastien, Québec. Formulaire de contact disponible."
      />
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et prendre
            rendez-vous
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Nos coordonnées
                </h2>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.icon === MapPin ? "_blank" : undefined}
                        rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                        data-testid={info.testId}
                      >
                        <Card className="hover-elevate active-elevate-2 cursor-pointer transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse" style={{ animationDuration: '2s' }}>
                                <Icon className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-muted-foreground mb-1">
                                  {info.label}
                                </div>
                                <div className="text-lg font-semibold text-foreground">
                                  {info.value}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    );
                  })}

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/delagemecanique?locale=fr_CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-contact-facebook"
                  >
                    <Card className="hover-elevate active-elevate-2 cursor-pointer transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse" style={{ animationDuration: '2s' }}>
                            <Facebook className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-muted-foreground mb-1">
                              Facebook
                            </div>
                            <div className="text-lg font-semibold text-foreground">
                              Suivez-nous sur Facebook
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Heures d'ouverture
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {hours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-border last:border-0"
                        >
                          <span className="font-medium text-foreground">
                            {schedule.day}
                          </span>
                          <span className="text-muted-foreground">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Google Maps */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Notre emplacement
                </h3>
                <div className="rounded-lg overflow-hidden shadow-lg h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.8!2d-71.2661!3d46.8625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897c!2s2660+Bd+Bastien%2C+Qu%C3%A9bec%2C+QC+G2B+1A5!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Delage Mécanique Location"
                    data-testid="iframe-google-maps"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Envoyez-nous un message
              </h2>

              <Card>
                <CardContent className="p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Votre nom"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adresse courriel</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="votre@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(418) 555-1234"
                                {...field}
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Décrivez votre besoin ou posez votre question..."
                                className="min-h-32 resize-none"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={mutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {mutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>

                      {isSubmitted && !mutation.isPending && (
                        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                          <p className="text-sm text-foreground font-medium">
                            Merci ! Nous vous répondrons bientôt.
                          </p>
                        </div>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
