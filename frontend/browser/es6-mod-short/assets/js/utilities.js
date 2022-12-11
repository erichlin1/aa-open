export const getIndex = () => {
    // intialize 'wrapper' variable with the element object (instance of a class) that has property value 'wrapper'
    const wrapper = document.getElementById('wrapper');
    // accessing dataset property from wrapper which is an element of HTMLElement
    // the dataset property represents the 'data-index' attribute, which is set to string 1.
    // parseInt parses '1' to converts it to an integer
    return parseInt(wrapper.dataset.index);
};