const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const img = `url(./imgs/${choosenImage})`;

document.body.style.backgroundImage = img;
document.body.style.backgroundSize = "cover";
console.log(img);