import { MapPin, Briefcase, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      label: "Location",
      value: portfolioData.personal.location
    },
    {
      icon: Briefcase,
      label: "Current Role",
      value: portfolioData.personal.currentRole
    },
    {
      icon: Heart,
      label: "Interests",
      value: "Clean Code, UI/UX, Open Source"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.personal.bio}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the 
                developer community. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
            </div>

            <Button 
              className="btn-accent font-medium"
              size="lg"
              onClick={() => window.open(portfolioData.personal.resumeUrl, '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Highlights */}
          <div className="space-y-6 fade-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="portfolio-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {highlight.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.value}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;