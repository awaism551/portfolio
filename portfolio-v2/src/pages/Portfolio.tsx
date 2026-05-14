import { content } from '../data/content';
import { FiExternalLink } from 'react-icons/fi';
import './Portfolio.css';

const Portfolio = () => {
  const { portfolioData } = content;

  return (
    <div className="page-container portfolio-container">
      <h2 className="section-title text-gradient">{portfolioData.portfolioTitle}</h2>
      
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              <h3 className="project-title">{project.name}</h3>
              {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link" title="View Project">
                  <FiExternalLink />
                </a>
              )}
            </div>
            
            <p className="project-summary">{project.summary}</p>
            
            <div className="project-features">
              {project.keyFeatures.map((feature, fIndex) => (
                <span key={fIndex} className="feature-tag">{feature}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
