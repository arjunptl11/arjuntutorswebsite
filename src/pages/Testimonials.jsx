import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Arjun helped me learn the key grammar rules for the SAT. He also helped with punctuation and explained sentence structure in a way I needed. His explanations were very useful, and I was able to answer grammar questions much more accurately on practice tests.",
    author: "Pranav G.",
    tag: "SAT Reading & Writing",
  },
  {
    text: "He helped me improve in reading and writing by showing me how to quickly find the right evidence and avoid common traps in the questions. His tips made the passages much less confusing, and I became much more efficient.",
    author: "Bhuvan R.",
    tag: "SAT Reading & Writing",
  },
  {
    text: "Arjun helped me understand how to memorize and use the trig unit circle effectively. He explained it in a simple way that made it much easier to remember angles and values in practical ways, not like the hand tricks I was trying before. I felt confident going into my quiz and was able to do well thanks to his help.",
    author: "Riya D.",
    tag: "High School Math",
  },
  {
    text: "We were fortunate to have Arjun tutor our son via Zoom just two days before his 5th Grade Math EOG, and the experience was outstanding. He took the time to explain everything clearly and made sure our son truly understood the material. He always came prepared with worksheets and a slide deck, and he consistently sent updates to keep us informed of our son's progress. We truly appreciate Arjun's efforts and highly recommend his math tutoring services.",
    author: "Parents of Steve",
    tag: "K–8 Math",
  },
  {
    text: "I appreciate Arjun for taking the time to help my 4th grader. It's only been a week, and I can already see his genuine interest in helping students. He is very knowledgeable, and I highly recommend his services. I hope many students take advantage of his expertise.",
    author: "Parents of Anika",
    tag: "K–8 Academic Support",
  },
  {
    text: "Arjun's consultation session itself was extremely helpful. He helped me break down English problems in a way that was much easier to understand than before. He taught effective strategies, and his teaching style is very clear. I can already tell he will help me improve my English skills.",
    author: "Yashasvi B.",
    tag: "SAT Reading & Writing",
  },
  {
    text: "From just the consultation, I could tell how strong Arjun's teaching is. He came prepared, focused on what I needed, and explained everything clearly. He was also very flexible, gave me practice that matched my level, and went through each question and answer thoroughly in a way that was easy to understand.",
    author: "Manvi B.",
    tag: "SAT Prep",
  },
];

export default function Testimonials() {
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
              What Students & Families Say
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real results from real students, from SAT prep to K–8 support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="break-inside-avoid bg-card border border-border/60 rounded-xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-secondary mb-4 fill-secondary" />
                <p className="text-sm leading-relaxed text-foreground/80 mb-5">{t.text}</p>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-sm">{t.author}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary/30 text-foreground/70 font-medium whitespace-nowrap">
                    {t.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}