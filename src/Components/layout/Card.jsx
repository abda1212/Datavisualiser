import React from 'react';
import { MoreVertical } from 'lucide-react';

const Card = ({ title, description, children, className = '' }) => {
  return (
    <div className={`bg-card rounded-lg border border-border shadow-sm ${className}`}>
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <button className="p-2 rounded-lg hover:bg-accent transition-colors">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card; 