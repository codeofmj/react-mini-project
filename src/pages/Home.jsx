import React, { useEffect, useState } from 'react'
import api from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { MovieReducerActions } from '../redux/reducers/movieSlice'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {
    const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector((state) => state.movie)
    // console.log('[Home.jsx]: ', genreList)

    const dispatch = useDispatch()

    const getMovieList = async () => {
        try {
            const popularApi = api.get('/movie/popular?language=ko-KR&page=1')
            const topRatedApi = api.get('/movie/top_rated?language=ko-KR&page=1')
            const upComingApi = api.get('/movie/upcoming?language=ko-KR&page=1')
            const genreApi = api.get('/genre/movie/list?language=ko')

            let [popular, topRated, upcoming, genreList] = await Promise.all([
                popularApi,
                topRatedApi,
                upComingApi,
                genreApi
            ])

            dispatch(MovieReducerActions.requestState(false))
            dispatch(MovieReducerActions.initData({ popular: popular, topRated: topRated, upcoming: upcoming, genre:genreList }))
        } catch {
            dispatch(MovieReducerActions.requestState(true))
        }
    }

    useEffect(() => {
        //모든 요청을 한 번에 처리한 후, 모든 응답이 올 때까지 기다리는 함수
        // Promise.all([getPopulars, getTopRated, getUpcoming]);
        getMovieList()
    }, [])

    //loading이 true이면 loading 스피너를 출력
    //loading이 false이면 데이터 출력

    //true: 데이터 도착 전
    //false: 데이터 도착 후, or 에러가 났을 때
    if (loading) {
        return (
            <ClipLoader color="#ffff" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader" />
        )
    } else {
        return (
            <div>
                {/* {popularMovies.results && <Banner movie={popularMovies.results[0]} />} */}
                <Banner movie={popularMovies.results[0]} />

                <h1>Popular Movie</h1>
                <MovieSlide movies={popularMovies} />
                <h1>Top rated Movie</h1>
                <MovieSlide movies={topRatedMovies} />
                <h1>Upcoming Movie</h1>
                <MovieSlide movies={upcomingMovies} />
            </div>
        )
    }
}

export default Home
