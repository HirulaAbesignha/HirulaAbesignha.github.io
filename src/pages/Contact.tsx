import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hirulapinibinda01@gmail.com",
    href: "mailto:hirulapinibinda01@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+94 (76) 175 2211",
    href: "tel:+94761752211",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kandana, Sri Lanka",
    href: "#",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS IDs
      const SERVICE_ID = "service_xwkxg7z";
      const TEMPLATE_ID = "template_taa0nat";
      const PUBLIC_KEY = "YC54oVt3iBsmfncKR";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "hirulapinibinda01@gmail.com",
        },
        PUBLIC_KEY,
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-body text-sm uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Let's Work <span className="text-gradient">Together</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
                Have a project in mind? I'd love to hear about it. Send me a message
                and let's create something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding bg-card pt-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="mt-4 font-body text-muted-foreground">
                  Feel free to reach out through any of the following channels. I
                  typically respond within 24 hours.
                </p>

                <div className="mt-10 space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/50"
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <item.icon className="h- w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        <p className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                    </span>
                    <span className="font-body text-sm font-medium text-primary">
                      Available for new projects
                    </span>
                  </div>
                  <p className="mt-3 font-body text-sm text-muted-foreground">
                    I'm currently taking on new clients for Q1 2024. Book a call to
                    discuss your project.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Send a Message
                  </h2>
                  <p className="mt-2 font-body text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-body">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-card border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-body">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-card border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="font-body">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                        className="bg-card border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-body">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="bg-card border-border focus:border-primary resize-none"
                      />
                    </div>

                    <CustomButton
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="h-5 w-5" />
                        </>
                      )}
                    </CustomButton>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
