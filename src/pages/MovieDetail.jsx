import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import api from '../api'

const MovieDetail = () => {
    const { id } = useParams()
    const [movieInfo, setMovieInfo] = useState(null)

    const getMovieDetail = async () => {
        let res = await api.get(`/movie/${id}?language=ko-KR`)
        // console.log('[MovieDetails.js]: ', res.data)
        setMovieInfo(res.data)
    }

    const [review, setReview] = useState([])

    const reivewList = async () => {
        let res = await api.get(`/movie/${id}/reviews?language=en-US&page=1`)

        // console.log(res.data.results)

        setReview(res.data.results)
    }

    useEffect(() => {
        getMovieDetail()
        reivewList()
    }, [])

    if (movieInfo) {
        return (
            <div>
                <div className="container movie-details">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`} alt="이미지" />
                    </div>
                    <div className="info">
                        <div className="genre">
                            {movieInfo.genres.map((item) => (
                                <Badge key={item.id} bg="danger">
                                    {item.name}
                                </Badge>
                            ))}
                        </div>
                        <h1>{movieInfo.title}</h1>
                        <h4>{movieInfo.tagline}</h4>
                        <div style={{ borderBottom: '2px solid white' }}>
                            <span>{movieInfo.release_date}</span>
                            <span>{movieInfo.runtime}</span>
                            <span>평점:{movieInfo.vote_average}</span>
                            <span>{movieInfo.adult ? '청불' : '청소년'}</span>
                        </div>
                        <div className="overview" style={{ borderBottom: '2px solid white' }}>
                            {movieInfo.overview}
                        </div>
                        {/* <div style={{ borderBottom: '2px solid white' }}>
                        <span>예고편 보기</span>
                    </div> */}
                    </div>
                </div>
                {/* <Review id={id} /> */}
                <div className="container review-box">
                    {review &&
                        review.map((item) => (
                            <div key={item.id} className="review-item">
                                <h4>{item.author}</h4>
                                <p>${item.content}</p>
                            </div>
                        ))}
                </div>
            </div>
        )
    } else {
        return ''
    }
}

export default MovieDetail
