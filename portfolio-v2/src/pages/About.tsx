import { content } from '../data/content';
import './About.css';

const About = () => {
  const { aboutData } = content;

  return (
    <div className="page-container about-container">
      <h2 className="section-title text-gradient">{aboutData.aboutTitle}</h2>
      
      <div className="about-content glass-card">
        <ul className="about-list">
          {aboutData.aboutItems.map((item, index) => (
            <li key={index}>
              <span className="list-icon">▹</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="section-title text-gradient mt-16">{aboutData.skillsTitle}</h2>
      
      <div className="skills-grid">
        {aboutData.skills.map((skillGroup, index) => (
          <div key={index} className="skill-card glass-card">
            <h3 className="skill-category text-gradient">{skillGroup.category}</h3>
            <div className="skill-tags">
              {skillGroup.items.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
