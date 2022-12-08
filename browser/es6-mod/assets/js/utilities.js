export const getIndex = () => {
    // intialize 'wrapper' variable with the element object (instance of a class) that has property value 'wrapper'
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
};