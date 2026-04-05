import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Instagram, Mail, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What subjects do you offer tutoring for?",
    a: "We offer tutoring in SAT Math, SAT Reading & Writing, Math 1/2/3, Precalculus, Calculus AB & BC, Biology, K–8 General Academic Support, and College Application Support."
  },
  {
    q: "Do you offer in-person and online sessions?",
    a: "Yes! We offer both in-person and online tutoring. You can indicate your preference when submitting a booking request, or choose 'No Preference' and we'll work with you."
  },
  {
    q: "What's the difference between one-on-one and group sessions?",
    a: "One-on-one sessions give your student dedicated, personalized attention from a single tutor. Group sessions are small collaborative learning settings that are more cost-effective and great for students who thrive with peers."
  },
  {
    q: "How do I choose a tutor?",
    a: "You don't need to — we handle that for you. Our team-based model means we assign the best-fit tutor based on your student's grade, subject, and goals. This ensures consistent quality."
  },
  {
    q: "How much do sessions cost?",
    a: "Our standard rate is $20/hour for one-on-one sessions. The first session is $10. Group sessions are priced lower. Visit the Pricing page for full details."
  },
  {
    q: "How do I pay?",
    a: "Payment details are arranged directly with us after your booking request is confirmed. We accept Venmo, Zelle, and cash. Payment is due before or at the time of each session."
  },
  {
    q: "How quickly will I hear back after submitting a request?",
    a: "We typically respond within 24 hours to confirm availability and match your student with the right tutor."
  },
];

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "919-360-6784",
    href: "tel:919-360-6784",
    description: "Call or text us anytime",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@arjuntutors",
    href: "https://instagram.com/arjuntutors",
    description: "Follow us for updates",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Get in touch",
    href: "/booking",
    description: "Submit a booking request",
  },
];

export default function Contact() {
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For questions or scheduling, reach out to us directly. We typically respond within a few hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-card border border-border/60 rounded-xl p-8 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">{method.label}</h3>
                <p className="text-primary font-medium text-sm mb-2">{method.value}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Quick answers to common questions before you reach out.</p>
          </motion.div>
          <div className="divide-y divide-border/60">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-base">{faq.q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground leading-relaxed pb-5">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}