import { motion } from "framer-motion";
import { Github, Link as LinkIcon, Rocket } from "lucide-react";

import { projects } from "@/lib/data";
import { MotionWrapper } from "./MotionWrapper";
import { CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { GlassCard } from "./ui/glass-card";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-12">
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
              <Rocket className="h-5 w-5 text-purple-500" />
            </motion.div>
            Projects
          </h2>
        </MotionWrapper>

        {projects.length > 0 ? (
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
                      <Github className="me-2 h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" />
                      <motion.span
                        className="mr-1"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <LinkIcon className="inline h-4 w-4" />
                      </motion.span>
                      View on GitHub
                    </motion.a>
                  </CardFooter>
                </GlassCard>
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <GlassCard className="p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Rocket className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">Projects coming soon!</p>
            </motion.div>
          </GlassCard>
        )}
      </div>
    </section>
  );
}
