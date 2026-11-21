import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

import { skills } from "@/lib/data";
import { MotionWrapper } from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

interface SkillTagProps {
  skill: string;
  index: number;
}

function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="rounded-md border border-purple-500/10 bg-muted/80 px-3 py-1 text-sm shadow-sm backdrop-blur-sm"
    >
      {skill}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-background to-muted/20 py-12"
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
              <Wrench className="h-5 w-5 text-purple-500" />
            </motion.div>
            Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="mb-3 flex items-center text-center text-lg font-medium md:text-left">
                Programming Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {skills.programmingLanguages.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="mb-3 flex items-center text-center text-lg font-medium md:text-start">
                Frontend Development
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {skills.frontendDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="mb-3 flex items-center text-center text-lg font-medium md:text-start">
                Tools & Services
              </h3>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                {skills.toolsAndServices.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
