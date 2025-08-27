const sketchContainer = document.querySelector('.sketchContainer');

const gridSetup = (size) => {



    for (let x = 0; x < size; x++) {
        const boxRow = document.createElement('div');
        boxRow.classList.add('boxRow');
        sketchContainer.appendChild(boxRow)

        for (let i = 0; i < size; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            boxRow.appendChild(box);
        }
    }

}

gridSetup(8);