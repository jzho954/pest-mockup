
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import { toast } from "sonner";

const servicesData = [
  {
    id: "residential",
    title: "Residential Pest Control",
    description: "Protect your home from unwanted pests with our comprehensive residential pest control services.",
    fullDescription: "Our residential pest control services are designed to protect your home and family from harmful and annoying pests. We use safe, environmentally friendly products and methods to eliminate pests and prevent future infestations. Our technicians are professionally trained and certified to handle all types of pest problems, from common household pests to more specialized infestations.",
    features: [
      "Comprehensive home inspection",
      "Targeted treatment plans",
      "Preventative measures",
      "Follow-up visits",
      "Satisfaction guarantee"
    ],
    image: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b",
    pricing: {
      basic: {
        name: "Basic Protection",
        price: "$99",
        description: "One-time treatment for current pest issues",
        features: [
          "Thorough inspection",
          "Targeted treatment",
          "60-day guarantee"
        ]
      },
      standard: {
        name: "Standard Protection",
        price: "$249",
        description: "Quarterly treatments for year-round protection",
        features: [
          "Initial comprehensive inspection",
          "Quarterly preventative treatments",
          "Free re-treatments if pests return",
          "Interior and exterior protection"
        ]
      },
      premium: {
        name: "Premium Protection",
        price: "$349",
        description: "Bi-monthly treatments with expanded coverage",
        features: [
          "All Standard Protection features",
          "Bi-monthly (every 2 months) treatments",
          "Extended coverage for additional pests",
          "Rodent control included",
          "Annual termite inspection"
        ]
      }
    }
  },
  {
    id: "commercial",
    title: "Commercial Pest Management",
    description: "Tailored pest control solutions for businesses of all sizes to maintain a pest-free environment.",
    fullDescription: "Our commercial pest management services are designed to protect your business, employees, and customers from pests. We understand that pest problems can damage your reputation and disrupt your operations. That's why we offer discreet, effective pest control solutions tailored to your specific industry requirements, from restaurants and hotels to offices, retail spaces, and warehouses.",
    features: [
      "Customized pest management programs",
      "Compliance with health regulations",
      "Discreet service scheduling",
      "Employee training resources",
      "Detailed documentation and reporting"
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    pricing: {
      basic: {
        name: "Small Business",
        price: "$149/month",
        description: "For businesses up to 2,500 sq ft",
        features: [
          "Monthly service visits",
          "Interior and exterior treatments",
          "Common pest coverage",
          "Email documentation"
        ]
      },
      standard: {
        name: "Medium Business",
        price: "$299/month",
        description: "For businesses 2,500-10,000 sq ft",
        features: [
          "Bi-weekly service visits",
          "Comprehensive pest coverage",
          "HACCP/AIB compliance support",
          "Employee training session",
          "Detailed reporting"
        ]
      },
      premium: {
        name: "Large Business",
        price: "Custom Quote",
        description: "For businesses over 10,000 sq ft",
        features: [
          "Customized service schedule",
          "Complete pest management system",
          "Dedicated account manager",
          "24/7 emergency response",
          "Regulatory compliance support",
          "Staff training program"
        ]
      }
    }
  },
  {
    id: "termite-control",
    title: "Termite Control",
    description: "Specialized treatments to eliminate termites and prevent future infestations, protecting your property.",
    fullDescription: "Our termite control services provide comprehensive protection against these destructive pests. Termites cause billions of dollars in property damage each year, and most homeowner's insurance policies don't cover termite damage. Our trained technicians use the latest technologies and methods to detect, eliminate, and prevent termite infestations, safeguarding your largest investment.",
    features: [
      "Thorough termite inspection",
      "Advanced detection technology",
      "Targeted elimination treatments",
      "Preventative barrier installation",
      "Ongoing monitoring systems"
    ],
    image: "https://images.unsplash.com/photo-1626181615138-99041e9aeb57",
    pricing: {
      basic: {
        name: "Spot Treatment",
        price: "$499",
        description: "Targeted treatment for localized infestations",
        features: [
          "Inspection and identification",
          "Focused treatment of affected areas",
          "1-year warranty"
        ]
      },
      standard: {
        name: "Whole Home Protection",
        price: "$1,299",
        description: "Complete termite elimination and prevention",
        features: [
          "Comprehensive home inspection",
          "Full perimeter treatment",
          "Termite baiting system installation",
          "5-year renewable warranty"
        ]
      },
      premium: {
        name: "Ultimate Shield",
        price: "$1,899",
        description: "Our most comprehensive termite defense system",
        features: [
          "All Whole Home Protection features",
          "Annual inspections included",
          "Damage repair guarantee up to $1 million",
          "Transferable warranty",
          "Green/eco-friendly options available"
        ]
      }
    }
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal",
    description: "Humane wildlife removal and exclusion services to keep unwanted animals away from your property.",
    fullDescription: "Our wildlife removal services offer humane, effective solutions for dealing with unwanted animals on your property. We specialize in the removal and exclusion of raccoons, squirrels, bats, birds, opossums, skunks, and other wildlife that can cause damage to your home or business. Our trained wildlife specialists use humane trapping and removal techniques, followed by exclusion methods to prevent future problems.",
    features: [
      "Humane trapping and removal",
      "Animal entry point identification",
      "Exclusion services to prevent re-entry",
      "Property damage repair consultation",
      "Preventative recommendations"
    ],
    image: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a",
    pricing: {
      basic: {
        name: "Inspection & Assessment",
        price: "$149",
        description: "Professional evaluation of wildlife issues",
        features: [
          "Thorough property inspection",
          "Wildlife identification",
          "Written assessment report",
          "Removal plan recommendation"
        ]
      },
      standard: {
        name: "Trapping & Removal",
        price: "$349+",
        description: "Safe removal of nuisance wildlife",
        features: [
          "Initial inspection",
          "Humane trap setting",
          "Multiple visits for animal removal",
          "Basic entry point sealing",
          "30-day warranty"
        ]
      },
      premium: {
        name: "Complete Wildlife Management",
        price: "$899+",
        description: "Comprehensive solution for wildlife problems",
        features: [
          "All Trapping & Removal services",
          "Complete exclusion work",
          "Attic restoration and sanitizing",
          "Damage repair consultation",
          "1-year warranty",
          "Follow-up inspection"
        ]
      }
    }
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesData.find((s) => s.id === serviceId);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestService = () => {
    toast.success("Service request received!", {
      description: "We'll contact you shortly to discuss your needs.",
    });
  };

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Service Not Found</h2>
        <p className="mb-8">The service you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Button asChild variant="outline" className="mb-8 group">
            <Link to="/services" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">Service Overview</h2>
              <p className="text-gray-700 mb-8">{service.fullDescription}</p>

              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-12">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-6">Our Process</h3>
              <div className="space-y-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">1. Inspection & Assessment</h4>
                  <p className="text-gray-700">Our technicians will thoroughly inspect your property to identify pest issues, entry points, and contributing factors.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">2. Customized Treatment Plan</h4>
                  <p className="text-gray-700">Based on our findings, we'll develop a tailored treatment plan specific to your property and pest issues.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">3. Implementation</h4>
                  <p className="text-gray-700">Our trained professionals will implement the treatment plan using the most effective and environmentally responsible methods.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">4. Follow-up & Prevention</h4>
                  <p className="text-gray-700">We'll conduct follow-up visits as needed and provide recommendations to prevent future pest problems.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-6">
                    <h4 className="text-xl font-medium">{service.pricing.basic.name}</h4>
                    <div className="text-3xl font-bold text-primary mt-2">{service.pricing.basic.price}</div>
                    <p className="text-gray-600 mt-1">{service.pricing.basic.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.pricing.basic.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" onClick={handleRequestService}>Request Service</Button>
                  </div>
                </div>

                <div className="border border-primary rounded-lg overflow-hidden shadow-md relative">
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="bg-gray-50 p-6">
                    <h4 className="text-xl font-medium">{service.pricing.standard.name}</h4>
                    <div className="text-3xl font-bold text-primary mt-2">{service.pricing.standard.price}</div>
                    <p className="text-gray-600 mt-1">{service.pricing.standard.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.pricing.standard.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" onClick={handleRequestService}>Request Service</Button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-6">
                    <h4 className="text-xl font-medium">{service.pricing.premium.name}</h4>
                    <div className="text-3xl font-bold text-primary mt-2">{service.pricing.premium.price}</div>
                    <p className="text-gray-600 mt-1">{service.pricing.premium.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.pricing.premium.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" onClick={handleRequestService}>Request Service</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceDetail;
