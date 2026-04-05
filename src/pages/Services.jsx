import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Calculator, Microscope, BookOpen, FileText } from "lucide-react";

const sections = [
  {
    icon: GraduationCap,
    title: "SAT Preparation",
    items: ["SAT Math", "SAT Reading and Writing"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    items: ["Math 1", "Math 2", "Math 3", "Precalculus", "Calculus AB", "Calculus BC"],
    color: "bg-secondary/40 text-foreground",
  },
  {
    icon: Microscope,
    title: "Science",
    items: ["Biology"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "K–8 Tutoring",
    items: ["Math", "Reading", "Science", "General Academic Support"],
    color: "bg-secondary/40 text-foreground",
  },
  {
    icon: FileText,
    title: "Applications",
    items: ["Academic program application support"],
    color: "bg-primary/10 text-primary",
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Sessions are available in both one-on-one and small group formats.
              Tutors are assigned internally based on student needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border/60 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-5`}>
                  <section.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-5">
              Find the Right Fit
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Tell us about your student's needs and we'll match them with the right tutor and format.
            </p>
            <Link to="/booking">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-12 gap-2">
                Book a Session <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}