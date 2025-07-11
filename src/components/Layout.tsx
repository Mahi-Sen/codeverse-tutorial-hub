import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Check if we should show sidebar (not on home page)
  const shouldShowSidebar = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header - only show when sidebar should be visible */}
      {shouldShowSidebar && (
        <header className="lg:hidden sticky top-0 z-30 bg-background border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">C</span>
              </div>
              <span className="font-semibold">CodeVerse</span>
            </div>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </header>
      )}

      <div className="flex h-screen lg:h-auto">
        {/* Sidebar - only render when it should be shown */}
        {shouldShowSidebar && (
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        )}

        {/* Main content */}
        <main className={`flex-1 overflow-auto ${shouldShowSidebar ? 'lg:ml-0' : ''}`}>
          <div className={`max-w-4xl mx-auto ${shouldShowSidebar ? '' : 'w-full max-w-none'}`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;