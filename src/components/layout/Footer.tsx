
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={footerAnimation}
          >
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-white">PestPro</h3>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Professional pest control services providing safe and effective solutions for residential and commercial properties.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0 hover:text-primary hover:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0 hover:text-primary hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0 hover:text-primary hover:bg-gray-800">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 p-0 hover:text-primary hover:bg-gray-800">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={footerAnimation}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/services">Services</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/projects">Projects</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/faq">FAQ</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/contact">Contact</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="ghost" className="p-0 h-auto text-gray-400 hover:text-primary hover:bg-transparent">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={footerAnimation}
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Pest Control Ave, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">info@pestpro.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} PestPro. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
