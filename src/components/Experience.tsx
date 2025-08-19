import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at each role,
            from startup environments to established tech companies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {portfolioData.experience.map((job, index) => (
              <div key={job.id} className="timeline-item fade-in">
                <Card className="portfolio-card border-0 ml-4">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{job.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">
                        {job.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {job.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-muted-foreground">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;