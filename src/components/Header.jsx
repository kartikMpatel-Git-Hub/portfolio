import { Button } from "./common";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm animate-slide-in-down">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-gray-900 text-lg tracking-tight hover:text-gray-600 transition-colors duration-300">
          Kartik Patel
        </div>
        <div className="flex gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Hero({ personal, about }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 animate-fade-in">
      <div className="mb-6 inline-block">
        <div className="text-sm font-semibold text-gray-600 mb-2">Welcome to my portfolio</div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
          {personal.name}
        </h1>
      </div>
      
      <p className="text-2xl text-gray-600 mb-6 font-light">{personal.title}</p>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed opacity-90 animate-fade-in-up">
        {about}
      </p>
      
      <div className="flex gap-6 flex-wrap">
        <Button 
          variant="primary" 
          href={`mailto:${personal.email}`}
        >
          Get in Touch →
        </Button>
        <Button 
          variant="secondary" 
          href={`https://${personal.linkedin}`}
        >
          View on LinkedIn
        </Button>
      </div>
    </section>
  );
}
