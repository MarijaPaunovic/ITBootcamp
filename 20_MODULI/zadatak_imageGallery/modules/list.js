import generateImage from "./general.js";

function generateList(parent) {
    let ul = document.createElement(`ul`);
    ul.style.listStyleType = `none`;
    ul.style.overflow = `hidden`;

    parent.appendChild(ul);

    return ul;
}
// generateListItem
function generateItem(parent, src) {
    let listItem = document.createElement(`li`);
    listItem.style.float = `left`;

    let img = generateImage(src);

    listItem.appendChild(img);

    parent.appendChild(listItem);

    return listItem;
}

export { generateList, generateItem };