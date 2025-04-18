
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Pedro Paula</h1>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>

            {/* Desktop menu */}
            <div className="hidden lg:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-foreground/80 hover:text-foreground">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4">
              <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-foreground">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-foreground">
                Services
              </button>
              <button onClick={() => scrollToSection('work')} className="text-foreground/80 hover:text-foreground">
                Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-foreground">
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
