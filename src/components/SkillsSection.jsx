import { Section, Badge } from "./common";

export function SkillsSection({ skills }) {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skills).map(([category, items], idx) => (
          <div 
            key={category}
            className="animate-fade-in-left"
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4 pb-2 border-b-2 border-gray-200">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <Badge 
                  key={skill}
                  variant="default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
