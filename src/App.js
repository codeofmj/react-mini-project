import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import Navigationbar from './components/Navigationbar'

function App() {
    return (
        <div>
            <Navigationbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<MovieDetail />}></Route>
            </Routes>
        </div>
    )
}

export default App
