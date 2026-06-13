import { Section } from "./common";

export function EducationSection({ education }) {
  return (
    <Section title="Education">
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <EducationCard key={idx} edu={edu} delay={idx * 150} />
        ))}
      </div>
    </Section>
  );
}

function EducationCard({ edu, delay }) {
  return (
    <div
      className="group border border-gray-200 rounded-lg p-6 transition-all duration-500 hover:shadow-md hover:border-gray-900 animate-fade-in-left"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
          {edu.degree}
        </h3>
        <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
          {edu.duration}
        </span>
      </div>
      
      <p className="text-gray-600 font-semibold mb-2">{edu.institution}</p>
      
      <div className="flex gap-4 text-sm">
        {edu.cgpa && (
          <span className="text-gray-500 group-hover:text-gray-700 transition-colors">
            CGPA: <span className="font-semibold text-gray-700">{edu.cgpa}</span>
          </span>
        )}
        {edu.percentage && (
          <span className="text-gray-500 group-hover:text-gray-700 transition-colors">
            Score: <span className="font-semibold text-gray-700">{edu.percentage}</span>
          </span>
        )}
      </div>
    </div>
  );
}
