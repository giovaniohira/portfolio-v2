import Card from '../Card';
import './Content.css';
import data from '../../data.json';

const Content = () => {
    return (
        <div className='content'>
        <section id="about">
                <h2>ABOUT</h2>
                <span className='about-desc'>
                <p className='desc-p'>👋 Hi, I'm Giovani! A passionate back-end developer seeking my first professional opportunity. I specialize in building <b>RESTful APIs with Node.js/Express</b> and creating interactive front-end experiences with <b>React</b>.</p>
                <p className='desc-p'>Excited to begin my tech journey! Check out my projects and connect with me on GitHub!</p>
                </span>
            </section>
            <section id="experience">
                <h2>EXPERIENCE</h2>
                {data.experiences.map((experiences, index) => (
                    <Card
                        key={index}
                        role={experiences.role}
                        title={experiences.title}
                        description={experiences.description}
                        link={experiences.link}
                        technologies={experiences.technologies}
                        date={experiences.date}
                    />
                ))}
                <a href="Resume-EN.pdf" target="_blank" rel="noopener noreferrer">
                    <span className='resume'>View full resume</span>
                </a>
            </section>
            <section id="projects">
                <h2>PROJECTS</h2>       
                {data.projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        technologies={project.technologies}
                        image={project.image}
                    />
                ))}
        </section>
        </div>
    )
};

export default Content;