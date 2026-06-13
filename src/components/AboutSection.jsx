import { Section } from "./common";

export function AboutSection({ about }) {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl">
        <p 
          className="text-lg text-gray-700 leading-relaxed mb-6 animate-fade-in"
          style={{
            animationDelay: '100ms',
          }}
        >
          {about}
        </p>
        <p 
          className="text-lg text-gray-700 leading-relaxed animate-fade-in"
          style={{
            animationDelay: '200ms',
          }}
        >
          I focus on writing clean, maintainable code and creating intuitive user experiences. 
          My expertise spans backend APIs with .NET Core and frontend applications with React.
        </p>
      </div>
    </Section>
  );
}

export function AchievementsSection({ achievements }) {
  return (
    <Section title="Highlights & Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, idx) => (
          <AchievementItem key={idx} achievement={achievement} delay={idx * 100} />
        ))}
      </div>
    </Section>
  );
}

function AchievementItem({ achievement, delay }) {
  return (
    <div
      className="group flex gap-4 p-4 rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-md hover:border-gray-900 hover:bg-gray-50 animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="flex-shrink-0 pt-1">
        <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
          <span className="text-white text-sm font-bold">✓</span>
        </div>
      </div>
      <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{achievement}</p>
    </div>
  );
}
