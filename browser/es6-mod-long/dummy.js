// I'm getting this Error Message: Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'.
// Why is that?

const subtractElement = () => {
    const elements = document.getElementById('aboutMe');
    const tagName = 'P';
    const nodes = elements.childNodes; 
    const nodesArr = Array.from(nodes);
    const indexOfLastPNode = nodesArr.lastIndexOf((node) => node.nodeName == tagName);
    console.log(indexOfLastPNode);
    const lastNode = nodes.item(indexOfLastPNode);
    elements.removeChild(lastNode);
};