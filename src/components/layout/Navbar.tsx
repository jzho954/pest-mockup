
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { label: "Home", path: "/" },
    { 
      label: "Services", 
      path: "/services",
      dropdown: [
        { label: "Residential", path: "/services/residential" },
        { label: "Commercial", path: "/services/commercial" },
        { label: "Termite Control", path: "/services/termite-control" },
        { label: "Wildlife Removal", path: "/services/wildlife-removal" }
      ]
    },
    { 
      label: "Projects", 
      path: "/projects",
      dropdown: [
        { label: "Residential", path: "/projects/residential" },
        { label: "Commercial", path: "/projects/commercial" },
        { label: "Emergency", path: "/projects/emergency" }
      ]
    },
    { label: "FAQ", path: "/faq" },
    { label: "Contact Us", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-none",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className={cn(
                "font-bold text-2xl transition-colors duration-300",
                scrolled ? "text-primary" : "text-white"
              )}>
                PestPro
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <DropdownMenu key={item.label}>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          className={cn(
                            "flex items-center text-base hover:bg-transparent hover:text-primary transition-colors duration-200",
                            scrolled ? "text-gray-700" : "text-white"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="center" className="w-48 p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.label} asChild>
                            <Link 
                              to={dropdownItem.path}
                              className="w-full px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                              {dropdownItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={cn(
                      "text-base transition-colors hover:bg-transparent hover:text-primary",
                      scrolled ? "text-gray-700" : "text-white",
                      location.pathname === item.path && "font-medium"
                    )}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                );
              })}
              
              <Button asChild className="ml-2">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </motion.nav>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Menu"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 transition-colors",
                  scrolled ? "text-gray-700" : "text-white"
                )}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="py-1">
                    {item.dropdown ? (
                      <div className="flex flex-col">
                        <Button
                          variant="ghost"
                          className="justify-start text-gray-700 font-medium"
                        >
                          {item.label}
                        </Button>
                        <div className="pl-4 mt-1 border-l-2 border-gray-200 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Button
                              key={dropdownItem.label}
                              variant="ghost"
                              asChild
                              className="justify-start text-gray-600 hover:text-primary py-1 h-auto"
                            >
                              <Link to={dropdownItem.path}>{dropdownItem.label}</Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        asChild
                        className="justify-start text-gray-700 w-full"
                      >
                        <Link to={item.path}>{item.label}</Link>
                      </Button>
                    )}
                  </div>
                ))}
                <Button asChild className="w-full mt-4">
                  <Link to="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
