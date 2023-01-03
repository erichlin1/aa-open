function changeContext(func, obj) {
    const f = func.bind(obj);
    return f();
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;