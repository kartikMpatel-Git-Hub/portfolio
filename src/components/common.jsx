// Reusable Button Component
export function Button({ children, variant = "primary", href, onClick, className = "" }) {
  const baseStyles = "px-6 py-3 rounded font-medium transition-all duration-300 inline-block";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:scale-105",
    secondary: "border border-gray-300 text-gray-900 hover:border-gray-900 hover:shadow-md hover:scale-105",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

// Reusable Card Component
export function Card({ children, className = "", delay = 0 }) {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-lg p-6 transition-all duration-500 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1 animate-fade-in-up ${className}`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Reusable Section Component
export function Section({ children, id, title, className = "" }) {
  return (
    <section 
      id={id}
      className={`max-w-5xl mx-auto px-6 py-16 border-t border-gray-200 animate-fade-in ${className}`}
    >
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-12 pb-4 border-b-2 border-gray-900 inline-block">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

// Reusable Badge/Tag Component
export function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-100 text-gray-700 border border-gray-200 hover:shadow-md hover:scale-110",
    primary: "bg-gray-900 text-white hover:shadow-md hover:scale-110",
    secondary: "bg-gray-50 text-gray-700 border border-gray-300 hover:shadow-md hover:scale-110"
  };

  return (
    <span className={`text-xs font-medium px-3 py-1 rounded transition-all duration-300 inline-block ${variants[variant]}`}>
      {children}
    </span>
  );
}

// Reusable Heading Component
export function Heading({ level = 2, children, className = "" }) {
  const HeadingTag = `h${level}`;
  const sizes = {
    2: "text-3xl",
    3: "text-2xl",
    4: "text-lg",
    5: "text-base",
  };

  return (
    <HeadingTag className={`font-bold text-gray-900 ${sizes[level]} ${className}`}>
      {children}
    </HeadingTag>
  );
}

// Reusable Text Component
export function Text({ children, variant = "default", className = "" }) {
  const variants = {
    default: "text-gray-700",
    muted: "text-gray-600",
    light: "text-gray-500",
    emphasis: "text-gray-900 font-semibold"
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}
