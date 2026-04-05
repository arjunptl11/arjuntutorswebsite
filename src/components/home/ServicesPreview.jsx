import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Calculator, Microscope, BookOpen } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "SAT Prep",
    description: "Comprehensive Math, Reading & Writing preparation",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calculator,
    title: "High School Math",
    description: "From Math 1 through Calculus BC",
    color: "bg-secondary/40 text-foreground",
  },
  {
    icon: Microscope,
    title: "Biology",
    description: "In-depth science tutoring for high school students",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "K–8 Support",
    description: "Math, reading, science, and general academic support",
    color: "bg-secondary/40 text-foreground",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Tailored sessions across core subjects and standardized testing
            </p>
          </motion.div>
          <Link to="/services">
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary font-semibold">
              View All Services <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative border border-border/60 rounded-xl p-7 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}