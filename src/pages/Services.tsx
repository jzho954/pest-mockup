
import { useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bug, Building, Shield, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: "residential",
    title: "Residential Pest Control",
    icon: <Bug className="h-12 w-12 text-primary" />,
    description: "Our comprehensive residential pest control services protect your home from unwanted pests. We offer tailored solutions for various pests including ants, roaches, spiders, rodents, and more.",
    features: [
      "Comprehensive home inspection",
      "Customized treatment plans",
      "Child and pet-friendly solutions",
      "Preventative maintenance",
      "Satisfaction guarantee"
    ],
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
  },
  {
    id: "commercial",
    title: "Commercial Pest Management",
    icon: <Building className="h-12 w-12 text-primary" />,
    description: "Keep your business pest-free with our specialized commercial pest control services. We understand the unique challenges businesses face and provide discreet, effective solutions.",
    features: [
      "Industry-specific protocols",
      "Minimal disruption to operations",
      "Regular maintenance programs",
      "HACCP and regulatory compliance",
      "Emergency response services"
    ],
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511"
  },
  {
    id: "termite-control",
    title: "Termite Control & Prevention",
    icon: <Shield className="h-12 w-12 text-primary" />,
    description: "Protect your property from these destructive pests with our specialized termite control services. We offer both curative treatments and preventative solutions.",
    features: [
      "Thorough termite inspection",
      "Advanced detection technology",
      "Multiple treatment options",
      "Barrier protection systems",
      "Annual inspections and warranties"
    ],
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace"
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal & Exclusion",
    icon: <Bird className="h-12 w-12 text-primary" />,
    description: "Our humane wildlife removal services safely remove unwanted animals from your property while implementing preventative measures to keep them from returning.",
    features: [
      "Humane trapping methods",
      "Exclusion services",
      "Property damage repair",
      "Preventative recommendations",
      "Follow-up inspections"
    ],
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  }
];

const ServicesPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive pest control solutions for residential and commercial properties."
        backgroundImage="https://images.unsplash.com/photo-1487252665478-49b61b47f302"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Pest Control Services"
            subtitle="We offer a wide range of pest control services tailored to your specific needs. Our expert technicians use the latest techniques and environmentally responsible products to eliminate pests and prevent future infestations."
          />
          
          <div className="space-y-16 mt-12">
            {servicesData.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </Card>
                </div>
                
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mr-2 mt-1 bg-primary rounded-full p-1">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button asChild>
                      <Link to={`/services/${service.id}`}>Learn More</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/quote">Request Service</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
