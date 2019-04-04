

function bindDispatch(fn, dispatch) {
    return () => (dispatch(fn()));
}
export default function bindActionCreators(actionCreators, dispatch) { //将函数全部用dispatch包装一层
    return Object.keys(actionCreators).reduce( (obj, key) => {
        obj[key] = bindDispatch(actionCreators[key], dispatch);
    }, {})
}