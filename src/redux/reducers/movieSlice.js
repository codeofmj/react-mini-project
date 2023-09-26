import { createSlice } from '@reduxjs/toolkit'

const moviceSlice = createSlice({
    name: 'movie',
    initialState: {
        popularMovies: [],
        topRatedMovies: [],
        upcomingMovies: [],
        loading: true,
        genreList: []
    },
    reducers: {
        initData: (state, action) => {
            let { type, payload } = action
            console.log('[movieSlice.js]', payload)
            return {
                ...state,
                popularMovies: payload.popular.data,
                topRatedMovies: payload.topRated.data,
                upcomingMovies: payload.upcoming.data,
                genreList: payload.genre.data.genres,
                loading:false
            }
        },
        requestState: (state, action) => {
            return { ...state, loading: action.payload }
        }
    }
})

export const MovieReducerActions = moviceSlice.actions

export default moviceSlice.reducer
