
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Brush, Database } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with animation */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="container px-4 text-center z-10">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Pedro Paula
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer
            </p>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group">
              Get in touch
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Developer with experience in building modern web applications.
              My journey in software development started with a deep curiosity for technology and has
              evolved into a professional career where I create efficient, scalable, and user-friendly
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <Code className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and interactive user interfaces using modern frameworks and tools.
              </p>
            </Card>
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <Database className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-muted-foreground">
                Building robust server-side applications and APIs to power your web applications.
              </p>
            </Card>
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <Brush className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Database Design</h3>
              <p className="text-muted-foreground">
                Designing and implementing efficient database structures for optimal data management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-muted-foreground mb-6">
                Description of your first major project or work experience.
              </p>
              <Button variant="outline" size="sm" className="group">
                View Project
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-muted-foreground mb-6">
                Description of your second major project or work experience.
              </p>
              <Button variant="outline" size="sm" className="group">
                View Project
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Get in Touch</h2>
          <div className="flex flex-col items-center gap-8">
            <a
              href="https://www.linkedin.com/in/pedro-paula-568100272/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Mail className="w-6 h-6" />
              Email Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Github className="w-6 h-6" />
              GitHub
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
