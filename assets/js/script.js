//creo l'array delle immagini
const images = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]
//setto il puntatore dell'immagine attiva
let activeImage = 0
//selezioniamo l'elemento nella dom images
const imagesElement = document.querySelector('.row > .images')
console.log(imagesElement);
//creiamo un loop che inesrisce gli elementi del nostro array nella dom
for (let i = 0; i < images.length; i++) {
    const imgSrc = images[i]
    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);
    // InsertAjacentHTML at the end
    imagesElement.insertAdjacentHTML('beforeend', imgElement)
}

//selezioniamo tutte le immagini che abbiamo creato 
const allImagesElements = document.querySelectorAll('.row > .images > img')
console.log(allImagesElements);

//azioniamo il next alla pressione del bottone
const nextEl = document.getElementById('next')
nextEl.addEventListener('click', function () {
    console.log('cliccato next');
    console.log(allImagesElements); //array[index]
    // selezioniamo l'immagine corrente
    const currentImage = allImagesElements[activeImage]
    console.log(currentImage);
    // remove the active class from the active image
    currentImage.classList.remove('active')
    // incremente the value of the activeImage variable
    activeImage++ // increment the value of activeImage of 1 every time we click on the next button
    // select the next slide
    console.log(activeImage);
    const nextImage = allImagesElements[activeImage]
    // add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
})

//azioniamo il prev alla pressione del bottone
const prevEl = document.getElementById('prev')
prevEl.addEventListener('click', function () {
    console.log('cliccato prev');
    console.log(allImagesElements); //array[index]
    // selezioniamo l'immagine corrente
    const currentImage = allImagesElements[activeImage]
    console.log(currentImage);
    // remove the active class from the active image
    currentImage.classList.remove('active')
    // incremente the value of the activeImage variable
    activeImage-- // increment the value of activeImage of 1 every time we click on the next button
    // select the next slide
    console.log(activeImage);
    const nextImage = allImagesElements[activeImage]
    // add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
})