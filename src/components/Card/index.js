import './Card.css';
import { RxExternalLink } from "react-icons/rx";
import { IconContext } from "react-icons";

const Card = ({ date, title, description, link, technologies, role, image }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='card'>
                <div className='card-left-details'>
                    {date && <span className='date'>{date}</span>}
                    {image && <img src={image} alt={title} className='card-image' />}
                </div>
                <div className='card-full-details'>
                    <div className='card-title'>
                        {title && <h3>{title}</h3>}
                        {role && <h3 className='role'>{role}</h3>}
                        {link &&                     
                        <IconContext.Provider value={{ size: '0.8em', color: '#cfcfcf' }}>
                            <RxExternalLink />
                        </IconContext.Provider>}
                    </div>
                    <span className='desc'>{description}</span>
                    <div className='technologies'>
                        {technologies.map((technology, index) => (
                            <span className='technology-badge' key={index}>{technology}</span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
