
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import { Bug, Building, Shield, Bird } from "lucide-react";

const servicesData = [
  {
    id: "residential",
    title: "Residential Pest Control",
    description: "Protect your home from unwanted pests with our comprehensive residential pest control services.",
    icon: <Bug className="h-8 w-8 text-primary" />,
  },
  {
    id: "commercial",
    title: "Commercial Pest Management",
    description: "Tailored pest control solutions for businesses of all sizes to maintain a pest-free environment.",
    icon: <Building className="h-8 w-8 text-primary" />,
  },
  {
    id: "termite-control",
    title: "Termite Control",
    description: "Specialized treatments to eliminate termites and prevent future infestations, protecting your property.",
    icon: <Shield className="h-8 w-8 text-primary" />,
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal",
    description: "Humane wildlife removal and exclusion services to keep unwanted animals away from your property.",
    icon: <Bird className="h-8 w-8 text-primary" />,
  },
];

const ServicesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Pest Removal Services"
          subtitle="We offer comprehensive pest control solutions tailored to your specific needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="h-full hover-lift border border-gray-200">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
