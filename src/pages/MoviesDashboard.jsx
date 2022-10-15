import { useCallback, useEffect, useState } from "react";
import { MovieCard } from "../components/movieCard/MovieCard";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MoviesDashboard = () => {

    const [movies, setMovies] = useState([]);



    //Call api
    const getMovies = useCallback(async () => {
        const moviesResp = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c289a42451156d66de80eb725e98919b&language=en-US");
        const moviesObj = await moviesResp.json();
        //console.log(moviesObj);
        setMovies(moviesObj.results);
    }, []);

    useEffect(() => {
        getMovies();
    }, []);

    if (movies.length <= 0) { return <p>Cargando!!</p> };

    return (
        <>
            <h1>Top Movies!</h1>
            <div className="list-movies">
                <Row xs={1} md={4} className="g-4">
                    {movies.map((movie) => (
                        <Col key={movie.id}>
                            <MovieCard moviePrincipalDetails={movie} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export { MoviesDashboard };