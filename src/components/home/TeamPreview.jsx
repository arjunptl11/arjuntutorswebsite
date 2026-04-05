import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const leads = [
  {
    name: "Arjun Patel",
    role: "Founder & Lead Tutor",
    highlights: ["1580 SAT (first attempt)", "3+ years experience", "NCSSM Online '27"],
    initials: "AP",
  },
  {
    name: "Om Desai",
    role: "Lead Tutor",
    highlights: ["NCSSM Durham '24", "UNC Chapel Hill '28", "5+ years experience"],
    initials: "OD",
  },
];

export default function TeamPreview() {
  return (
    <section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Experienced tutors with proven academic track records
            </p>
          </motion.div>
          <Link to="/team">
            <Button variant="ghost" className="gap-2 text-primary hover:text-primary font-semibold">
              Meet the Full Team <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leads.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">{person.initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {person.highlights.map((h) => (
                  <span key={h} className="inline-flex px-3 py-1 rounded-full bg-secondary/30 text-xs font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}