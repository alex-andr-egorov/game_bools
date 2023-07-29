const block = document.querySelector('.circle');

block.style.width = `${600}px`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// circle
const	backgroundOne = 'blue';
const backgroundThoo = 'black';
const borderRradius = 100;
function randomCount() {
    const countElement = (Math.floor(Math.random() * 10) + 1);

    let element = 0;
    window.globalVariable = countElement;
    while (countElement > element) {
        const randomPositionX = (Math.floor(Math.random() * 600) + 1);
        const randomPositionY = (Math.floor(Math.random() * 600) + 1);

        const size = (Math.floor(Math.random() * 50) + 20);

        element += 1;
        const newElement = document.createElement('div')
        newElement.style.marginLeft = `${randomPositionX}px`;


        newElement.style.marginTop = `${randomPositionY}px`;

        // newElement.style.right = `${randomPosition}px`;
        newElement.style.position = 'absolute';
        newElement.style.width = `${size}px`;
        newElement.style.height = `${size}px`;
        newElement.style.backgroundColor = getRandomHexColor();
        newElement.style.borderRadius = `${borderRradius}%`;
        newElement.classList.add('road')
        block.appendChild(newElement);
        console.log(newElement)
        
    }
    
  }

console.log(randomCount())
let count = 0;
function findRoad(event) {
    event.target.style.background = 'black';
    event.target.style.width = `${10}px`;
    event.target.style.height = `${10}px`;
    count += 1
    window.countElem = count;
    if (window.countElem === window.globalVariable){
        alert(`Всего ${window.globalVariable}`)
    }


}

const road = document.querySelectorAll('.road')
road.forEach(clickRoad => {
    clickRoad.addEventListener('click', findRoad);

})
