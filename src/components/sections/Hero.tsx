import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { CustomButton } from "@/components/ui/custom-button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 lg:flex-row lg:justify-between lg:px-12">
        {/* Content */}
        <div className="z-10 max-w-2xl text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-body text-sm text-primary">Available for Work</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-muted-foreground">Hello, I'm</span>
            <br />
            <span className="text-gradient">Hirula Abesignha</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 font-body text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            A passionate <span className="text-foreground">UI/UX Designer</span> &{" "}
            <span className="text-foreground">Developer</span> crafting beautiful digital
            experiences that inspire and engage users worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <Link to="/contact">
              <CustomButton variant="hero" size="lg">
                Hire Me
              </CustomButton>
            </Link>
            <CustomButton asChild variant="outline" size="lg">
              <a href="/Hirula_CV.pdf" download>
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </CustomButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex justify-center gap-12 lg:justify-start"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 font-body text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-16 lg:mt-0"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 animate-pulse-glow" />
            <div className="absolute -inset-8 rounded-full border border-primary/10" />
            
            {/* Image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-primary/30 md:h-96 md:w-96">
              <img
                src={profileImage}
                alt="David Anderson"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs text-muted-foreground">Scroll Down</span>
          <ArrowDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
