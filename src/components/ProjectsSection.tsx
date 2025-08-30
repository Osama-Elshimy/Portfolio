import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

import { projects } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GlassCard } from "./ui/glass-card";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12">
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-left">
            🚀 Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group flex h-full flex-col overflow-hidden dark:border-purple-500/10">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <CardTitle className="text-center transition-colors duration-300 group-hover:text-purple-500 md:text-left">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="ml-4 list-disc space-y-1 text-sm transition-all duration-300 group-hover:space-y-2">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex items-center justify-center border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 md:justify-start">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center pt-8 text-sm text-muted-foreground transition-colors hover:text-purple-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" />
                    View on GitHub 🔗
                  </motion.a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
