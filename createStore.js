

export default function createStore(reducer) {
    let currentStore, listeners = []; //当前对象，和回调监听回调函数

    function subscribe(cb)  {
        listeners.push(cb); //添加新的监听事件
    }
    function getState() {
        return currentStore; //返回最新的store
    }
    function dispatch(action) {
        currentStore = reducer(currentStore, action); //执行reducer，然后更新状态
        listeners.forEach( (cb) => cb()); //调用所有的监听函数
    }
    dispatch({ type: "@cyl-redux" }); //默认派发，来触发reducer的default
    return { subscribe, getState, dispatch };
}