import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomButton } from "@/components/ui/custom-button";
import profileImage from "@/assets/profile-hero.jpg";

const experiences = [
  {
    year: "2023 - Present",
    title: "Senior UI/UX Designer",
    company: "Tech Innovators Inc.",
    description: "Leading design initiatives for enterprise-level applications.",
  },
  {
    year: "2021 - 2023",
    title: "Product Designer",
    company: "Creative Studio Co.",
    description: "Designed and developed user-centered digital products.",
  },
  {
    year: "2019 - 2021",
    title: "Junior Developer",
    company: "StartUp Labs",
    description: "Built responsive web applications using React and Node.js.",
  },
];

const stats = [
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src={profileImage}
                    alt="David Anderson"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                {/* Floating stats */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-4 bottom-8 rounded-2xl border border-border bg-card/90 p-6 backdrop-blur-sm lg:-right-12"
                >
                  <div className="flex items-center gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                        <p className="font-display text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-body text-sm uppercase tracking-widest text-primary">
                  About Me
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  Passionate About Creating{" "}
                  <span className="text-gradient">Digital Excellence</span>
                </h1>
                <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                  I'm David Anderson, a UI/UX designer and developer based in San
                  Francisco. With over 5 years of experience, I've had the privilege of
                  working with startups and established companies alike, helping them
                  create meaningful digital experiences.
                </p>
                <p className="mt-4 font-body text-muted-foreground">
                  My approach combines creativity with strategic thinking. I believe
                  that great design isn't just about aesthetics – it's about solving
                  problems and creating value for users and businesses.
                </p>

                {/* Skills */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    "User Research",
                    "Wireframing",
                    "Prototyping",
                    "Visual Design",
                    "Front-end Dev",
                    "Design Systems",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="font-body text-foreground">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <span className="font-body text-sm uppercase tracking-widest text-primary">
                My Journey
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Professional Experience
              </h2>
            </motion.div>

            <div className="mt-16 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative border-l-2 border-primary/30 pl-8 pb-8 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                  <span className="font-body text-sm text-primary">{exp.year}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="font-body text-muted-foreground">{exp.company}</p>
                  <p className="mt-2 font-body text-muted-foreground">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Let's Create Something <span className="text-gradient">Together</span>
              </h2>
              <p className="mt-4 font-body text-muted-foreground">
                I'm always open to discussing new projects and opportunities.
              </p>
              <Link to="/contact" className="mt-8 inline-block">
                <CustomButton variant="hero" size="lg">
                  Get in Touch <ArrowRight className="h-5 w-5" />
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

export default AboutPage;
