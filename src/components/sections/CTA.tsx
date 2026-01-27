import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm uppercase tracking-widest text-primary">
            Let's Work Together
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Have a Project in Mind?{" "}
            <span className="text-gradient">Let's Create Something Amazing</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground">
            I'm always excited to collaborate on new projects. Whether you need a
            complete website, mobile app, or brand identity, I'm here to help bring your
            vision to life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <CustomButton variant="hero" size="lg">
                Start a Project <ArrowRight className="h-5 w-5" />
              </CustomButton>
            </Link>
            <a href="mailto:hello@david.design">
              <CustomButton variant="outline" size="lg">
                hello@david.design
              </CustomButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
