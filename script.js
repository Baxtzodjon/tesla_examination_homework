function increaseCount() {
    let countElement = document.querySelector('#count_animation');
    let count = parseInt(countElement.innerText);

    if (count < 80) {
        count += 5;
        countElement.innerText = count;
    }
}

function decreaseCount() {
    let countElement = document.querySelector('#count_animation');
    let count = parseInt(countElement.innerText);

    if (count > 20) {
        count -= 5;
        countElement.innerText = count;
    }
}

function incCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count < 40) {
        count += 5;
        countElement.innerText = count;
    }
}

function decCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count > 5) {
        count -= 5;
        countElement.innerText = count;
    }
}

function incementCount() {
    let countElement = document.querySelector('#count_animation3');
    let count = parseInt(countElement.innerText);

    if (count < 21) {
        count += 2;
        countElement.innerText = count;
    }
}

function decrementCount() {
    let countElement = document.querySelector('#count_animation3');
    let count = parseInt(countElement.innerText);

    if (count > 5) {
        count = 19;
        countElement.innerText = count;
    }
}


let modal_bg = document.querySelector('.modal_bg')
let open_btns = document.querySelectorAll('label[data-open]')
let close_btns = document.querySelectorAll('[data-close]')

open_btns.forEach(btn => {
    btn.onclick = () => {
        modal_bg.style.display = "flex"
    }
})

close_btns.forEach(btn => {
    btn.onclick = (event) => {
        let trg = event.target

        if(trg !== btn) {
            return
        }

        modal_bg.style.display = "none"
    }
})








/* function toggleButton() {
    let toggleButton = document.querySelector('#toggleButton');
    toggleButton = !toggleButton;
}

function updateCount() {
    let countElement = document.querySelector('#count_animation2');
    let count = parseInt(countElement.innerText);

    if (count < 25) {
        let toggleButton = document.querySelector('#toggleButton');
        toggleButton = false;
    }
}

updateCount(); */




/* let white = document.querySelector('#white')
let space_grey = document.querySelector('#space_grey')
let img = document.querySelector('#photo_macbook')
let img2 = document.querySelector('#photo_macbook2')
let h1_buy = document.querySelector('#h1_buy')
let color_name = document.querySelector('#color_name')


let btns = document.querySelectorAll('.btn_blue')

let prev = 0

btns.forEach((btn, idx) => {
    btn.onclick = () => {
        btns[prev].classList.remove('active')
        btn.classList.add('active')

        if (idx === 0) {
            img.setAttribute('src', './img/whells_tesla.png')
            img2.setAttribute('src', './img/whells_tesla.png')
            
            if (color_name.innerText === "19") {
                color_name.innerText = "21"
            } else {
                color_name.innerText === "19"
            }
        } else {
            img2.setAttribute('src', './img/tesla_wheels_2.png')
            img.setAttribute('src', './img/tesla_wheels_2.png')
            

            if (color_name.innerText === "21") {
                color_name.innerText = "19"
            } else {
                color_name.innerText === "21"
            }
        }

        prev = idx
    }
}) */