import { motion } from "framer-motion";
import { Heart, Laptop } from "lucide-react";

import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-gradient-to-b from-background to-muted/20 py-6 backdrop-blur-sm">
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <motion.div
          className="flex flex-col items-center justify-between md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-center text-sm text-muted-foreground md:text-start"
            whileHover={{ scale: 1.01 }}
          >
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </motion.p>
          <motion.p
            className="mt-2 text-center text-sm text-muted-foreground md:mt-0 md:text-start flex  gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            Built with{" "}
            <motion.span
              className="inline-flex h-5 w-5 items-center justify-center"
              whileHover={{ scale: 1.2, color: "#8b5cf6" }}
              transition={{ duration: 0.3 }}
            >
              <Laptop className="h-5 w-5" />
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="inline-flex h-5 w-5 items-center justify-center"
              whileHover={{ scale: 1.2, color: "#ef4444" }}
            >
              <Heart className="h-5 w-5" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
