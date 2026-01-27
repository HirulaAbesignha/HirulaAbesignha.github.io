import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";

const skills = [
  "UI/UX Design",
  "React & Next.js",
  "TypeScript",
  "Figma & Adobe XD",
  "Node.js",
  "Responsive Design",
];

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm uppercase tracking-widest text-primary">
              About Me
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Turning Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              With over 5 years of experience in design and development, I specialize in
              creating user-centered digital experiences that combine aesthetics with
              functionality. My passion lies in transforming complex problems into
              elegant, intuitive solutions.
            </p>
            <p className="mt-4 font-body text-muted-foreground">
              I believe great design is invisible – it just works. Every project I
              undertake is approached with meticulous attention to detail, ensuring that
              the final product not only looks beautiful but also delivers exceptional
              user experiences.
            </p>

            {/* Skills */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-body text-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link to="/about">
                <CustomButton variant="outline" size="lg">
                  Learn More About Me <ArrowUpRight className="h-4 w-4" />
                </CustomButton>
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary p-8">
              {/* Decorative elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
              
              {/* Experience box */}
              <div className="relative flex h-full flex-col items-center justify-center text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm"
                >
                  <p className="font-display text-7xl font-bold text-gradient">5+</p>
                  <p className="mt-2 font-body text-lg text-muted-foreground">
                    Years of Experience
                  </p>
                </motion.div>

                {/* Floating cards */}
                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute left-4 top-12 rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-bold text-foreground">50+</p>
                  <p className="font-body text-xs text-muted-foreground">Projects</p>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute bottom-12 right-4 rounded-xl border border-border bg-card/80 px-4 py-3 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl font-bold text-foreground">30+</p>
                  <p className="font-body text-xs text-muted-foreground">Clients</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
