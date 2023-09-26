import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'

/*
오류 내용을 천천히 읽어 보면 action에 직렬화가 불가능한 값을 전달했다는 뜻으로 해석할 수 있다.
여기서 직렬화란 redux에서 값을 주고받을 때 object 형태의 값을 string 형태로 변환하는 것을 말한다. (JSON.stringify)
역직렬화는 직렬화의 반대로, 문자열 형태의 객체를 다시 object 형태로 되돌리는 과정이다. (JSON.parse)
Redux는 state, action에 직렬화가 불가능한 값을 전달할 수 없기 때문에 에러가 발생한 것이다.
*/
export default configureStore({
    reducer: {
        movie: movieReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
})
