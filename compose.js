
//对于compose函数，应该可以实现这样的功能，将compose(f1, f2, f3)(args)转化成f1(f2(f3(args)));


export default (...fns) => (...args) => {
    if (fns.length === 1) {
        return fns[0](...args);
    }
    return fns.reduce((a, b) => {
        return a(b(...args));
    })
}