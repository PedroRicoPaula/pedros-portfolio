
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const showButton = window.scrollY >= aboutSection.offsetTop;
        setShowScrollTop(showButton);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Pedro Paula</h1>
            
            <div className="flex items-center gap-4">
              {/* Desktop menu */}
              <div className="hidden lg:flex gap-8">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('work')} 
                  className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:left-0 after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  Contact
                </button>
              </div>

              <ThemeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('work')} 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        {children}
      </main>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Layout;
