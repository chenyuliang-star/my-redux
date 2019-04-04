
//应用中间件，就是对createStore里面的dispatch进行封装
//使用方法是applyMiddleware(middleware)(createStore)(reducer)

// export default function applyMiddleware(...middleware) { //传入中间件
//     return function (createStore) {
//         return function
//     }
// }

import compose from "./compose";

export default (...middleware) => createStore => reducer => {
    const store = createStore(reducer); //生成store
    let dispatch = store.dispatch; //获取原来的dispatch

    const middleAPI = {
        getStore: store.getStore,
        dispatch: (next) => (dispatch(next))
    }

    //使用middleware对dispatch进行封装,需要保证可以调用多个middleware
    middleware = middleware.map( (item) => (item(middleAPI)));
    dispatch = compose(...middleware)(store.dispatch);
    return {
        ...store,
        dispatch: dispatch
    }
}

 