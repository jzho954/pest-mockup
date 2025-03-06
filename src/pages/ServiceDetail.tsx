
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { toast } from "@/components/ui/sonner";
import ImageWithFallback from "@/components/shared/ImageWithFallback";

interface ServiceStep {
  title: string;
  description: string;
}

interface ServicePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface ServiceData {
  id: string;
  title: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  image: string;
  steps: ServiceStep[];
  plans: ServicePlan[];
}

const servicesData: ServiceData[] = [
  {
    id: "residential",
    title: "Residential",
    fullTitle: "Residential Pest Control",
    description: "Comprehensive pest control solutions for your home.",
    longDescription: "Our residential pest control services provide complete protection for your home against common household pests. We use safe, effective methods to eliminate current infestations and prevent future problems.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    steps: [
      {
        title: "Thorough Inspection",
        description: "Our certified technicians conduct a comprehensive inspection of your property to identify pest issues and potential entry points."
      },
      {
        title: "Customized Treatment Plan",
        description: "Based on the inspection findings, we develop a tailored treatment plan specific to your home's needs and the types of pests present."
      },
      {
        title: "Initial Treatment",
        description: "We implement the initial treatment using eco-friendly products that are effective against pests while being safe for your family and pets."
      },
      {
        title: "Follow-Up & Prevention",
        description: "Regular follow-up visits ensure lasting results, and we implement preventative measures to protect against future infestations."
      }
    ],
    plans: [
      {
        name: "One-Time Service",
        price: "$149",
        description: "A single comprehensive treatment for current pest issues.",
        features: [
          "Thorough inspection",
          "Targeted treatment",
          "30-day guarantee",
          "Prevention recommendations"
        ]
      },
      {
        name: "Quarterly Protection",
        price: "$89/quarter",
        description: "Seasonal treatments to maintain a pest-free home year-round.",
        features: [
          "Initial comprehensive treatment",
          "Quarterly preventative services",
          "Free re-treatments if pests return",
          "Indoor and outdoor protection",
          "Annual termite inspection"
        ],
        isPopular: true
      },
      {
        name: "Monthly Guardian",
        price: "$49/month",
        description: "Maximum protection with monthly service visits.",
        features: [
          "Initial comprehensive treatment",
          "Monthly preventative services",
          "Priority scheduling",
          "Unlimited re-treatments",
          "Rodent monitoring",
          "Annual termite inspection"
        ]
      }
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    fullTitle: "Commercial Pest Management",
    description: "Professional pest management solutions for businesses.",
    longDescription: "Our commercial pest management services help businesses maintain a pest-free environment that protects your reputation, complies with regulations, and provides a healthy space for employees and customers.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    steps: [
      {
        title: "Site Evaluation",
        description: "We perform a thorough assessment of your facility to identify current and potential pest issues specific to your industry."
      },
      {
        title: "Custom Program Development",
        description: "Our team develops a comprehensive pest management program tailored to your business needs, operational requirements, and industry regulations."
      },
      {
        title: "Integrated Implementation",
        description: "We implement treatments and preventative measures with minimal disruption to your business operations."
      },
      {
        title: "Ongoing Monitoring & Documentation",
        description: "Regular service visits maintain protection, with detailed documentation for audit and compliance purposes."
      }
    ],
    plans: [
      {
        name: "Basic Commercial",
        price: "$249/month",
        description: "Essential protection for small businesses.",
        features: [
          "Monthly service visits",
          "Basic documentation",
          "Treatment of common pests",
          "Email support"
        ]
      },
      {
        name: "Standard Commercial",
        price: "$499/month",
        description: "Comprehensive protection for medium-sized facilities.",
        features: [
          "Bi-weekly service visits",
          "Comprehensive documentation",
          "HACCP compliance support",
          "24/7 emergency response",
          "Dedicated account manager"
        ],
        isPopular: true
      },
      {
        name: "Premium Commercial",
        price: "Custom pricing",
        description: "Advanced protection for large facilities with complex needs.",
        features: [
          "Customized service schedule",
          "Advanced monitoring systems",
          "Digital reporting platform",
          "Regulatory compliance support",
          "Staff training",
          "Annual facility assessment"
        ]
      }
    ]
  },
  {
    id: "termite-control",
    title: "Termite Control",
    fullTitle: "Termite Control & Prevention",
    description: "Specialized solutions to eliminate and prevent termite infestations.",
    longDescription: "Our termite control services protect your property from these destructive pests using the latest detection technology and treatment methods, backed by solid warranties.",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    steps: [
      {
        title: "Termite Inspection",
        description: "Our specialists conduct a thorough inspection using advanced technology to detect termite activity, even in hidden areas."
      },
      {
        title: "Treatment Strategy",
        description: "Based on the inspection findings, we develop a customized treatment plan targeting the specific termite species and extent of infestation."
      },
      {
        title: "Treatment Application",
        description: "We implement the most effective treatment method, which may include liquid treatments, bait systems, or a combination approach."
      },
      {
        title: "Ongoing Protection",
        description: "We establish a protective barrier and monitoring system to prevent future termite infestations, backed by our guarantee."
      }
    ],
    plans: [
      {
        name: "Termite Inspection",
        price: "$149",
        description: "Comprehensive inspection and report of termite activity.",
        features: [
          "Visual inspection",
          "Moisture readings",
          "Detailed report",
          "Treatment recommendations"
        ]
      },
      {
        name: "Termite Treatment",
        price: "From $999",
        description: "Complete termite elimination and initial protection.",
        features: [
          "Full property treatment",
          "Elimination of active colonies",
          "1-year warranty",
          "Follow-up inspection"
        ],
        isPopular: true
      },
      {
        name: "Termite Shield",
        price: "$299/year",
        description: "Ongoing protection and warranty coverage.",
        features: [
          "Annual inspections",
          "Preventative maintenance",
          "Renewable warranty",
          "Priority response for new activity",
          "Transferable coverage"
        ]
      }
    ]
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal",
    fullTitle: "Wildlife Removal & Exclusion",
    description: "Humane wildlife removal and prevention services.",
    longDescription: "Our wildlife removal services safely and humanely remove unwanted animals from your property while implementing effective exclusion methods to prevent their return.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    steps: [
      {
        title: "Wildlife Assessment",
        description: "We identify the species involved, locate entry points, and assess any damage to determine the most effective removal approach."
      },
      {
        title: "Humane Removal",
        description: "Using humane trapping and removal techniques, we safely remove the animals from your property in compliance with wildlife regulations."
      },
      {
        title: "Exclusion & Repair",
        description: "We seal entry points and implement preventative measures to ensure wildlife cannot re-enter your property."
      },
      {
        title: "Sanitization & Restoration",
        description: "We clean and sanitize affected areas to eliminate odors and health hazards, and can assist with damage repair."
      }
    ],
    plans: [
      {
        name: "Basic Wildlife Removal",
        price: "$399",
        description: "Essential removal service for common wildlife issues.",
        features: [
          "Species identification",
          "Humane trapping and removal",
          "Basic entry point sealing",
          "Removal of up to 3 animals"
        ]
      },
      {
        name: "Complete Wildlife Solution",
        price: "$799",
        description: "Comprehensive removal and exclusion service.",
        features: [
          "Full property inspection",
          "Unlimited trapping and removal",
          "Complete exclusion work",
          "Basic damage repair",
          "Attic sanitization"
        ],
        isPopular: true
      },
      {
        name: "Wildlife Prevention",
        price: "$249/year",
        description: "Ongoing inspections and maintenance to prevent wildlife issues.",
        features: [
          "Bi-annual inspections",
          "Preventative maintenance",
          "Discounted emergency services",
          "Wildlife deterrent application",
          "Roof and foundation assessment"
        ]
      }
    ]
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundService = servicesData.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
    } else {
      toast.error("Service not found");
      navigate("/services", { replace: true });
    }
  }, [serviceId, navigate]);

  if (!service) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <PageHeader 
        title={service.fullTitle} 
        subtitle={service.description}
        backgroundImage={service.image}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/services" className="flex items-center text-gray-600 hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <SectionHeading
                title="Service Overview"
                alignment="left"
                className="mb-6"
              />
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700">{service.longDescription}</p>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Our Process</h3>
                
                <div className="space-y-8">
                  {service.steps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="mr-6">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                          {index + 1}
                        </div>
                        {index < service.steps.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mx-auto mt-2"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-medium mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg overflow-hidden shadow-lg w-full h-80 md:h-96"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <SectionHeading
                title="Service Plans"
                alignment="left"
                className="mb-6"
              />
              
              <div className="space-y-6">
                {service.plans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`rounded-lg border p-6 ${plan.isPopular ? 'bg-primary bg-opacity-5 border-primary' : 'bg-white border-gray-200'} relative`}>
                      {plan.isPopular && (
                        <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          Most Popular
                        </div>
                      )}
                      
                      <h4 className="text-xl font-semibold mb-1">{plan.name}</h4>
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        {plan.price.includes('/') && (
                          <span className="text-gray-500 ml-1">
                            {plan.price.includes('month') ? 'per month' : plan.price.includes('quarter') ? 'per quarter' : 'per year'}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-5">{plan.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, i) => (
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
                      
                      <Button asChild className="w-full">
                        <Link to="/quote">Request This Plan</Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-medium mb-4">Need More Information?</h4>
                <p className="text-gray-600 mb-4">
                  Our pest control experts are ready to answer your questions and provide a personalized quote.
                </p>
                <div className="flex space-x-3">
                  <Button asChild variant="outline">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/quote">Get a Quote</Link>
                  </Button>
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
