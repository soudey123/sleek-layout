import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio";

const Projects = () => {
  const featuredProjects = portfolioData.projects.filter(project => project.featured);
  const otherProjects = portfolioData.projects.filter(project => !project.featured);

  const ProjectCard = ({ project, featured = false }: { project: any; featured?: boolean }) => (
    <Card className={`portfolio-card border-0 h-full group ${featured ? 'lg:col-span-2' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="h-48 bg-gradient-secondary flex items-center justify-center">
            <div className="text-6xl text-muted-foreground/20">
              {project.title.charAt(0)}
            </div>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-accent text-accent-foreground">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <Badge key={tech} variant="outline" className="skill-badge text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="btn-secondary"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.codeUrl, '_blank')}
            className="btn-secondary"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications,
            modern web technologies, and innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="fade-in">
              <ProjectCard project={project} featured={true} />
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <div key={project.id} className="fade-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 fade-in">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(portfolioData.social.github, '_blank')}
            className="btn-secondary"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
