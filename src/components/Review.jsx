import React, { useEffect, useState } from 'react'
import api from '../api'

const Review = ({id}) => {
    const [review, setReview] = useState([])

    const reivewList = async () => {
        let res = await api.get(`/movie/${id}/reviews?language=en-US&page=1`)

        // console.log(res.data.results)

        setReview(res.data.results)
    }

    useEffect(() => {
        reivewList()
    }, [])

    return (
        <div className="container review-box">
            {review &&  review.map((item) => (
                <div key={item.id} className="review-item">
                    <h4>{item.author}</h4>
                    <p>${item.content}</p>
                </div>
            ))}

            {/* <div className="review-item">
                <h4>마누엘 상 벤투</h4>
                <p>
                    더 많은 스포일러 없는 미니 리뷰 @ https://www.msbreviews.com/movie-reviews/mini-reviews-2023-edition
                    Blue Beetle은 일반적인 슈퍼 히어로 기원 공식을 따르며 극도로 예측 가능하고 내러티브 창의성이
                    부족하지만 이러한 모든 것 문제는 예외적으로 진정한 공연을 제공하는 자랑스러운 라틴계 출연진(Xolo
                    Maridueña는 매우 인상적)과 영화를 포괄하는 웅장하고 풍부한 멕시코 문화로 잘 보상됩니다. CGI 액션과
                    안무가 있는 전투 시퀀스, 그리고 에너지 넘치는 음악(Bobby Krlic)이 잘 혼합되어 엔터테인먼트도
                    보장됩니다. 분명히 사가에 속하는데도 DCEU의 일부로 분류되는 영화입니다. James Gunn은 아마도 덜
                    알려진 캐릭터로 DCU를 시작하는 위험을 감수하고 싶지 않았을 것입니다. 이는 이해할 수 있는 이유입니다.
                    그러나 곧 소멸될 영화적 세계에 그것을 계속 묶어 두는 것은 매우 의심스럽습니다. 의심의 여지가
                    없습니다. 우리는 Jaime Reyes를 다시 보게 될 것입니다. 등급: B+
                </p>
            </div>
            <div className="review-item">
                <h4>마누엘 상 벤투</h4>
                <p>
                    더 많은 스포일러 없는 미니 리뷰 @ https://www.msbreviews.com/movie-reviews/mini-reviews-2023-edition
                    Blue Beetle은 일반적인 슈퍼 히어로 기원 공식을 따르며 극도로 예측 가능하고 내러티브 창의성이
                    부족하지만 이러한 모든 것 문제는 예외적으로 진정한 공연을 제공하는 자랑스러운 라틴계 출연진(Xolo
                    Maridueña는 매우 인상적)과 영화를 포괄하는 웅장하고 풍부한 멕시코 문화로 잘 보상됩니다. CGI 액션과
                    안무가 있는 전투 시퀀스, 그리고 에너지 넘치는 음악(Bobby Krlic)이 잘 혼합되어 엔터테인먼트도
                    보장됩니다. 분명히 사가에 속하는데도 DCEU의 일부로 분류되는 영화입니다. James Gunn은 아마도 덜
                    알려진 캐릭터로 DCU를 시작하는 위험을 감수하고 싶지 않았을 것입니다. 이는 이해할 수 있는 이유입니다.
                    그러나 곧 소멸될 영화적 세계에 그것을 계속 묶어 두는 것은 매우 의심스럽습니다. 의심의 여지가
                    없습니다. 우리는 Jaime Reyes를 다시 보게 될 것입니다. 등급: B+
                </p>
            </div>
            <div className="review-item">
                <h4>마누엘 상 벤투</h4>
                <p>
                    더 많은 스포일러 없는 미니 리뷰 @ https://www.msbreviews.com/movie-reviews/mini-reviews-2023-edition
                    Blue Beetle은 일반적인 슈퍼 히어로 기원 공식을 따르며 극도로 예측 가능하고 내러티브 창의성이
                    부족하지만 이러한 모든 것 문제는 예외적으로 진정한 공연을 제공하는 자랑스러운 라틴계 출연진(Xolo
                    Maridueña는 매우 인상적)과 영화를 포괄하는 웅장하고 풍부한 멕시코 문화로 잘 보상됩니다. CGI 액션과
                    안무가 있는 전투 시퀀스, 그리고 에너지 넘치는 음악(Bobby Krlic)이 잘 혼합되어 엔터테인먼트도
                    보장됩니다. 분명히 사가에 속하는데도 DCEU의 일부로 분류되는 영화입니다. James Gunn은 아마도 덜
                    알려진 캐릭터로 DCU를 시작하는 위험을 감수하고 싶지 않았을 것입니다. 이는 이해할 수 있는 이유입니다.
                    그러나 곧 소멸될 영화적 세계에 그것을 계속 묶어 두는 것은 매우 의심스럽습니다. 의심의 여지가
                    없습니다. 우리는 Jaime Reyes를 다시 보게 될 것입니다. 등급: B+
                </p>
            </div>
            <div className="review-item">
                <h4>마누엘 상 벤투</h4>
                <p>
                    더 많은 스포일러 없는 미니 리뷰 @ https://www.msbreviews.com/movie-reviews/mini-reviews-2023-edition
                    Blue Beetle은 일반적인 슈퍼 히어로 기원 공식을 따르며 극도로 예측 가능하고 내러티브 창의성이
                    부족하지만 이러한 모든 것 문제는 예외적으로 진정한 공연을 제공하는 자랑스러운 라틴계 출연진(Xolo
                    Maridueña는 매우 인상적)과 영화를 포괄하는 웅장하고 풍부한 멕시코 문화로 잘 보상됩니다. CGI 액션과
                    안무가 있는 전투 시퀀스, 그리고 에너지 넘치는 음악(Bobby Krlic)이 잘 혼합되어 엔터테인먼트도
                    보장됩니다. 분명히 사가에 속하는데도 DCEU의 일부로 분류되는 영화입니다. James Gunn은 아마도 덜
                    알려진 캐릭터로 DCU를 시작하는 위험을 감수하고 싶지 않았을 것입니다. 이는 이해할 수 있는 이유입니다.
                    그러나 곧 소멸될 영화적 세계에 그것을 계속 묶어 두는 것은 매우 의심스럽습니다. 의심의 여지가
                    없습니다. 우리는 Jaime Reyes를 다시 보게 될 것입니다. 등급: B+
                </p>
            </div>
            <div className="review-item">
                <h4>마누엘 상 벤투</h4>
                <p>
                    더 많은 스포일러 없는 미니 리뷰 @ https://www.msbreviews.com/movie-reviews/mini-reviews-2023-edition
                    Blue Beetle은 일반적인 슈퍼 히어로 기원 공식을 따르며 극도로 예측 가능하고 내러티브 창의성이
                    부족하지만 이러한 모든 것 문제는 예외적으로 진정한 공연을 제공하는 자랑스러운 라틴계 출연진(Xolo
                    Maridueña는 매우 인상적)과 영화를 포괄하는 웅장하고 풍부한 멕시코 문화로 잘 보상됩니다. CGI 액션과
                    안무가 있는 전투 시퀀스, 그리고 에너지 넘치는 음악(Bobby Krlic)이 잘 혼합되어 엔터테인먼트도
                    보장됩니다. 분명히 사가에 속하는데도 DCEU의 일부로 분류되는 영화입니다. James Gunn은 아마도 덜
                    알려진 캐릭터로 DCU를 시작하는 위험을 감수하고 싶지 않았을 것입니다. 이는 이해할 수 있는 이유입니다.
                    그러나 곧 소멸될 영화적 세계에 그것을 계속 묶어 두는 것은 매우 의심스럽습니다. 의심의 여지가
                    없습니다. 우리는 Jaime Reyes를 다시 보게 될 것입니다. 등급: B+
                </p>
            </div> */}
        </div>
    )
}

export default Review
