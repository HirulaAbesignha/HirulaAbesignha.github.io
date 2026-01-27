import { motion } from "framer-motion";
import { Palette, Code, Smartphone, Lightbulb, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually stunning interfaces that delight users and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications with modern technologies.",
    features: ["React/Next.js", "TypeScript", "Node.js", "APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Designing seamless mobile experiences that work beautifully across all devices.",
    features: ["iOS Design", "Android Design", "Cross-platform", "App Prototypes"],
  },
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description:
      "Developing cohesive brand identities that resonate with your target audience.",
    features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Marketing"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section className="section-padding bg-card">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary">
            What I Do
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Services & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            I specialize in creating exceptional digital experiences through a combination
            of design thinking and technical expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2"
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
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-muted-foreground">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full bg-secondary px-3 py-1 font-body text-xs text-muted-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="absolute right-8 top-8 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-body text-primary transition-colors hover:text-primary/80"
          >
            View All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
