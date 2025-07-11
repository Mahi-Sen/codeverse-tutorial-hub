import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tutorial } from '../data/tutorials';

interface TutorialNavigationProps {
  currentTutorial: Tutorial;
  previousTutorial?: Tutorial;
  nextTutorial?: Tutorial;
}

const TutorialNavigation: React.FC<TutorialNavigationProps> = ({
  currentTutorial,
  previousTutorial,
  nextTutorial,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-12 pt-8 border-t border-border">
      {/* Previous tutorial */}
      <div className="w-full sm:w-auto">
        {previousTutorial ? (
          <Link
            to={previousTutorial.slug}
            className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground mb-1">Previous</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {previousTutorial.title}
              </div>
            </div>
          </Link>
        ) : (
          <div className="p-4">
            <div className="text-xs text-muted-foreground">No previous tutorial</div>
          </div>
        )}
      </div>

      {/* Next tutorial */}
      <div className="w-full sm:w-auto">
        {nextTutorial ? (
          <Link
            to={nextTutorial.slug}
            className="group flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <div className="text-right flex-1">
              <div className="text-xs text-muted-foreground mb-1">Next</div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                {nextTutorial.title}
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        ) : (
          <div className="p-4 text-right">
            <div className="text-xs text-muted-foreground">No next tutorial</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialNavigation;