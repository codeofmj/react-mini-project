import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MovieCard = ({ item }) => {
    // console.log('[MovieCard.jsx]: ', item)

    const { genreList } = useSelector((state) => state.movie)
    // console.log('[MovieCard.jsx]: ', genreList)

    const div_styled = {
        backgroundImage: `url('https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}')`
    }

    return (
        <div className="movie-card" style={div_styled}>
            <Link to={`/movies/${item.id}`}>
                <div className="overlay">
                    <h1>{item.title}</h1>
                    <div className="genre">
                        {item.genre_ids.map((id) => (
                            <Badge key={id} bg="danger">
                                {genreList.find((item) => item.id === id).name}
                            </Badge>
                        ))}
                    </div>
                    <div className="info">
                        <span>{`평점: ${item.vote_average}점`}</span>
                        <span>|</span>
                        <span>{item.adult ? '청불' : '청소년'}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
