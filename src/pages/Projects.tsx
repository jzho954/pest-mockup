
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/shared/ImageWithFallback";

const projectsData = [
  {
    id: "apartment-complex",
    title: "Apartment Complex Fumigation",
    description: "Complete pest elimination for a 200-unit apartment complex in downtown area.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    category: "Commercial",
  },
  {
    id: "restaurant-pest-control",
    title: "Restaurant Pest Control",
    description: "Implementing preventative pest control measures for a high-end restaurant chain.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    category: "Commercial",
  },
  {
    id: "residential-termite-treatment",
    title: "Residential Termite Treatment",
    description: "Comprehensive termite treatment and prevention for a family home.",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    category: "Residential",
  },
  {
    id: "wildlife-removal",
    title: "Wildlife Removal & Prevention",
    description: "Humane removal of wildlife and installation of preventative measures.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    category: "Wildlife",
  },
  {
    id: "office-building-treatment",
    title: "Office Building Treatment",
    description: "Comprehensive pest management for a multi-floor corporate office building.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    category: "Commercial",
  },
  {
    id: "hotel-pest-management",
    title: "Hotel Pest Management",
    description: "Discrete and effective pest control solutions for a luxury hotel chain.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "Commercial",
  },
  {
    id: "agricultural-pest-control",
    title: "Agricultural Pest Control",
    description: "Eco-friendly pest management solutions for a large organic farm.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    category: "Agricultural",
  },
  {
    id: "mosquito-control-public-park",
    title: "Mosquito Control for Public Park",
    description: "Comprehensive mosquito management program for a large public recreational area.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f",
    category: "Public Space",
  },
];

const Projects = () => {
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
    >
      <PageHeader
        title="Our Projects"
        subtitle="See how we've helped homes and businesses become pest-free"
        backgroundImage="https://images.unsplash.com/photo-1621905251189-08b45d6a269e"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Our Recent Pest Control Projects"
            subtitle="Browse through our portfolio of successful pest control and removal projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="hover-lift"
              >
                <Card className="overflow-hidden h-full border border-gray-200">
                  <div className="relative overflow-hidden h-48">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary bg-opacity-90 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/projects/${project.id}`} className="flex items-center justify-center">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
