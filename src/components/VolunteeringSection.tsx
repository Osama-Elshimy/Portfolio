import { volunteering } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import TimelineItem from "./TimelineItem";

export function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      className="bg-gradient-to-b from-muted/10 to-background py-12"
    >
      <div className="container mx-auto max-w-4xl px-6 md:px-4">
        <MotionWrapper>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-left">
            🤝 Volunteering
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {volunteering.map((volunt, index) => (
            <TimelineItem
              key={volunt.organization}
              title={volunt.role}
              subtitle={volunt.organization}
              date={volunt.period}
              isLast={index === volunteering.length - 1}
              index={index}
            >
              <p className="mb-3 text-sm text-muted-foreground">
                {volunt.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
