//creo l'array delle immagini
const images = [
    '../img/01.webp',
    '../img/02.webp',
    '../img/03.webp',
    '../img/04.webp',
    '../img/05.webp'
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
const allImagesElement = document.querySelectorAll('.slider > .images > img')

//azioniamo il next alla pressione del bottone
const nextEl = document.querySelector('.next')
nextEl.addEventListener('click', function () {
  console.log('cliccato next');



})