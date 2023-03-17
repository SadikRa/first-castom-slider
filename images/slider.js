let image = [
    'pic-1.jpg',
    'pic-2.jpg',
    'pic-3.jpg',
    'pic-4.jpg',
    'pic-5.jpg',
    'pic-6.jpg',
    'pic-7.jpg',
    'pic-8.jpg',
    'pic-9.jpg',
]

let imgIndex = 0;
const imgEi = document.getElementById('slider-img');
setInterval(() =>{
    if(imgIndex === image.length){
       imgIndex = 0;
    }
    const imageUrl = image[imgIndex];
    imgEi.setAttribute('src' , imageUrl)
    imgIndex++

}, 1000)