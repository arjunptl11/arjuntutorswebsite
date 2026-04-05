import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AvailabilityCTA() {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-semibold tracking-wide uppercase text-primary-foreground/80">
              Limited Availability
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-5">
            Spots Are Filling Up
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            High school and SAT spots are limited. Strong availability for K–8 students.
            Secure your session today.
          </p>

          <Link to="/booking">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8 h-12 text-base gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}