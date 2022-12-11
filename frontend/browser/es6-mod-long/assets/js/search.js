export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    return document.getElementById(id);
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    return document.getElementsByTagName(tag).item(0);
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    return document.getElementsByClassName(cls).item(0);
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    // returns non-live array of tag
    return Array.from(document.getElementsByTagName(tag));
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    return Array.from(document.getElementsByClassName(cls));
}