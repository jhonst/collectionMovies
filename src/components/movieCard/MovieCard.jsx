import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Routes, Route, Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ moviePrincipalDetails } ) => {

    const details = moviePrincipalDetails;
// style={{ width: '18rem' }}

    return(
    <Card>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + details.poster_path} />
      <Card.Body>
        <Card.Title>{details.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{details.original_title}</Card.Subtitle>
        <Card.Text className='text-cards'>{details.overview}</Card.Text>
        <Link to={"/detail/"+details.id}><Button variant="primary">Details!</Button></Link>
      </Card.Body>
    </Card>


    );    
}

export { MovieCard }