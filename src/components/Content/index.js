import Card from '../Card';
import './Content.css';

const Content = () => {
    return (
        <div className='content'>
        <section id="about">
                <h2>About</h2>
                👋 Hi, I'm Giovani! A passionate back-end developer seeking my first professional opportunity. I specialize in building RESTful APIs with Node.js/Express and creating interactive front-end experiences with React.
                I'm eager to expand my knowledge in software architecture, best practices, and cutting-edge technologies. I enjoy solving complex problems, from optimizing algorithms to designing databases and enhancing UI.
                Outside of coding, I love video games, painting, and watching series. Excited to begin my tech journey! Check out my projects and connect with me on GitHub!
            </section>
            <section id="experience">
                <h2>Experiences</h2>
                <Card usedTecnologies={["test ", "test2"]}/>
            </section>
            <section id="projects">
                <h2>Projects</h2>       
                <Card usedTecnologies={["test ", "test2"]}/>
        </section>
        </div>
    )
};

export default Content;