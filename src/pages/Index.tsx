import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Brush, Database } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with animation */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="container px-4 text-center z-10">
          <div className="animate-fade-in space-y-6">
            <div className="flex justify-center mb-8">
              <Avatar className="w-48 h-48 md:w-64 md:h-64 border-6 border-primary/20">
                <AvatarImage 
                  src="/lovable-uploads/3469ef6f-4018-4235-a06b-b391af3be149.png" 
                  alt="Pedro Paula" 
                  className="object-cover scale-110"
                />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-black to-gray-300 bg-clip-text text-transparent">
              Pedro Paula
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Web Developer
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
            Hello 👋 I'm Pedro Paula, a Web Development student at the University of the Azores, currently doing an internship at Ahau Software.
            I have hands-on experience with technologies such as HTML5, CSS/SASS, JavaScript, PHP, C#, ASP.NET, .NET, and SQL. 
            I often use Bootstrap to streamline my frontend development, and I follow the Scrum methodology in my workflow.
            I'm passionate about expanding my knowledge in areas like Node.js, C#, computer science, and team leadership.
            Outside of tech, I'm an active roller hockey player and a base coach, bringing the same energy and teamwork from the rink into every project I work on.
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
              <h3 className="text-xl font-semibold mb-4">Sistema Booking</h3>
              <p className="text-muted-foreground mb-6">
                Booking System working on the console
              </p>
              <a href="https://github.com/PedroRicoPaula/Project_Booking" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="group">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </Card>
            <Card className="glass-card p-8 group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">Rent a Car</h3>
              <p className="text-muted-foreground mb-6">
                School Project
              </p>
              <a href="https://github.com/PedroRicoPaula/Rent-a-Car" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="group">
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
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
              href="mailto:work@pedropaula.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Mail className="w-6 h-6" />
              Email Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/PedroRicoPaula"
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
