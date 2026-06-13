import { Section, Badge } from "./common";

export function ExperienceSection({ experience }) {
  return (
    <Section id="experience" title="Experience">
      {experience.map((job, jobIdx) => (
        <div 
          key={jobIdx}
          className="mb-16 animate-fade-in-up"
          style={{
            animationDelay: `${jobIdx * 150}ms`,
          }}
        >
          <div className="mb-8 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-start mb-2 flex-wrap gap-4">
              <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded">
                {job.duration}
              </span>
            </div>
            <p className="text-lg text-gray-600 font-semibold">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
          </div>

          {job.projects && (
            <div className="space-y-8">
              {job.projects.map((project, pIdx) => (
                <ProjectHighlight key={pIdx} project={project} delay={pIdx * 100} />
              ))}
            </div>
          )}
        </div>
      ))}
    </Section>
  );
}

function ProjectHighlight({ project, delay }) {
  return (
    <div 
      className="pl-6 border-l-4 border-gray-900 transition-all duration-500 hover:border-gray-600 animate-fade-in-right"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
        {project.name}
      </h4>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 6).map((tech) => (
          <Badge key={tech} variant="secondary">{tech}</Badge>
        ))}
        {project.technologies.length > 6 && (
          <Badge variant="secondary">+{project.technologies.length - 6} more</Badge>
        )}
      </div>
      
      {project.highlights && (
        <ul className="space-y-3">
          {project.highlights.map((highlight, hIdx) => (
            <li 
              key={hIdx}
              className="text-gray-700 text-sm flex gap-3 group animate-fade-in"
              style={{
                animationDelay: `${delay + hIdx * 50}ms`,
              }}
            >
              <span className="text-gray-400 flex-shrink-0 mt-1 group-hover:text-gray-900 transition-colors">→</span>
              <span className="group-hover:text-gray-900 transition-colors">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
