const sketchContainer = document.querySelector('.sketchContainer');
const startButton = document.querySelector('.gridStart');

console.log(startButton);

startButton.addEventListener('click',() => {
    console.log('it works');
});

const gridSetup = (size) => {
    if (size > 100) {
        size = 100;
    }

    for (let x = 0; x < size; x++) {
        const boxRow = document.createElement('div');
        boxRow.classList.add('boxRow');
        sketchContainer.appendChild(boxRow)

        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover',(e) => {
                e.target.classList.add('mouseOver');
            })
            boxRow.appendChild(box);
        }
    }
}

gridSetup(100);