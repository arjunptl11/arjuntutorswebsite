import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm";

export default function Booking() {
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
              Book a Session
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Fill out the form below and we'll match you with the right tutor. First session is 50% off.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/60 rounded-2xl p-8 md:p-10"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}