import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "react-intersection-observer";
import { Sparkles, Moon, PartyPopper } from "lucide-react";

const ServicesSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Sparkles,
      title: "brideService",
      description: "brideServiceDesc",
      imageURL:
        "https://images.pexels.com/photos/31715496/pexels-photo-31715496/free-photo-of-elegant-bride-in-ornate-white-gown-with-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Moon,
      title: "eveningService",
      description: "eveningServiceDesc",
      imageURL:
        "https://images.pexels.com/photos/8995792/pexels-photo-8995792.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: PartyPopper,
      title: "occasionService",
      description: "occasionServiceDesc",
      imageURL:
        "https://images.pexels.com/photos/9218399/pexels-photo-9218399.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-serif mb-4 text-slate-800 transition-all duration-1000 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t("servicesHeading")}
          </h2>
          <p
            className={`text-xl text-slate-600 transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {t("servicesSubheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden p-8 text-center transition-all duration-1000 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <img
                  src={service.imageURL}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50"></div>{" "}
                {/* Overlay */}
                <div className="relative z-10">
                  <div className="inline-block p-4 bg-gold-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-white">
                    {t(service.title)}
                  </h3>
                  <p className="text-white leading-relaxed">
                    {t(service.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
