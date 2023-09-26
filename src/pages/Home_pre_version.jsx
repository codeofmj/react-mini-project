import React, { useEffect, useState } from 'react'
import api from '../api'

const Home = () => {
    const [populars, setPopulars] = useState([])

    const getPopulars = async () => {
        let res = api.get('/popular?language=ko-KR&page=1')
        console.log('[popular]')
        console.log(res.data)
    }

    const getTopRated = async () => {
        let res = api.get('/top_rated?language=ko-KR&page=1')
        console.log('[top rated]')
        console.log(res.data)
    }

    const getUpcoming = async () => {
        let res = api.get('/upcoming?language=ko-KR&page=1')
        console.log('[upcoming]')
        console.log(res.data)
    }

    useEffect(() => {
        getPopulars()
        getTopRated()
        getUpcoming()
    }, [])

    return <div>Home</div>
}

export default Home
