import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Handshake,
  Menu,
  Rocket,
  Wrench,
  X,
} from "lucide-react";

import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ui/theme-toggle";

const sections = ["experience", "skills", "education", "volunteering"] as const;

interface SectionIconProps {
  item: string;
}

function SectionIcon({ item }: SectionIconProps) {
  switch (item) {
    case "experience":
      return <Briefcase className="me-2 h-4 w-4" />;
    case "skills":
      return <Wrench className="me-2 h-4 w-4" />;
    case "projects":
      return <Rocket className="me-2 h-4 w-4" />;
    case "education":
      return <GraduationCap className="me-2 h-4 w-4" />;
    case "volunteering":
      return <Handshake className="me-2 h-4 w-4" />;
    default:
      return null;
  }
}

export function GlassHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full backdrop-blur-md backdrop-filter transition-all duration-300 supports-[backdrop-filter]:bg-background/60",
        {
          "border-b border-border/60 bg-background/90 shadow-lg dark:bg-background/70":
            isScrolled,
          "border-b border-border/40 bg-background/70 dark:bg-background/40":
            !isScrolled,
        },
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex max-w-4xl items-center justify-between p-4">
        <motion.a
          className="flex items-center text-lg font-medium"
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {personalInfo.name}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {sections.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="flex items-center text-foreground/60 transition-colors hover:text-foreground/80"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
            >
              {<SectionIcon item={item} />}
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <motion.button
            className="p-2 text-foreground md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="border-t border-border/10 bg-background/80 px-4 py-4 backdrop-blur-md backdrop-filter md:hidden dark:bg-background/40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {sections.map((item, index) => (
              <motion.div
                key={item}
                className="py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <a
                  href={`#${item}`}
                  className="flex w-full items-center text-foreground/60 transition-colors hover:text-foreground/80"
                  onClick={toggleMenu}
                >
                  <SectionIcon item={item} />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
