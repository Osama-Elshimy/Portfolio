import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { education } from "@/lib/data";
import { MotionWrapper } from "./MotionWrapper";
import { TimelineItem } from "./TimelineItem";

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-muted/10 to-background py-12"
    >
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 flex items-center text-center text-2xl font-bold md:text-left">
            <motion.div
              className="me-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1, color: "#8b5cf6" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GraduationCap className="h-5 w-5 text-purple-500" />
            </motion.div>
            Education
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={edu.degree}
              subtitle={edu.institution}
              date={edu.period}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="mb-3 text-sm text-muted-foreground">
                {edu.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
