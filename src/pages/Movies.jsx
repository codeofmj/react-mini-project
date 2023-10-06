import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Accordion, Card, Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//제목:title
//인기도:popularity
//평점:vote_average

/*
 자바스크립트 sort 원리
 - 기본적으로 유니코드를 기반으로 판단하기 때문에 예상과 다른 결과가 나올 수 있음
 - 그래서 compareFunction을 활용해 정렬
  
   배열명.sort(function(a,b){
      return a-b; //오름차순
   });

  반환 값 < 0 : a가 b보다 앞에 있어야 한다.
  반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
  반환 값 > 0 : b가 a보다 앞에 있어야 한다.
                
*/
const Movies = () => {
    const { popularMovies } = useSelector((state) => state.movie)
    const [filter, setFilter] = useState([])

    const movieFilter = (keyword, sortMethod) => {
        let result = [...filter]

        if (keyword === '제목') {
            //a가 b보다 뒤에 있으면 -1
            //a가 b보다 앞에 있으면 1
            //a와 b가 동일하다면 0
            result =
                sortMethod === 'asc'
                    ? result.sort((a, b) => a.title.localeCompare(b.title))
                    : result.sort((a, b) => b.title.localeCompare(a.title))
        } else if (keyword === '평점') {
            result =
                sortMethod === 'asc'
                    ? result.sort((a, b) => a.vote_average - b.vote_average)
                    : result.sort((a, b) => b.vote_average - a.vote_average)
        } else if (keyword === '인기도') {
            result =
                sortMethod === 'asc'
                    ? result.sort((a, b) => a.popularity - b.popularity)
                    : result.sort((a, b) => b.popularity - a.popularity)
        }

        console.log(result)
        setFilter(result)
    }

    useEffect(() => {
        if (popularMovies.length !== 0) {
            setFilter(popularMovies.results)
        } else {
            setFilter([])
        }
    }, [])

    return (
        <div>
            <Container className="movies-area">
                <Row>
                    <Col>
                        <h1>인기 영화 필터링</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>정렬</Accordion.Header>
                                <Accordion.Body>
                                    <Dropdown data-bs-theme="dark">
                                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                                            정렬방식을 선택하세요.
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                href="#/action-1"
                                                active
                                                onClick={() => movieFilter('제목', 'asc')}
                                            >
                                                제목 오름차순
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-2"
                                                onClick={() => movieFilter('제목', 'desc')}
                                            >
                                                제목 내림차순
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-3" onClick={() => movieFilter('평점', 'asc')}>
                                                평점 오름차순
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-4"
                                                onClick={() => movieFilter('평점', 'desc')}
                                            >
                                                평점 내림차순
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-5"
                                                onClick={() => movieFilter('인기도', 'asc')}
                                            >
                                                인기도 오름차순
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="#/action-6"
                                                onClick={() => movieFilter('인기도', 'desc')}
                                            >
                                                인기도 내림차순
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={9} className="movie-list">
                        {filter.map((item) => (
                            <Link to={`/movies/${item.id}`} key={item.id}> 
                                <Card style={{ width: '11rem', margin: '5px', height:'23rem' }}>
                                    <Card.Img
                                        variant="top"
                                        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                                    />
                                    <Card.Body style={{display:'flex', flexDirection:'column', alignItems:'flex-start', padding:'26px 10px 12px', flexWrap:'wrap', boxSizing:'border-box'}}>
                                        <Card.Title style={{ fontSize: '16px' }}>{item.title}</Card.Title>
                                        <Card.Text>{item.release_date}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Movies
