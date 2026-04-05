import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Simple, Affordable Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Quality tutoring shouldn't break the bank. One transparent rate for all subjects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-card border-2 border-primary rounded-2xl p-8 md:p-10"
            >
              <div className="absolute -top-3 left-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </span>
              </div>

              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Standard Session</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-5xl font-bold">$20</span>
                <span className="text-muted-foreground text-lg">/ hour</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "All subjects included",
                  "One-on-one or group format",
                  "In-person or online",
                  "Tutor matched to student needs",
                  "Flexible scheduling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/booking">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-11 gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-secondary/20 border border-secondary/50 rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">First Session</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-5xl font-bold">$10</span>
                <span className="text-muted-foreground text-lg">/ hour</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">50% off your first consultation</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Get to know the tutoring style",
                  "Discuss academic goals",
                  "Assessment of student level",
                  "Personalized plan overview",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/booking">
                <Button variant="outline" className="w-full font-semibold h-11 gap-2 border-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}