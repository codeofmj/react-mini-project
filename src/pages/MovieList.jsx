import React from 'react'
import { useParams } from 'react-router-dom'

const MovieList = () => {
  const {keyword} = useParams()

  console.log(keyword);

  return (
    <div>
        <h1 style={{color:'white'}}>{keyword}</h1>
    </div>
  )
}

export default MovieList