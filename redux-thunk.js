
export default function thunk({getStore, dispatch}) {
    return function (next) {
        return function (action) {
            console.log("thunk 已经执行");
            if (typeof action === "function") {
                 
                action(dispatch, getStore);
            } else {
                next(action);
            }
        }
    }
}