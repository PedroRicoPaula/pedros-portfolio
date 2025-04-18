
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Pedro Paula
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer
          </p>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
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
      <section id="services" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and interactive user interfaces using modern frameworks and tools.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-muted-foreground">
                Building robust server-side applications and APIs to power your web applications.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Database Design</h3>
              <p className="text-muted-foreground">
                Designing and implementing efficient database structures for optimal data management.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-secondary/50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-muted-foreground mb-4">
                Description of your first major project or work experience.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
            </Card>
            <Card className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-muted-foreground mb-4">
                Description of your second major project or work experience.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://www.linkedin.com/in/pedro-paula-568100272/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
