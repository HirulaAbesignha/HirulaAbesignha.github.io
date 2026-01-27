import { motion } from "framer-motion";
import { Palette, Code, Smartphone, Lightbulb, Globe, Layers, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that delight users and drive engagement through thoughtful design.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design & Branding",
      "Usability Testing",
      "Design Systems",
    ],
    price: "From $2,500",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications using modern technologies and best practices.",
    features: [
      "React & Next.js Development",
      "TypeScript Integration",
      "API Development",
      "Performance Optimization",
      "SEO Implementation",
    ],
    price: "From $3,500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description:
      "Designing seamless mobile experiences that work beautifully across iOS and Android platforms.",
    features: [
      "iOS & Android Design",
      "Cross-platform UI/UX",
      "Interactive Prototypes",
      "App Store Assets",
      "Gesture Design",
    ],
    price: "From $4,000",
  },
  {
    icon: Lightbulb,
    title: "Brand Identity",
    description:
      "Developing cohesive brand identities that resonate with your target audience and stand out in the market.",
    features: [
      "Logo Design",
      "Visual Identity System",
      "Brand Guidelines",
      "Marketing Collateral",
      "Brand Strategy",
    ],
    price: "From $2,000",
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description:
      "Building powerful online stores with seamless checkout experiences and inventory management.",
    features: [
      "Shopify Development",
      "Custom Cart Design",
      "Payment Integration",
      "Inventory Systems",
      "Analytics Setup",
    ],
    price: "From $5,000",
  },
  {
    icon: Layers,
    title: "Design Consulting",
    description:
      "Strategic design consulting to help transform your digital presence and improve user experience.",
    features: [
      "Design Audits",
      "UX Strategy",
      "Team Workshops",
      "Process Optimization",
      "Mentorship",
    ],
    price: "From $150/hr",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesPage = () => {
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
                Services
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                What I Can Do <span className="text-gradient">For You</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
                I offer a comprehensive range of design and development services to help
                bring your digital vision to life. Every project is approached with
                dedication and attention to detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-card pt-0">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 font-body text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="font-display text-lg font-semibold text-gradient">
                      {service.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="font-body text-sm uppercase tracking-widest text-primary">
                How I Work
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                My Design Process
              </h2>
            </motion.div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements" },
                { step: "02", title: "Design", desc: "Creating wireframes, prototypes, and visual designs" },
                { step: "03", title: "Develop", desc: "Building with clean, scalable, and modern code" },
                { step: "04", title: "Deliver", desc: "Testing, launching, and providing ongoing support" },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="font-display text-5xl font-bold text-gradient">
                    {phase.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Ready to Start Your <span className="text-gradient">Project</span>?
              </h2>
              <p className="mt-4 font-body text-muted-foreground">
                Let's discuss how I can help bring your vision to life.
              </p>
              <Link to="/contact" className="mt-8 inline-block">
                <CustomButton variant="hero" size="lg">
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </CustomButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
