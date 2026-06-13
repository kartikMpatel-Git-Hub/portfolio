import { Button } from "./common";

export function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="contact" 
      className="border-t border-gray-200 py-16 mt-16 animate-fade-in"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <ContactCard 
            title="Let's Connect"
            description="Have a project in mind? Let's talk about it."
            action={
              <Button variant="primary" href={`mailto:${personal.email}`}>
                Send Email
              </Button>
            }
            delay={0}
          />
          
          <ContactCard 
            title="Social Links"
            description="Find me on these platforms"
            delay={100}
          >
            <div className="space-y-2 text-sm">
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                LinkedIn
              </a>
              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                GitHub
              </a>
              <a
                href={`https://${personal.leetcode}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2"
              >
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                LeetCode
              </a>
            </div>
          </ContactCard>
          
          <ContactCard 
            title="Location"
            description={personal.location}
            delay={200}
          >
            <p className="text-gray-600 text-sm">{personal.phone}</p>
            <p className="text-gray-600 text-sm">{personal.email}</p>
          </ContactCard>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} {personal.name}. Crafted with React & Tailwind CSS.
          </p>
          <p className="text-gray-400 text-xs text-center mt-2">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactCard({ title, description, children, action, delay }) {
  return (
    <div
      className="group p-6 rounded-lg border border-gray-200 transition-all duration-500 hover:shadow-lg hover:border-gray-900 hover:bg-gray-50 animate-fade-in-up"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      {children}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
