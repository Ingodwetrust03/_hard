'use strict'

const form = document.querySelector('.create-element')
let newBlock
let shiftingDiv
let divToShift

const DomElement = function(selector, height, width, bg, fontSize){
    this.selector = selector
    this.height = height + 'px'
    this.width = width + 'px'
    this.bg = bg
    this.fontSize = fontSize + 'px'   
}



DomElement.prototype.createDiv = function(){
    newBlock = document.createElement('div')
    newBlock.style.cssText='height:' + this.height + ';' + 'width:' +  this.width +';' + 'background:' + this.bg + ';' + 'font-size:' + this.fontSize + ';'
    newBlock.setAttribute('class', this.selector)
    form.after(newBlock)
}


function shiftDiv (e){
    let computedStyle = getComputedStyle(divToShift)
    let left
    let top

    if (e.keyCode == 37) { // Left
        left = parseInt(computedStyle.left) - 10
    }
    if (e.keyCode == 38) { // Up
        top = parseInt(computedStyle.top) - 10
    }
    if (e.keyCode == 39) { // Right
        left = parseInt(computedStyle.left) + 10
    }
    if (e.keyCode == 40) { // Down
        top = parseInt(computedStyle.top) + 10
    }
    divToShift.style.left = left + 'px';
    divToShift.style.top = top + 'px';
}



document.addEventListener('DOMContentLoaded', () => {
    shiftingDiv = new DomElement('shifting-div', '100', '100', 'purple', '25')
    shiftingDiv.createDiv()

    divToShift = document.querySelector('.shifting-div')
    divToShift.style.position = 'absolute'

})

document.addEventListener('keydown', shiftDiv)

  

    









