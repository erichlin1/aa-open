function bindToAnArg(func, arg) {
    // global context
    const f = func.bind(this, arg);
    return f;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;