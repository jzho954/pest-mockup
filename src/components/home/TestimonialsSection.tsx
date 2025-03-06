
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Smith",
    location: "New York, NY",
    quote: "PestPro eliminated our ant problem completely. Their technician was professional, thorough, and explained everything clearly. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Johnson",
    location: "Chicago, IL",
    quote: "We had a terrible termite infestation that other companies couldn't resolve. PestPro came in, diagnosed the issue correctly, and implemented a solution that worked perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Williams",
    location: "Los Angeles, CA",
    quote: "The team at PestPro is prompt, efficient, and effective. They helped us get rid of a stubborn rodent problem and provided great preventative advice.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Miller",
    location: "Austin, TX",
    quote: "Professional service from start to finish. The technicians were knowledgeable and courteous, and most importantly, the pests are gone!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from our satisfied customers about their experiences with our pest control services."
        />

        <div className="relative overflow-hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <Card className="bg-white shadow-lg mx-auto max-w-3xl">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
