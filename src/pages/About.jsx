import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Matching",
    description: "We assign tutors internally to match each student's subject, level, and goals — ensuring the best possible academic fit.",
  },
  {
    icon: Shield,
    title: "Consistency & Quality",
    description: "Unlike individual freelancers, we operate as a coordinated team with shared standards and structured sessions.",
  },
  {
    icon: Users,
    title: "Flexible Formats",
    description: "Both in-person and online sessions available, including one-on-one and group formats to suit every learner.",
  },
];

export default function About() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              About ArjunTutors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              ArjunTutors is a structured tutoring organization designed to provide consistent, high-quality academic support. Unlike individual tutors, we operate as a coordinated team, assigning tutors internally to match each student's subject, level, and goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join the families who trust ArjunTutors for structured, reliable academic support.
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