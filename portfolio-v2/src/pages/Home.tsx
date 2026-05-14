import { Link } from 'react-router-dom';
import { content } from '../data/content';
import './Home.css';

const Home = () => {
  const { heroData } = content;

  return (
    <div className="page-container home-container">
      <div className="hero-content">
        <h2 className="greeting">
          <span className="text-gradient">{heroData.greetings}</span>
          {heroData.introduction}
        </h2>
        <h1 className="role text-gradient">{heroData.role}</h1>
        <p className="paragraph">{heroData.paragraph}</p>
        
        <div className="action-buttons">
          <Link to="/portfolio" className="btn-primary">{heroData.button1}</Link>
          <a href="/resume/Awais-Senior Software Engineer-Qatar.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
