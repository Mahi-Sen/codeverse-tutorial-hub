import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Code, BookOpen, Search, X } from 'lucide-react';
import { categories, getTutorialsByCategory, getTutorialsBySubcategory } from '../data/tutorials';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>(['basics']);

  // Get current category from URL
  const getCurrentCategory = () => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'tutorials' && pathParts[2]) {
      return pathParts[2]; // e.g., 'html' from '/tutorials/html/introduction'
    }
    return null;
  };

  const currentCategory = getCurrentCategory();
  
  // Filter categories to show only the current one
  const visibleCategories = currentCategory 
    ? categories.filter(cat => cat.id === currentCategory)
    : categories;

  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories(prev =>
      prev.includes(subcategoryId)
        ? prev.filter(id => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] 
          transition-transform duration-300 ease-in-out z-50 w-80
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--sidebar-border))]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-[hsl(var(--primary-foreground))]" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[hsl(var(--sidebar-foreground))]">CodeVerse</h1>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">Developer Tutorials</p>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-[hsl(var(--sidebar-accent))] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="p-4 border-b border-[hsl(var(--sidebar-border))]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[hsl(var(--muted-foreground))]" />
            <input
              type="text"
              placeholder="Search tutorials..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-[hsl(var(--sidebar-accent))] border border-[hsl(var(--sidebar-border))] rounded-lg focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {/* Home link */}
            <Link
              to="/"
              className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={onToggle}
            >
              <BookOpen className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* All Tutorials link */}
            <Link
              to="/tutorials"
              className={`nav-link ${isActiveLink('/tutorials') ? 'active' : ''}`}
              onClick={onToggle}
            >
              <Code className="w-4 h-4" />
              <span>All Tutorials</span>
            </Link>

            {/* Categories - only show current category or all if on tutorials page */}
            {visibleCategories.map(category => {
              const categoryTutorials = getTutorialsByCategory(category.id);

              return (
                <div key={category.id} className="space-y-1">
                  {/* Category header */}
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[hsl(var(--primary))] bg-opacity-10">
                    <div className="w-6 h-6 bg-[hsl(var(--primary))] rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-[hsl(var(--primary-foreground))]">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-[hsl(var(--sidebar-foreground))]">
                      {category.title} Tutorials
                    </span>
                  </div>

                  {/* Category content */}
                  <div className="ml-2 space-y-1">
                    {category.subcategories ? (
                      // If has subcategories, show them
                      category.subcategories.map(subcategory => {
                        const isSubExpanded = expandedSubcategories.includes(subcategory.id);
                        const subcategoryTutorials = getTutorialsBySubcategory(category.id, subcategory.id);

                        return (
                          <div key={subcategory.id} className="space-y-1">
                            {/* Subcategory header */}
                            <button
                              onClick={() => toggleSubcategory(subcategory.id)}
                              className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-[hsl(var(--sidebar-accent))] transition-colors text-left text-sm"
                            >
                              <span className="text-[hsl(var(--sidebar-foreground))] font-medium">
                                {subcategory.title}
                              </span>
                              {isSubExpanded ? (
                                <ChevronDown className="w-3 h-3 text-[hsl(var(--muted-foreground))]" />
                              ) : (
                                <ChevronRight className="w-3 h-3 text-[hsl(var(--muted-foreground))]" />
                              )}
                            </button>

                            {/* Subcategory tutorials */}
                            {isSubExpanded && (
                              <div className="ml-4 space-y-1">
                                {subcategoryTutorials.map(tutorial => (
                                  <Link
                                    key={tutorial.id}
                                    to={tutorial.slug}
                                    className={`block p-2 rounded-lg text-sm transition-colors ${
                                      isActiveLink(tutorial.slug)
                                        ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                                        : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-foreground))]'
                                    }`}
                                    onClick={onToggle}
                                  >
                                    {tutorial.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })
                    ) : (
                      // If no subcategories, show tutorials directly
                      categoryTutorials.map(tutorial => (
                        <Link
                          key={tutorial.id}
                          to={tutorial.slug}
                          className={`block p-2 rounded-lg text-sm transition-colors ${
                            isActiveLink(tutorial.slug)
                              ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
                              : 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-foreground))]'
                          }`}
                          onClick={onToggle}
                        >
                          {tutorial.title}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[hsl(var(--sidebar-border))]">
          <div className="text-xs text-[hsl(var(--muted-foreground))] text-center">
            <p>Built with ❤️ for developers</p>
            <p className="mt-1">© 2024 CodeVerse</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;