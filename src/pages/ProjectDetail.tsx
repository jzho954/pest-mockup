
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/shared/PageHeader";
import ImageWithFallback from "@/components/shared/ImageWithFallback";

const projectsData = [
  {
    id: "apartment-complex",
    title: "Apartment Complex Fumigation",
    description: "Complete pest elimination for a 200-unit apartment complex in downtown area.",
    fullDescription: "This large-scale fumigation project required careful planning and coordination with property management. We conducted a thorough inspection, identified multiple infestation points, and developed a comprehensive treatment plan that minimized disruption to residents while ensuring complete pest elimination.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    beforeImage: "https://images.unsplash.com/photo-1534430480872-3498386e7856",
    afterImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    location: "Downtown Business District",
    date: "January 15, 2025",
    client: "Urban Properties Management",
    category: "Commercial",
    features: [
      "Initial comprehensive inspection",
      "Targeted treatment of 200 units",
      "Common area fumigation",
      "Follow-up preventative treatments",
      "Staff training for future prevention"
    ]
  },
  {
    id: "restaurant-pest-control",
    title: "Restaurant Pest Control",
    description: "Implementing preventative pest control measures for a high-end restaurant chain.",
    fullDescription: "This upscale restaurant was experiencing pest issues that threatened their reputation for excellence. Our team implemented a discreet, comprehensive pest control program focusing on kitchen areas, storage rooms, and dining spaces. We used food-safe products and methods that eliminated pests while ensuring zero impact on food preparation.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    beforeImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    afterImage: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
    location: "Midtown Culinary District",
    date: "February 8, 2025",
    client: "Gourmet Dining Group",
    category: "Commercial",
    features: [
      "Food-safe pest control solutions",
      "After-hours treatment schedule",
      "HACCP compliant procedures",
      "Staff training on prevention",
      "Ongoing maintenance program"
    ]
  },
  {
    id: "residential-termite-treatment",
    title: "Residential Termite Treatment",
    description: "Comprehensive termite treatment and prevention for a family home.",
    fullDescription: "This family home had an extensive termite infestation that was threatening the structural integrity of the building. Our team conducted a thorough inspection, identified all affected areas, and implemented a comprehensive treatment plan that eliminated the existing termite colonies and prevented future infestations.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    beforeImage: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    afterImage: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    location: "Suburban Residential Area",
    date: "March 22, 2025",
    client: "Johnson Family",
    category: "Residential",
    features: [
      "Comprehensive termite inspection",
      "Targeted treatment of affected areas",
      "Installation of termite barriers",
      "Structural damage assessment",
      "5-year protection guarantee"
    ]
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal & Prevention",
    description: "Humane removal of wildlife and installation of preventative measures.",
    fullDescription: "A local business was experiencing problems with raccoons and other wildlife entering their property and causing damage. Our wildlife specialists humanely trapped and relocated the animals, then implemented a series of preventative measures to ensure they couldn't return, including sealing entry points and installing deterrents.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    beforeImage: "https://images.unsplash.com/photo-1588123415838-29c82e31c0ef",
    afterImage: "https://images.unsplash.com/photo-1531125227120-9808a808446d",
    location: "Commercial District",
    date: "April 5, 2025",
    client: "Metro Business Center",
    category: "Wildlife",
    features: [
      "Humane trapping and relocation",
      "Entry point identification and sealing",
      "Installation of deterrent systems",
      "Damage repair consultation",
      "Ongoing monitoring services"
    ]
  },
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === projectId);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
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
        title={project.title}
        subtitle={project.description}
        backgroundImage={project.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Button asChild variant="outline" className="mb-8 group">
            <Link to="/projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Project Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8">{project.fullDescription}</p>

              <h3 className="text-xl font-semibold mb-4">Before & After</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative pb-4">
                      <span className="absolute top-4 left-4 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full z-10">
                        Before
                      </span>
                      <ImageWithFallback
                        src={project.beforeImage}
                        alt={`${project.title} Before`}
                        className="w-full h-56 object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative pb-4">
                      <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full z-10">
                        After
                      </span>
                      <ImageWithFallback
                        src={project.afterImage}
                        alt={`${project.title} After`}
                        className="w-full h-56 object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-xl font-semibold mb-4">Solutions Provided</h3>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Information */}
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Project Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Project Date</p>
                        <p className="font-medium">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetail;
