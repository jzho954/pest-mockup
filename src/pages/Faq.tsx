
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    questions: [
      {
        question: "How long does a typical pest treatment take?",
        answer: "Most residential pest treatments take between 1-3 hours, depending on the size of your property and the severity of the infestation. Commercial treatments may take longer based on the facility size and complexity."
      },
      {
        question: "Are your pest control treatments safe for children and pets?",
        answer: "Yes, we use eco-friendly and low-toxicity products that are safe for families and pets. We'll provide specific instructions on when it's safe to re-enter treated areas, usually just 1-2 hours after application."
      },
      {
        question: "How often should I schedule pest control services?",
        answer: "For optimal protection, we recommend quarterly preventative treatments. However, this can vary based on your location, property type, and pest history. We offer customized maintenance plans to suit your specific needs."
      },
      {
        question: "Do you offer warranties or guarantees on your services?",
        answer: "Yes, we stand behind our work with a 100% satisfaction guarantee. If pests return between scheduled treatments, we'll return to re-treat at no additional cost to you."
      }
    ]
  },
  {
    id: "specific-pests",
    title: "Questions About Specific Pests",
    questions: [
      {
        question: "How do I know if I have termites?",
        answer: "Signs of termite infestation include mud tubes on exterior walls, hollow-sounding wood, discarded wings, frass (termite droppings), and damaged wood surfaces. If you notice any of these signs, you should contact us immediately for a thorough inspection."
      },
      {
        question: "Can you handle bed bug infestations?",
        answer: "Yes, we specialize in bed bug elimination. Our comprehensive approach includes inspection, treatment, and follow-up to ensure complete eradication. We use a combination of chemical treatments, heat treatments, and preventative measures to eliminate bed bugs."
      },
      {
        question: "What attracts ants to my home?",
        answer: "Ants are primarily attracted to food sources, especially sugary or greasy substances. They also seek water and shelter. Keeping your home clean, storing food in sealed containers, fixing leaky pipes, and sealing entry points can help prevent ant infestations."
      },
      {
        question: "How do you handle wildlife removal?",
        answer: "We use humane trapping and removal techniques for wildlife such as raccoons, squirrels, and opossums. After removal, we identify and seal entry points to prevent re-entry and can provide repairs for any damage caused by the animals."
      }
    ]
  },
  {
    id: "services-pricing",
    title: "Services & Pricing",
    questions: [
      {
        question: "Do you offer free inspections?",
        answer: "Yes, we offer free initial inspections for residential and commercial properties. During the inspection, our technician will identify pest issues, recommend treatment options, and provide a detailed quote for services."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, checks, and electronic payments. For ongoing service contracts, we offer convenient automatic payment options and can provide itemized statements for your records."
      },
      {
        question: "Are there any contracts for your services?",
        answer: "While we offer contract options for ongoing maintenance plans, we also provide one-time service options with no long-term commitment. Our maintenance plans can be tailored to your specific needs and budget."
      },
      {
        question: "Do you offer emergency pest control services?",
        answer: "Yes, we understand that some pest situations require immediate attention. We offer emergency services with same-day or next-day appointments depending on the severity of the situation and availability."
      }
    ]
  }
];

const Faq = () => {
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
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our pest control services"
        backgroundImage="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Have Questions? We Have Answers"
              subtitle="Browse through our comprehensive FAQ section or contact us if you can't find what you're looking for"
            />

            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${category.id}-item-${index}`}
                      className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left hover:no-underline bg-white text-gray-800 font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                Can't find the answer you're looking for? Contact our customer support team.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Faq;
