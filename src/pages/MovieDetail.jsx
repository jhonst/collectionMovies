import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import "./MovileDetail.css";

const MovieDetail = () => {

    let params = useParams();
    const [details, setDetails] = useState({});

    const getMoviesDetail = async () => {
        const respDetails = await fetch("https://api.themoviedb.org/3/movie/" + params.idMovie + "?api_key=c289a42451156d66de80eb725e98919b&language=en-US");
        const objDetails = await respDetails.json();
        console.log(objDetails);
        setDetails(objDetails);
    }

    useEffect(() => {
        getMoviesDetail();
    }, []);

    return (
        <div className="container-detail-vew">
            <h1>{details.title}</h1>
            <img className="img-detail-view" src={"https://image.tmdb.org/t/p/original" + details.backdrop_path} alt="imgNF" />
            <br />
            <p>{details.overview}</p>



            <Table striped bordered hover variant="dark">
                
                <tbody>
                    <tr>
                        <td>Release date:</td>
                        <td>{details.release_date}</td>
                    </tr>
                    <tr>
                        <td>Runtime:</td>
                        <td>{details.runtime} Minutes</td>
                    </tr>
                    <tr>
                    <td>Original title:</td>
                        <td>{details.original_title}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export { MovieDetail }