import axios from './Axios';
import React, { useEffect, useState } from 'react';
import "./Row.css";



function Row({ title, fetchUrl, isLargeRow = false }) {

    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
        }

        fetchData()
    }, [fetchUrl])

    // console.log(movies)

    function nextHandeler(e) {
        document.querySelector(`div[target-sec = "${e.target.id}"]`).scrollBy({
            top: 0,
            left: +100,
            behavior: 'smooth'
        });
    }

    function backHandeler(e) {
        document.querySelector(`div[target-sec = "${e.target.id}"]`).scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'
        });
    }

    //########### return Jsx Code
    return (
        <div className='row'>
            <h2> {title}</h2>
            <div className='row__posters' target-sec={title}>
                <button onClick={(e) => backHandeler(e)} id={title} style={{ position: "absolute", zIndex: "2" }}>Back</button>
                <button onClick={(e) => nextHandeler(e)} id={title} style={{ position: "absolute", zIndex: "2", right: "20px" }}>Next</button>


                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
                        (
                            <>
                                <img
                                    key={movie.id}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    //  src={`${base_url}${isLargeRow && movie.poster_path || !isLargeRow && !movie.backdrop_path ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.name}
                                />
                                {/* <h2> {movie?.original_title || movie?.name || movie?.title}</h2> */}
                            </>
                        ))}
            </div>
        </div >
    )
}

export default Row