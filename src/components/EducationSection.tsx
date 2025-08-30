import { education } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import TimelineItem from "./TimelineItem";

export function EducationSection() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-muted/10 to-background py-12"
    >
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-left">
            🎓 Education
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
