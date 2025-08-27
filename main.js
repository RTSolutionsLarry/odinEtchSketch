const sketchContainer = document.querySelector('.sketchContainer');

const gridSetup = (size) => {
    for (let x = 0; i < size; i++) {
        const box = document.createElement('div')
        box.classList.add('box');
        
        sketchContainer.appendChild(box);
    }
}

gridSetup(8);