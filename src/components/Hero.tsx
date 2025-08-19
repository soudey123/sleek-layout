import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {portfolioData.personal.tagline}
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-hero px-8 py-3 text-lg font-medium"
                size="lg"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="btn-secondary px-8 py-3 text-lg font-medium"
                size="lg"
              >
                Contact Me
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <img
                  src={profileImage}
                  alt={`${portfolioData.personal.name} - Profile`}
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;