'use strict';

let createCanvas = (num) => {
    const grid = document.querySelector('#grid');
    grid.innerHTML = ``;
    let boxSize = grid.clientHeight / num;
    let template = ``;
    for (let i = 0; i < num * num; ++i){
        template += `
        <div id='box' style="height:${boxSize}px;width:${boxSize}px;">
        </div>
        `
    }
    grid.innerHTML += template;
}

let fillBoxes = () => {
    const boxes = document.querySelectorAll('#box');

    boxes.forEach((b) => {
        b.addEventListener('mouseenter', () => {
            b.style.backgroundColor = "black";
        })
    });
}
createCanvas(16);
fillBoxes();