import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Arjun Patel",
    role: "Founder & Lead Tutor",
    initials: "AP",
    credentials: [
      "1580 SAT (first attempt)",
      "3+ years tutoring experience",
      "2 years SAT tutoring",
      "Experience leading SAT classes",
      "NCSSM Online Class of 2027",
    ],
  },
  {
    name: "Om Desai",
    role: "Lead Tutor",
    initials: "OD",
    credentials: [
      "NCSSM Durham Class of 2024",
      "UNC Chapel Hill Class of 2028",
      "Major: Neuroscience",
      "Minor: Chemistry",
      "5+ years tutoring experience",
      "Application consultant",
    ],
  },
  {
    name: "Pranathi Konduri",
    role: "Associate Tutor – K–8",
    initials: "PK",
    credentials: [
      "2+ years tutoring experience",
      "Science Olympiad varsity captain",
      "Perfect PSAT Math score",
      "Focus: K–8 students only",
    ],
  },
];

export default function Team() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experienced tutors with proven academic credentials, dedicated to student success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border/60 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5">
                  <span className="text-primary-foreground font-bold text-xl">{member.initials}</span>
                </div>
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-5">{member.role}</p>
                <ul className="space-y-2.5">
                  {member.credentials.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                      {c}
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
              Work With Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Let our team find the right tutor for your student's needs.
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