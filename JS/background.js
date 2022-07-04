const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${randomImage}`;
bgImage.alt = "space-related pic";

document.body.appendChild(bgImage);

//.append accepts Node objects and DOM strings while .appendchild only accepts Node objects.
//.append(bgImage) & .append("hello")
//.appendChild(bgImage) only
