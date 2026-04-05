import { motion } from "framer-motion";
import { Users, Monitor, UserCheck, BookOpen } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Team-Based",
    description: "Coordinated tutors assigned for the best academic fit",
  },
  {
    icon: Monitor,
    title: "In-Person & Online",
    description: "Flexible formats to suit your schedule",
  },
  {
    icon: UserCheck,
    title: "One-on-One & Group",
    description: "Individual attention or collaborative learning",
  },
  {
    icon: BookOpen,
    title: "K–12 Coverage",
    description: "From elementary foundations to SAT mastery",
  },
];

export default function OverviewSection() {
  return (
    <section className="bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Why ArjunTutors
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            ArjunTutors is a team-based tutoring organization offering one-on-one and small group sessions across a range of subjects. Our tutors are assigned based on student needs to ensure the best academic fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border/60 rounded-xl p-6 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-secondary/40 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-1.5">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}