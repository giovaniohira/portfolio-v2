import './Card.css';

const Card = ({ title, description, link, usedTecnologies }) => {
    return (
        <div className='card'>
            <h3>Event management API</h3>
            <p>RESTful API built with Express and PostgreSQL for managing users, events, and subscriptions, featuring JWT authentication, role-based access, CRUD with pagination, database setup, and Swagger documentation.</p>
            <a href={link}>View</a>
            {usedTecnologies.map((technology, index) => (
                <span key={index}>{technology}</span>
            ))}
        </div>
    );
};

export default Card;