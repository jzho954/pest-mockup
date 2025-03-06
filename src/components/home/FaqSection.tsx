
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";

const faqItems = [
  {
    question: "How long does a typical pest treatment take?",
    answer: "Most residential pest treatments take between 1-3 hours, depending on the size of your property and the severity of the infestation. Commercial treatments may take longer based on the facility size and complexity.",
  },
  {
    question: "Are your pest control treatments safe for children and pets?",
    answer: "Yes, we use eco-friendly and low-toxicity products that are safe for families and pets. We'll provide specific instructions on when it's safe to re-enter treated areas, usually just 1-2 hours after application.",
  },
  {
    question: "How often should I schedule pest control services?",
    answer: "For optimal protection, we recommend quarterly preventative treatments. However, this can vary based on your location, property type, and pest history. We offer customized maintenance plans to suit your specific needs.",
  },
  {
    question: "Do you offer warranties or guarantees on your services?",
    answer: "Yes, we stand behind our work with a 100% satisfaction guarantee. If pests return between scheduled treatments, we'll return to re-treat at no additional cost to you.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our pest control services."
        />

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline bg-white text-gray-800 font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex justify-center mt-10">
            <Button asChild>
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
