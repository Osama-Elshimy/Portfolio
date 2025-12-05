import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

import { workExperience } from "@/lib/data";
import { MotionWrapper } from "./MotionWrapper";
import { TimelineItem } from "./TimelineItem";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-muted/20 to-background py-12"
    >
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 flex items-center text-center text-2xl font-bold md:inline-block md:text-left">
            <motion.div
              className="me-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.1, color: "#8b5cf6" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Briefcase className="h-5 w-5 text-purple-500" />
            </motion.div>
            Work Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position} | ${job.company}`}
              subtitle={job.location}
              date={job.period}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 rounded-lg border border-purple-500/20 bg-background/80 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-purple-500/10 dark:bg-card/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-3 flex items-center">
                  <div className="me-2 flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/10">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-medium">Key Achievements</h4>
                </div>
                <ul className="ml-4 list-none space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="relative pl-6 text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
