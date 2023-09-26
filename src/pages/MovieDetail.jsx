import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import Review from '../components/Review'
import { useParams } from 'react-router-dom'
import api from '../api'

const MovieDetail = () => {
    const { id } = useParams()
    const [movieInfo, setMovieInfo] = useState(null)

    const getMovieDetail = async () => {
        let res = await api.get(`/movie/${id}?language=ko-KR`)
        console.log('[MovieDetails.js]: ', res.data)
        // setMovieInfo(res.data)
    }

    useEffect(() => {
        getMovieDetail()
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
                            <Badge key={id} bg="danger">{item.name}</Badge>
                        ))}
                        </div>
                        <h1>블루 비틀</h1>
                        <h4>Jaime Reyes는 원하든 원하지 않든 슈퍼 히어로입니다.</h4>
                        <div style={{ borderBottom: '2px solid white' }}>
                            <span>{movieInfo.release_date}</span>
                            <span>{movieInfo.runtime}</span>
                            <span>평점:{movieInfo.vote_average}</span>
                            <span>{movieInfo.adult ? '청불' : '청소년'}</span>
                        </div>
                        <div className="overview" style={{ borderBottom: '2px solid white' }}>
                            최근 대학을 졸업한 제이미 레예스(Jaime Reyes)는 자신의 미래에 대한 열망을 가득 안고 집으로
                            돌아왔지만, 집이 예전과 같지 않다는 사실을 알게 되었습니다. 그가 세상에서 자신의 목적을
                            찾으려고 노력하는 동안 Jaime이 예기치 않게 외계 생명공학의 고대 유물인 풍뎅이를 소유하게
                            되자 운명이 개입하게 됩니다.
                        </div>
                        {/* <div style={{ borderBottom: '2px solid white' }}>
                        <span>예고편 보기</span>
                    </div> */}
                    </div>
                </div>
                <Review id={id} />
            </div>
        )
    } else {
        return ''
    }
}

export default MovieDetail
