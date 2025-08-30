import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { personalInfo } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-24">
      <div className="relative z-10 container mx-auto max-w-4xl px-6 md:px-4">
        <motion.div
          className="mb-8 flex flex-col justify-between md:flex-row md:items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="mb-2 text-4xl font-bold"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="mb-6 text-xl text-muted-foreground"
              variants={childVariants}
            >
              Software Engineer
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-2 md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="me-2 h-4 w-4" />
                {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="mr-2 h-4 w-4" />
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 flex justify-center md:mt-0"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <img
                src={personalInfo.profilePicture}
                alt="Profile"
                className="relative w-48 rounded-full ring-2 ring-purple-500/50 md:w-60"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-purple-500/10">
            <p className="relative mb-4 py-2 pl-4 text-muted-foreground">
              <span className="absolute top-0 left-0 h-full w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500"></span>
              {personalInfo.heroDescription}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
