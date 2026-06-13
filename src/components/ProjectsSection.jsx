import { Section, Badge } from "./common";

export function ProjectsSection({ projects }) {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} delay={idx * 150} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <div
      className="group border border-gray-200 rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:border-gray-300 hover:bg-gray-50 cursor-pointer animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
          {project.name}
        </h3>
        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
          <span className="text-sm">↗</span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="default">{tech}</Badge>
        ))}
        {project.technologies.length > 5 && (
          <Badge variant="default">+{project.technologies.length - 5}</Badge>
        )}
      </div>
      
      {project.highlights && (
        <ul className="space-y-2 pt-4 border-t border-gray-200">
          {project.highlights.map((highlight, hIdx) => (
            <li 
              key={hIdx}
              className="text-gray-700 text-sm flex gap-3 animate-fade-in"
              style={{
                animationDelay: `${delay + hIdx * 50}ms`,
              }}
            >
              <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
