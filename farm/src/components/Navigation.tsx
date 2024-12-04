import React from 'react';
import { Globe, Menu, X } from 'lucide-react';

const languages = ['English', 'Hindi', 'Spanish', 'Mandarin'];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('English');

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">FarmConnect</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md">Market</a>
              <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md">Dashboard</a>
              <a href="#" className="hover:bg-green-600 px-3 py-2 rounded-md">Analytics</a>
              <div className="relative">
                <button className="flex items-center hover:bg-green-600 px-3 py-2 rounded-md">
                  <Globe className="w-4 h-4 mr-2" />
                  {language}
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}