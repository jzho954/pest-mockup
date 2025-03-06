
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeading from "@/components/shared/SectionHeading";

const pestTypes = [
  { id: "ants", label: "Ants" },
  { id: "termites", label: "Termites" },
  { id: "rodents", label: "Rodents" },
  { id: "mosquitoes", label: "Mosquitoes" },
  { id: "cockroaches", label: "Cockroaches" },
  { id: "bed-bugs", label: "Bed Bugs" },
  { id: "wasps", label: "Wasps/Hornets" },
  { id: "spiders", label: "Spiders" },
  { id: "wildlife", label: "Wildlife" },
  { id: "other", label: "Other" }
];

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    propertyType: "residential",
    squareFootage: "",
    infestationLevel: "mild",
    selectedPests: [] as string[],
    additionalDetails: "",
    preferredDate: "",
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePestTypeChange = (pestId: string) => {
    setFormData((prev) => {
      const selectedPests = [...prev.selectedPests];
      if (selectedPests.includes(pestId)) {
        return {
          ...prev,
          selectedPests: selectedPests.filter(id => id !== pestId)
        };
      } else {
        return {
          ...prev,
          selectedPests: [...selectedPests, pestId]
        };
      }
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Quote request submitted successfully!", {
        description: "We'll contact you with a detailed quote within 24 hours.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          propertyType: "residential",
          squareFootage: "",
          infestationLevel: "mild",
          selectedPests: [],
          additionalDetails: "",
          preferredDate: "",
          termsAccepted: false
        });
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader
        title="Request a Free Quote"
        subtitle="Get a customized pest control plan for your property"
        backgroundImage="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Get Your Personalized Quote"
            subtitle="Fill out the form below with your pest control needs and we'll provide a detailed quote"
          />

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDate">Preferred Service Date</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Property Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Property Information</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Zip Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Property Type *</Label>
                    <RadioGroup 
                      value={formData.propertyType} 
                      onValueChange={(value) => handleRadioChange('propertyType', value)}
                      className="flex flex-wrap gap-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="residential" id="residential" />
                        <Label htmlFor="residential">Residential</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="commercial" id="commercial" />
                        <Label htmlFor="commercial">Commercial</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="industrial" id="industrial" />
                        <Label htmlFor="industrial">Industrial</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label htmlFor="squareFootage">Approximate Square Footage</Label>
                    <Input
                      id="squareFootage"
                      name="squareFootage"
                      value={formData.squareFootage}
                      onChange={handleChange}
                      type="number"
                      min="0"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Pest Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Pest Information</h3>
                <div className="space-y-6">
                  <div>
                    <Label className="mb-3 block">Infestation Level *</Label>
                    <RadioGroup 
                      value={formData.infestationLevel} 
                      onValueChange={(value) => handleRadioChange('infestationLevel', value)}
                      className="flex flex-wrap gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mild" id="mild" />
                        <Label htmlFor="mild">Mild - Just noticed pests</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="moderate" />
                        <Label htmlFor="moderate">Moderate - Regular sightings</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="severe" id="severe" />
                        <Label htmlFor="severe">Severe - Major infestation</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label className="mb-3 block">Type of Pests (Select all that apply) *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {pestTypes.map((pest) => (
                        <div key={pest.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={pest.id} 
                            checked={formData.selectedPests.includes(pest.id)}
                            onCheckedChange={(checked) => {
                              if (checked) handlePestTypeChange(pest.id);
                              else handlePestTypeChange(pest.id);
                            }}
                          />
                          <Label htmlFor={pest.id}>{pest.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="additionalDetails">Additional Details</Label>
                    <Textarea
                      id="additionalDetails"
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="Please provide any additional information about your pest control needs"
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="termsAccepted" 
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => {
                      handleCheckboxChange('termsAccepted', checked as boolean);
                    }}
                  />
                  <Label htmlFor="termsAccepted" className="text-sm">
                    I agree to the terms and conditions, including that PestPro may contact me by phone, email, or text about my request *
                  </Label>
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : isSuccess ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Request Submitted
                    </span>
                  ) : "Request Your Free Quote"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Quote;
