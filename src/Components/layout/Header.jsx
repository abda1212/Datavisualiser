import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search data..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-accent transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors">
          <User className="w-5 h-5" />
          <span className="text-sm font-medium">User</span>
        </button>
      </div>
    </header>
  );
};

export default Header; 