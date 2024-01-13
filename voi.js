const container = document.querySelector('div');
for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
        container.appendChild(document.createElement('div'));
    }
}
const divs = container.querySelectorAll('div');
divs.forEach((e) => {
    e.addEventListener('mouseover', () =>{
        e.style.backgroundColor = 'black';
    })

});
const size = document.querySelector('#size');
function changeSize(newSize){
    if (newSize > 100){
        alert('Djt me may duoi 100 thoi');
        return;
    }
    const divs = container.querySelectorAll('div');
    divs.forEach((div) => {
        div.remove();
    })
    for (let i=0; i<newSize; i++){
        for (let j=0; j<newSize; j++){
            newdiv = document.createElement('div');
            newdiv.style.width = `${1600/newSize}px`;
            newdiv.style.height = `${1600/newSize}px`;
            container.appendChild(newdiv);
        }
    }
}
size.addEventListener('click', () => {
    let newSize = prompt('Enter new size');
    changeSize(newSize);
    const divs = container.querySelectorAll('div');
    divs.forEach((e) => {
        e.addEventListener('mouseover', () =>{
            e.style.backgroundColor = 'black';
        })
    
    });
});

function resetBoard(){
    const divs = container.querySelectorAll('div');
    divs.forEach((div) => {
        div.style.backgroundColor = 'white';
    })
}
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    resetBoard();
});