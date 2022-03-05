function generateImage(src) {
    let img = document.createElement(`img`);
    img.src = src;
    img.style.height = `300px`;
    img.style.margin = `10px`;

    return img;
}

// export { generateImage };
// ili
export default generateImage;
// ili napisati samo:
/*
export default function generateImage(src) {
    let img = document.createElement(`img`);
    img.src = src;
    img.style.height = `300px`;
    img.style.margin = `10px`;

    return img;
}
*/