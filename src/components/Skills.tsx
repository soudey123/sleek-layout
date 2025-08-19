import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData, skillCategories } from "@/data/portfolio";

const Skills = () => {
  const getSkillsByCategory = (category: string) => {
    return portfolioData.skills.filter(skill => skill.category === category);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-accent text-accent-foreground";
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with,
            from frontend frameworks to cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const skills = getSkillsByCategory(category);
            
            return (
              <Card key={category} className="portfolio-card border-0 fade-in">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className={`skill-badge ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Skills as Badges */}
        <div className="mt-16 fade-in">
          <h3 className="text-xl font-semibold mb-6 text-center">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioData.skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className="skill-badge text-sm py-2 px-4"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;